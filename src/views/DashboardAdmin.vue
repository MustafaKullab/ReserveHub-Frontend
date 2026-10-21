<template>
  <div class="DashboardAdmin" style="background-color: var(--main-background)">
    <TopBar />
    <div class="main d-flex">
      <SideBar />

      <div class="content p-3 flex-grow-1">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb">
            <li class="breadcrumb-item m-0">
              <router-link class="text-decoration-none" :to="{ name: 'homePage' }"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item m-0">
              <router-link class="text-decoration-none" :to="{ name: 'dashboardPage' }"
                >Admin</router-link
              >
            </li>
            <li class="breadcrumb-item m-0 active text-muted" aria-current="page">
              Dashboard Overview
            </li>
          </ol>
        </nav>

        <div
          class="header p-3 rounded-3 d-flex flex-column flex-md-row gap-2 align-items-center justify-content-between"
          style="background-color: #f8fbfe"
        >
          <div class="title">
            <h4 class="fw-bold m-0 mb-1" style="color: var(--main-color)">Dashboard Overview</h4>
            <p class="text-muted m-0">
              A quick snapshot of services, bookings and registered users.
            </p>
          </div>
          <div
            class="reversehubAdmin d-flex align-items-center gap-3 p-3 rounded-3"
            style="background-color: #eff6ff"
          >
            <div class="icon" style="color: #398bef">
              <i class="bi bi-activity fs-5"></i>
            </div>
            <div class="text">
              <h6 class="m-0">ReserveHub Admin</h6>
              <p class="m-0 small" style="color: #6884a9">Platform overview</p>
            </div>
          </div>
        </div>

        <div class="statisticsBoxes row my-3">
          <div class="col-lg-6 col-xl-3 d-flex">
            <div
              class="box d-flex align-items-center gap-3 p-3 border bg-white rounded-3 mb-3 mb-xl-0 flex-fill"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="width: 50px; height: 50px; background-color: #e1f1ff; color: #1a7aff"
              >
                <i class="bi bi-people fs-4"></i>
              </div>
              <div class="details">
                <div class="text-muted">Total Users</div>
                <div class="number fs-4 fw-bold">{{ countsUsers?.total || 0 }}</div>
                <div class="small" style="color: #abb3c0">Manage Users</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-3 d-flex">
            <div
              class="box d-flex align-items-center gap-3 p-3 border bg-white rounded-3 mb-3 mb-xl-0 flex-fill"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="width: 50px; height: 50px; background-color: #efebff; color: #7859dc"
              >
                <i class="bi bi-briefcase fs-4"></i>
              </div>
              <div class="details">
                <div class="text-muted">Total Services</div>
                <div class="number fs-4 fw-bold">{{ totalServices || 0 }}</div>
                <div class="small" style="color: #abb3c0">Manage Services</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-3 d-flex">
            <div
              class="box d-flex align-items-center gap-3 p-3 border bg-white rounded-3 mb-3 mb-lg-0 flex-fill"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="width: 50px; height: 50px; background-color: #e4f9ed; color: #3cbb84"
              >
                <i class="bi bi-calendar4 fs-4"></i>
              </div>
              <div class="details">
                <div class="text-muted">Total Bookings</div>
                <div class="number fs-4 fw-bold">{{ countsBookings?.total || 0 }}</div>
                <div class="small" style="color: #abb3c0">Manage Bookings</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-3 d-flex">
            <div
              class="box d-flex align-items-center gap-3 p-3 border bg-white rounded-3 mb-3 mb-lg-0 flex-fill"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="width: 50px; height: 50px; background-color: #ffeed0; color: #f4a21c"
              >
                <i class="bi bi-clock fs-4"></i>
              </div>
              <div class="details">
                <div class="text-muted">Pending Bookings</div>
                <div class="number fs-4 fw-bold">{{ countsBookings.pending || 0 }}</div>
                <div class="small" style="color: #abb3c0">Needs attention</div>
              </div>
            </div>
          </div>
        </div>

        <div class="overviewTables row align-items-stretch">
          <div class="col-lg-6 d-flex">
            <div
              class="tableContainer bg-white p-2 rounded flex-fill d-flex flex-column border mb-3 mb-lg-0"
            >
              <TableSkeleton v-if="loadingBookings" />
              <div v-else>
                <div
                  class="header p-2 px-1 d-flex align-items-center justify-content-between flex-column flex-md-row gap-2"
                >
                  <div class="title d-flex gap-2">
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-3"
                      style="
                        width: 35px;
                        height: 35px;
                        background-color: #e7f2ff;
                        color: #2785f5;
                        flex-shrink: 0;
                      "
                    >
                      <i class="bi bi-calendar4 fs-5"></i>
                    </div>
                    <div class="text">
                      <div class="fw-bold fs-5">Bookings Overview</div>
                      <div class="parag" style="color: #93a4bb">
                        A quick look at bookings in your system
                      </div>
                    </div>
                  </div>
                  <div class="link">
                    <router-link
                      class="d-flex align-items-center text-decoration-none gap-2"
                      style="width: 80px"
                      :to="{ name: 'bookingsPage' }"
                    >
                      <div class="text">View All</div>
                      <div class="icon" style="margin-top: 1px">
                        <i class="bi bi-arrow-right"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="table-responsive custom-scrollbar flex-grow-1">
                  <table class="table container-table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style="background-color: #f0f4fb; border-top-left-radius: 5px !important"
                          class=" "
                        >
                          Customer
                        </th>
                        <th scope="col" style="background-color: #f0f4fb">Service</th>
                        <th scope="col" style="background-color: #f0f4fb">Date & Time</th>
                        <th scope="col" style="background-color: #f0f4fb">Status</th>
                        <th
                          scope="col"
                          style="background-color: #f0f4fb; border-top-right-radius: 5px"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(booking, i) of bookings" :key="booking?._id">
                        <td>
                          <div class="customer-cell fw-bold mt-1">
                            <div class="customerDetails d-flex align-items-center gap-3">
                              <div class="image" style="flex-shrink: 0">
                                <img
                                  :src="`${apiUrlImage}${booking?.userId?.avatar}`"
                                  style="width: 50px; height: 50px"
                                  class="service-image rounded-pill"
                                  :alt="booking?.userId?.name"
                                  @error="handleImageError"
                                />
                              </div>

                              <div class="info">
                                <div class="name fw-bold">{{ booking?.userId?.name }}</div>
                                <div class="text description text-muted">
                                  {{ booking.userId.email }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="service-cell mt-2">
                            <div class="name fw-bold">{{ booking?.serviceId?.name }}</div>
                          </div>
                        </td>

                        <td>
                          <div class="dateAndTime d-flex align-items-center gap-2 mt-2">
                            <div class="date">
                              <div class="dateFormat text-muted">
                                {{ formatDate(booking?.startTime) }}
                              </div>
                            </div>
                            <div>-</div>
                            <div class="time">
                              <div class="timeFormat text-muted">
                                {{ formatTime(booking?.startTime) }}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div
                            class="status rounded mt-3"
                            :class="booking?.status"
                            style="padding: 5px 10px 5px 25px; width: fit-content"
                          >
                            {{ capitalize(booking?.status) }}
                          </div>
                        </td>
                        <td class="actions">
                          <div class="viewLink mt-3">
                            <router-link
                              class="edit btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
                              :to="{ name: 'bookingDetails', params: { bookingId: booking?._id } }"
                            >
                              <div class="icon"><i class="bi bi-eye"></i></div>
                              <div class="text">View</div>
                            </router-link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex">
            <div class="tableContainer bg-white p-2 rounded flex-fill d-flex flex-column border">
              <TableSkeleton v-if="loadingUsers" />
              <div v-else>
                <div
                  class="header p-2 px-1 d-flex align-items-center justify-content-between flex-column flex-md-row gap-3"
                >
                  <div class="title d-flex gap-2">
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-3"
                      style="
                        width: 35px;
                        height: 35px;
                        background-color: #e7f2ff;
                        color: #2785f5;
                        flex-shrink: 0;
                      "
                    >
                      <i class="bi bi-people fs-5"></i>
                    </div>
                    <div class="text">
                      <div class="fw-bold fs-5">Users Overview</div>
                      <div class="parag" style="color: #93a4bb">
                        A quick look at registered users in your system
                      </div>
                    </div>
                  </div>
                  <div class="link">
                    <router-link
                      class="d-flex align-items-center text-decoration-none gap-2"
                      :to="{ name: 'manageUsers' }"
                    >
                      <div class="text">View All</div>
                      <div class="icon" style="margin-top: 1px">
                        <i class="bi bi-arrow-right"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="table-responsive custom-scrollbar flex-grow-1">
                  <table class="table users-overview-table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style="background-color: #f0f4fb; border-top-left-radius: 5px !important"
                          class=" "
                        >
                          User
                        </th>
                        <th scope="col" style="background-color: #f0f4fb">Email</th>
                        <th scope="col" style="background-color: #f0f4fb">Role</th>
                        <th
                          scope="col"
                          style="background-color: #f0f4fb; border-top-right-radius: 5px"
                        >
                          Joined
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, i) of users" :key="user?._id">
                        <td>
                          <div class="customer-cell fw-bold mt-1">
                            <div class="customerDetails d-flex align-items-center gap-3">
                              <div class="image" style="flex-shrink: 0">
                                <img
                                  :src="`${apiUrlImage}${user?.avatar}`"
                                  style="width: 50px; height: 50px"
                                  class="service-image rounded-pill"
                                  :alt="user?.name"
                                  @error="handleImageError"
                                />
                              </div>

                              <div class="info">
                                <div class="name fw-bold">{{ user?.name }}</div>
                                <div class="text description text-muted">
                                  {{ user?.email }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="email mt-2">
                            <div class="name fw-bold">{{ user?.email }}</div>
                          </div>
                        </td>

                        <td>
                          <div class="role mt-2 rounded-pill" :class="user?.role">
                            {{ user?.role }}
                          </div>
                        </td>

                        <td>
                          <div class="joined mt-3">
                            {{ formatDate(user?.createdAt) }}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-bottom-section row align-items-stretch my-3">
          <div class="col-lg-6 d-flex">
            <div
              class="booking-status-overview p-3 bg-white rounded border flex-fill d-flex flex-column mb-3 mb-lg-0"
            >
              <div class="header p-2 px-1">
                <div class="title d-flex gap-2">
                  <div
                    class="icon d-flex align-items-center justify-content-center rounded-3"
                    style="
                      width: 35px;
                      height: 35px;
                      background-color: #e7f2ff;
                      color: #2785f5;
                      flex-shrink: 0;
                    "
                  >
                    <i class="bi bi-pie-chart-fill"></i>
                  </div>
                  <div class="text">
                    <div class="fw-bold fs-5">Booking Status Overview</div>
                    <div class="parag" style="color: #93a4bb">
                      Status counts across all bookings
                    </div>
                  </div>
                </div>
              </div>

              <div class="boxes row flex-grow-1">
                <div class="col-lg-6 mb-3">
                  <div
                    class="box pending position-relative p-3 pt-4 border rounded h-100 d-flex flex-column justify-content-center"
                  >
                    <div class="title">
                      <div class="text">Pending</div>
                      <div
                        class="progressContainer rounded-pill w-100"
                        style="width: 100%; background-color: #ebf0f6"
                      >
                        <div
                          class="progress bg-warning rounded-pill"
                          :style="{
                            width:
                              (countsBookings?.pending / countsBookings?.total || 0) * 100 + `%`,
                          }"
                        ></div>
                      </div>
                    </div>
                    <div class="count position-absolute fs-4" style="top: 5px; right: 15px">
                      {{ countsBookings?.pending }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div
                    class="box confirmed position-relative p-3 pt-4 border rounded h-100 d-flex flex-column justify-content-center"
                  >
                    <div class="title">
                      <div class="text">Confirmed</div>
                      <div
                        class="progressContainer rounded-pill w-100"
                        style="width: 100%; background-color: #ebf0f6"
                      >
                        <div
                          class="progress bg-success rounded-pill"
                          :style="{
                            width:
                              (countsBookings.confirmed / countsBookings.total || 0) * 100 + `%`,
                          }"
                        ></div>
                      </div>
                    </div>
                    <div class="count position-absolute fs-4" style="top: 5px; right: 15px">
                      {{ countsBookings.confirmed }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-3 mb-lg-0">
                  <div
                    class="box completed position-relative p-3 pt-4 border rounded h-100 d-flex flex-column justify-content-center"
                  >
                    <div class="title">
                      <div class="text">Completed</div>
                      <div
                        class="progressContainer rounded-pill w-100"
                        style="width: 100%; background-color: #ebf0f6"
                      >
                        <div
                          class="progress bg-primary rounded-pill"
                          :style="{
                            width:
                              (countsBookings.completed / countsBookings.total || 0) * 100 + `%`,
                          }"
                        ></div>
                      </div>
                    </div>
                    <div class="count position-absolute fs-4" style="top: 5px; right: 15px">
                      {{ countsBookings.completed }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-3 mb-lg-0">
                  <div
                    class="box cancelledcompleted position-relative p-3 pt-4 border rounded h-100 d-flex flex-column justify-content-center"
                  >
                    <div class="title">
                      <div class="text">Cancelled</div>
                      <div
                        class="progressContainer rounded-pill w-100"
                        style="width: 100%; background-color: #ebf0f6"
                      >
                        <div
                          class="progress bg-danger rounded-pill"
                          :style="{
                            width:
                              (countsBookings?.cancelled / countsBookings?.total || 0) * 100 + `%`,
                          }"
                        ></div>
                      </div>
                    </div>
                    <div class="count position-absolute fs-4" style="top: 5px; right: 15px">
                      {{ countsBookings?.cancelled }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex">
            <div class="quick-navigation p-3 bg-white rounded border flex-fill d-flex flex-column">
              <div class="header p-2 px-1">
                <div class="title d-flex gap-2">
                  <div
                    class="icon d-flex align-items-center justify-content-center rounded-3"
                    style="
                      width: 35px;
                      height: 35px;
                      background-color: #e7f2ff;
                      color: #2785f5;
                      flex-shrink: 0;
                    "
                  >
                    <i class="bi bi-grid"></i>
                  </div>
                  <div class="text">
                    <div class="fw-bold fs-5">Quick Navigation</div>
                    <div class="parag" style="color: #93a4bb">Go directly to an admin section.</div>
                  </div>
                </div>
              </div>

              <div class="links flex-grow-1">
                <div class="manageBookings mb-2">
                  <router-link
                    class="text-decoration-none d-flex align-items-center gap-3 p-3 border rounded-3"
                    :to="{ name: 'bookingsPage' }"
                  >
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-3"
                      style="width: 40px; height: 40px; background-color: #ecf5ff"
                    >
                      <i class="bi bi-calendar fs-5"></i>
                    </div>
                    <div class="title">
                      <div class="fw-bold" style="color: #273f6b">Manage Bookings</div>
                      <div class="text-muted small" style="color: #c9d0db">
                        Review and update reservations
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="manageServices mb-2">
                  <router-link
                    class="text-decoration-none d-flex align-items-center gap-3 p-3 border rounded-3"
                    :to="{ name: 'manageServices' }"
                  >
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-3"
                      style="width: 40px; height: 40px; background-color: #ecf5ff"
                    >
                      <i class="bi bi-briefcase fs-5"></i>
                    </div>
                    <div class="title">
                      <div class="fw-bold" style="color: #273f6b">Manage Services</div>
                      <div class="text-muted small" style="color: #c9d0db">
                        Edit services and availability
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="manageServices">
                  <router-link
                    class="text-decoration-none d-flex align-items-center gap-3 p-3 border rounded-3"
                    :to="{ name: 'manageUsers' }"
                  >
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-3"
                      style="width: 40px; height: 40px; background-color: #ecf5ff"
                    >
                      <i class="bi bi-people fs-5"></i>
                    </div>
                    <div class="title">
                      <div class="fw-bold" style="color: #273f6b">Manage Users</div>
                      <div class="text-muted small" style="color: #c9d0db">
                        View accounts and roles
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
import { getBookings } from "@/services/bookingService";
import { getServices } from "@/services/servicesService";
import { getUsers } from "@/services/userServices";
import { capitalize, onMounted, ref } from "vue";

// Get Default avatar
import defaultAvatar from "@/assets/defaultUser.png";
import TableSkeleton from "@/components/TableSkeleton.vue";

// Define url of image
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

// Define the array to store the users
const users = ref([]);
const countsUsers = ref({});

// Define the array to store the services
const services = ref([]);
const totalServices = ref(0);

// Define the array to store the bookings
const bookings = ref([]);
const countsBookings = ref({});

// Define loading
const loadingBookings = ref(false);
const loadingUsers = ref(false);

const fetchUsers = async () => {
  try {
    loadingUsers.value = true;
    const data = await getUsers();
    users.value = data.users.slice(0, 4);
    countsUsers.value = data.counts;
  } catch (error) {
    console.log(error.response.data);
  } finally {
    loadingUsers.value = false;
  }
};

const fetchServices = async () => {
  try {
    const data = await getServices();
    services.value = data.services;
    totalServices.value = data.pagination.totalItems;
  } catch (error) {
    console.log(error.response.data);
  }
};

const fetchBookings = async () => {
  try {
    loadingBookings.value = true;
    const data = await getBookings({ scope: "all" });
    bookings.value = data.result.bookings.slice(0, 4);
    countsBookings.value = data.result.counts;
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  } finally {
    loadingBookings.value = false;
  }
};

const formatDate = (startTime) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(startTime);

  const monthOrder = date.getMonth();
  const dayOrder = date.getDate();
  const fullYear = date.getFullYear();

  return months[monthOrder] + " " + dayOrder + ", " + fullYear;
};

const formatTime = (startTime) => {
  return (
    String(new Date(startTime).getHours()).padStart(2, "0") +
    ":" +
    String(new Date(startTime).getMinutes()).padStart(2, "0")
  );
};

const handleImageError = (event) => {
  event.target.onerror = null;
  event.target.src = defaultAvatar;
};

onMounted(() => {
  fetchUsers();
  fetchServices();
  fetchBookings();
});
</script>

<style lang="scss">
.tableContainer {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;

  .table-responsive {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  .container-table {
    width: 100%;
    min-width: 1100px;
    margin-bottom: 0;
    white-space: nowrap;
    border-collapse: separate;
    border-spacing: 0;
  }

  .container-table th,
  .container-table td {
    vertical-align: middle;
    padding: 12px;
  }

  .pagination {
    gap: 12px;
    flex-wrap: wrap;
    padding: 12px 4px;
  }
}

/* Tablets and mobile */
@media (max-width: 768px) {
  .bookings {
    .container-table {
      min-width: 1000px;
    }

    .container-table th,
    .container-table td {
      padding: 10px;
    }

    .customer-cell {
      min-width: 240px;
      width: 240px;
    }

    .service-cell {
      min-width: 280px;
      width: 280px;
    }

    .pagination {
      align-items: flex-start !important;
    }

    .pagination .info {
      width: 100%;
      font-size: 13px;
    }

    .pagination .buttons {
      flex-wrap: wrap;
    }
  }
}

.bookings {
  width: 100%;
  min-width: 0;
  overflow: hidden;

  .table-responsive {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .container-table {
    margin-bottom: 0;
    white-space: nowrap;
  }
}

td {
  .status {
    position: relative;

    &.pending {
      background-color: #fef0d5;
      color: #fd9503;
    }

    &.confirmed {
      background-color: #e2f9ee;
      color: #049d4e;
    }

    &.completed {
      background-color: #e5f2ff;
      color: #0b6bfe;
    }

    &.cancelled {
      background-color: #fee0df;
      color: #ec0f11;
    }

    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
    }

    &.pending::before {
      background-color: #fd9503;
    }

    &.confirmed::before {
      background-color: #049d4e;
    }

    &.completed::before {
      background-color: #0b6bfe;
    }

    &.cancelled::before {
      background-color: #ec0f11;
    }
  }
}

.content {
  min-width: 0;
}

.custom-scrollbar {
  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #edf6ff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8dbbfa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #0962f0;
  }

  scrollbar-width: thin;
  scrollbar-color: #8dbbfa #edf6ff;
}

.users-overview-table {
  min-width: 800px !important;
}

tbody {
  .role {
    padding: 6px;
    text-align: center;
    &.admin {
      background-color: #e2f1ff !important;
      color: #0050fa;
    }
    &.user {
      background-color: #ece8fd !important;
      color: #6545be;
    }
  }
}

@media (max-width: 767px) {
  .parag {
    font-size: 13px !important;
  }
}
</style>
