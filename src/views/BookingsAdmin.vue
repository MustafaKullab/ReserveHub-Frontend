<template>
  <div class="BookingsPage" style="background-color: var(--main-background)">
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
            <li class="breadcrumb-item active text-muted m-0" aria-current="page">
              Manage Bookings
            </li>
          </ol>
        </nav>

        <div
          class="header p-3 rounded-3 d-flex align-items-center justify-content-between"
          style="background-color: #f8fbfe"
        >
          <div class="title">
            <h4 class="fw-bold m-0 mb-1" style="color: var(--main-color)">Manage Bookings</h4>
            <p class="text-muted m-0">
              View and manage all bookings. You can update the booking status and view customer
              details.
            </p>
          </div>
          <div class="image">
            <img src="@/assets/BookingsAdmin.png" style="width: 100px" alt="Manage Bookings" />
          </div>
        </div>

        <div class="statisticsBoxes my-3">
          <div class="row">
            <div class="col-xl-4 col-xxl-3">
              <div class="box p-2 bg-white rounded-3 d-flex align-items-center gap-3 mb-2 mb-xxl-0">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    background-color: #d8ecfc;
                    color: #0049fd;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-calendar4-range fs-4"></i>
                </div>
                <div class="detai">
                  <div class="title text-muted">Total Bookings</div>
                  <div class="number fs-4 fw-bold">{{ counts.total || 0 }}</div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-xxl-2">
              <div class="box p-2 bg-white rounded-3 d-flex align-items-center gap-3 mb-2 mb-xxl-0">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    background-color: #fee9c3;
                    color: #ff8b0b;
                    flex-shrink: 0;
                  "
                >
                  <i><i class="bi bi-clock fs-4"></i></i>
                </div>
                <div class="detai">
                  <div class="title text-muted">Pending</div>
                  <div class="number fs-4 fw-bold">{{ counts.pending || 0 }}</div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-xxl-2">
              <div class="box p-2 bg-white rounded-3 d-flex align-items-center gap-3 mb-2 mb-xxl-0">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    background-color: #dff6ea;
                    color: #049e52;
                    flex-shrink: 0;
                  "
                >
                  <i><i class="bi bi-check-circle-fill fs-4"></i></i>
                </div>
                <div class="detai">
                  <div class="title text-muted">Confirmed</div>
                  <div class="number fs-4 fw-bold">{{ counts.confirmed || 0 }}</div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-xxl-2">
              <div class="box p-2 bg-white rounded-3 d-flex align-items-center gap-3 mb-2 mb-xl-0">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    background-color: #fce1e1;
                    color: #fe0606;
                    flex-shrink: 0;
                  "
                >
                  <i><i class="bi bi-x-circle fs-4"></i></i>
                </div>
                <div class="detai">
                  <div class="title text-muted">Cancelled</div>
                  <div class="number fs-4 fw-bold">{{ counts.cancelled || 0 }}</div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-xxl-3">
              <div class="box p-2 bg-white rounded-3 d-flex align-items-center gap-3 mb-2 mb-xl-0">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    background-color: #eef7fe;
                    color: #0f55fe;
                    flex-shrink: 0;
                  "
                >
                  <i><i class="bi bi-calendar2-check fs-4"></i></i>
                </div>
                <div class="detai">
                  <div class="title text-muted">Completed</div>
                  <div class="number fs-4 fw-bold">{{ counts.completed || 0 }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="Filter p-3 my-3 rounded-4" style="background-color: #f5fafe">
          <form class="row" @submit.prevent>
            <div class="col-md-6 col-xl-6 pe-md-1 mb-3 mb-md-0">
              <div class="input-group">
                <span class="input-group-text" id="search"><i class="bi bi-search"></i></span>
                <input
                  type="text"
                  class="form-control rounded-end-4"
                  placeholder="Search for a service.."
                  aria-label="search"
                  aria-describedby="search"
                  style="box-shadow: none"
                  v-model="searchInput"
                />
              </div>
            </div>

            <div class="col-md-3 px-md-1 mb-3 mb-md-0">
              <div class="status">
                <select
                  class="form-select"
                  aria-label="status"
                  style="box-shadow: none"
                  v-model="queries.status"
                >
                  <option value="" selected>All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div class="col-md-3 px-md-1 mb-3 mb-md-0">
              <div class="pageSize">
                <select
                  class="form-select"
                  aria-label="pageSize"
                  style="box-shadow: none"
                  v-model="queries.limit"
                >
                  <option value="5" selected>5 per page</option>
                  <option value="10">10 per page</option>
                  <option value="20">20 per page</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div class="bookings-skeleton p-2 bg-white rounded" v-if="loading">
          <div class="table-responsive">
            <table class="table bookings-table">
              <thead>
                <tr>
                  <th
                    v-for="(column, i) in [
                      '#',
                      'Customer',
                      'Service',
                      'Date & Time',
                      'Price',
                      'Status',
                      'Actions',
                    ]"
                    :key="i"
                    :style="{
                      backgroundColor: '#f0f4fb',
                      borderTopLeftRadius: i === 0 ? '5px' : '0',
                      borderTopRightRadius: i === 6 ? '5px' : '0',
                    }"
                  >
                    {{ column }}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="n in 5" :key="n">
                  <td>
                    <div class="skeleton skeleton-number mt-3"></div>
                  </td>

                  <td>
                    <div class="d-flex align-items-center gap-3">
                      <div class="skeleton skeleton-avatar"></div>

                      <div class="flex-grow-1">
                        <div class="skeleton skeleton-name mb-2"></div>
                        <div class="skeleton skeleton-email"></div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="d-flex align-items-center gap-3">
                      <div class="skeleton skeleton-service-image"></div>

                      <div class="flex-grow-1">
                        <div class="skeleton skeleton-service-name mb-2"></div>
                        <div class="skeleton skeleton-duration"></div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="skeleton skeleton-date mb-2"></div>
                    <div class="skeleton skeleton-time"></div>
                  </td>

                  <td>
                    <div class="skeleton skeleton-price mt-3"></div>
                  </td>

                  <td>
                    <div class="skeleton skeleton-status mt-3"></div>
                  </td>

                  <td>
                    <div class="d-flex align-items-center gap-2 mt-2">
                      <div class="skeleton skeleton-view-button"></div>
                      <div class="skeleton skeleton-menu-button"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 px-1 py-2">
            <div class="skeleton skeleton-pagination-info"></div>

            <div class="d-flex align-items-center gap-2">
              <div v-for="n in 5" :key="n" class="skeleton skeleton-page-button"></div>
            </div>
          </div>
        </div>

        <div class="bookings p-2 bg-white rounded" v-if="!loading && bookings.length > 0">
          <div class="table-responsive">
            <table class="table bookings-table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style="background-color: #f0f4fb; border-top-left-radius: 5px !important"
                    class=" "
                  >
                    #
                  </th>
                  <th scope="col" style="background-color: #f0f4fb">Customer</th>
                  <th scope="col" style="background-color: #f0f4fb">Service</th>
                  <th scope="col" style="background-color: #f0f4fb">Date & Time</th>
                  <th scope="col" style="background-color: #f0f4fb">Price</th>
                  <th scope="col" style="background-color: #f0f4fb">Status</th>
                  <th scope="col" style="background-color: #f0f4fb; border-top-right-radius: 5px">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(booking, i) of bookings" :key="booking?._id">
                  <td class="customer-order" scope="row">
                    <div class="mt-3">{{ i + 1 }}</div>
                  </td>
                  <td>
                    <div class="customer-cell fw-bold mt-1">
                      <div class="customerDetails d-flex align-items-center gap-3">
                        <div class="image" style="flex-shrink: 0">
                          <img
                            :src="`${apiUrlImage}${booking?.userId?.avatar}`"
                            style="width: 50px; height: 50px"
                            class="service-image rounded-pill"
                            :alt="booking?.userId.username"
                            @error="handleImageError"
                          />
                        </div>

                        <div class="info">
                          <div class="name fw-bold">{{ booking.userId.username }}</div>
                          <div class="text description text-muted">{{ booking.userId.email }}</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="service-cell d-flex align-items-center gap-3 mt-2">
                      <div class="image" style="flex-shrink: 0">
                        <img src="@/assets/2.png" style="width: 70px" alt="" />
                      </div>
                      <div class="details">
                        <div class="name fw-bold">{{ booking.serviceId.name }}</div>
                        <div class="duration text-muted">
                          {{ booking.serviceId.durationMinutes }} min
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="dateAndTime mt-2">
                      <div class="date d-flex align-items-center gap-2 mb-1">
                        <div class="icon" style="color: #0c6bfe">
                          <i class="bi bi-calendar2-event"></i>
                        </div>
                        <div class="dateFormat text-muted">{{ formatDate(booking.startTime) }}</div>
                      </div>
                      <div class="time d-flex align-items-center gap-2">
                        <div class="icon" style="color: #0c6bfe"><i class="bi bi-clock"></i></div>
                        <div class="timeFormat text-muted">
                          {{ formatTime(booking.startTime) }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="price">
                    <div class="rounded fw-bold mt-3">${{ booking.serviceId.price }}</div>
                  </td>
                  <td>
                    <div
                      class="status rounded mt-3"
                      :class="booking.status"
                      style="padding: 5px 10px 5px 25px; width: fit-content"
                    >
                      {{ capitalize(booking.status) }}
                    </div>
                  </td>
                  <td class="actions">
                    <div class="d-flex align-items-center gap-2 mt-2">
                      <div class="viewLink">
                        <router-link
                          class="edit btn btn-outline-primary d-flex align-items-center gap-2"
                          :to="{ name: 'bookingDetails', params: { bookingId: booking._id } }"
                        >
                          <div class="icon"><i class="bi bi-eye"></i></div>
                          <div class="text">View</div>
                        </router-link>
                      </div>
                      <div>
                        <div class="icon" style="margin-top: 1px">
                          <div class="dropdown">
                            <button
                              class="btn btn-light dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              style="appearance: none"
                              :disabled="
                                booking.status === 'completed' || booking.status === 'cancelled'
                              "
                            >
                              <i class="bi bi-three-dots"></i>
                            </button>
                            <ul class="dropdown-menu py-0">
                              <li class="ms-0 py-1" v-if="booking.status === 'pending'">
                                <div
                                  class="dropdown-item active d-flex align-items-center gap-2"
                                  style="cursor: pointer"
                                  @click.prevent="
                                    changeStatusOfBooking({
                                      status: 'confirmed',
                                      bookingId: booking._id,
                                    })
                                  "
                                >
                                  <div class="icon" style="color: #05a258">
                                    <i class="bi bi-check-square-fill"></i>
                                  </div>
                                  <div class="text">Confirm Booking</div>
                                </div>
                              </li>
                              <li class="ms-0 py-1" v-if="booking.status === 'confirmed'">
                                <div
                                  class="dropdown-item d-flex align-items-center gap-2"
                                  style="cursor: pointer"
                                  @click.prevent="
                                    changeStatusOfBooking({
                                      status: 'completed',
                                      bookingId: booking._id,
                                    })
                                  "
                                >
                                  <div class="icon" style="color: #1775fe">
                                    <i class="bi bi-calendar-check-fill"></i>
                                  </div>
                                  <div class="text">Mark as Completed</div>
                                </div>
                              </li>
                              <li class="ms-0 py-1">
                                <div
                                  class="dropdown-item d-flex align-items-center gap-2"
                                  style="cursor: pointer"
                                  @click.prevent="
                                    changeStatusOfBooking({
                                      status: 'cancelled',
                                      bookingId: booking._id,
                                    })
                                  "
                                >
                                  <div class="icon" style="color: #f20b3b">
                                    <i class="bi bi-x-square-fill"></i>
                                  </div>
                                  <div class="text">Cancel Booking</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            class="pagination d-flex align-items-center justify-content-center justify-content-md-between text-center text-md-start"
          >
            <div class="info text-muted">
              Showing
              {{
                pagination.totalItems === 0
                  ? 0
                  : (pagination.currentPage - 1) * pagination.limit + 1
              }}
              to {{ Math.min(pagination.limit * pagination.currentPage, pagination.totalItems) }} of
              {{ pagination.totalItems }}
              Bookings
            </div>
            <div class="buttons d-flex align-items-center gap-2">
              <div class="prevPage">
                <button
                  class="btn border"
                  :disabled="!pagination.hasPrevPage"
                  @click.prevent="changePage(pagination.currentPage - 1)"
                >
                  <i class="bi bi-chevron-left"></i>
                </button>
              </div>
              <div v-for="(num, i) of paginationComp" :key="i">
                <button
                  class="btn border"
                  :class="num == pagination.currentPage ? 'active' : ''"
                  @click.prevent="changePage(num)"
                >
                  {{ num }}
                </button>
              </div>
              <div class="nextPage">
                <button
                  class="btn border"
                  :disabled="!pagination.hasNextPage"
                  @click.prevent="changePage(pagination.currentPage + 1)"
                >
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!loading && bookings?.length === 0" class="bg-white rounded-4 text-center p-5">
          <i class="bi bi-calendar-x fs-1 text-muted"></i>
          <h5 class="mt-3">No Bookings Found</h5>
          <p class="text-muted">No bookings match your search or filters.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
import { changeStatus, getBookings } from "@/services/bookingService";
import { capitalize, computed, onMounted, ref, watch } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Get Default avatar
import defaultAvatar from "@/assets/defaultUser.png";

// Define url of image
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

const queries = ref({
  search: "",
  limit: "5",
  page: "1",
  status: "",
  scope: "all",
});
const searchInput = ref("");

const bookings = ref([]);
const pagination = ref({});
const counts = ref({});
const loading = ref(false);

const fetchBookings = async () => {
  try {
    loading.value = true;

    console.log("Search Query:", queries.value.search);
    const data = await getBookings(queries.value);
    console.log("Returned Bookings:", data.result.bookings);

    bookings.value = data.result.bookings;
    pagination.value = data.result.pagination;
    counts.value = data.result.counts;
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  } finally {
    loading.value = false;
  }
};

let coldown = null;

watch(searchInput, () => {
  clearTimeout(coldown);
  coldown = setTimeout(() => {
    queries.value.page = 1;
    queries.value.search = searchInput.value;
    coldown = null;
  }, 1000);
});

watch([() => queries.value.status, () => queries.value.limit], () => {
  queries.value.page = 1;
});

watch(
  [
    () => queries.value.search,
    () => queries.value.status,
    () => queries.value.limit,
    () => queries.value.page,
    () => queries.value.scope,
  ],
  async () => {
    await fetchBookings();
  },
  { deep: true },
);

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

const paginationComp = computed(() => {
  if (!pagination.value.totalPages) {
    return [];
  }

  const arr = [];

  if (pagination.value.totalPages <= 3) {
    for (let i = 1; i <= pagination.value.totalPages; i++) {
      arr.push(i);
    }
  } else if (pagination.value.currentPage === pagination.value.totalPages) {
    arr.push(pagination.value.currentPage - 2);
    arr.push(pagination.value.currentPage - 1);
    arr.push(pagination.value.currentPage);
  } else if (pagination.value.currentPage === 1) {
    arr.push(pagination.value.currentPage);
    arr.push(pagination.value.currentPage + 1);
    arr.push(pagination.value.currentPage + 2);
  } else {
    arr.push(pagination.value.currentPage - 1);
    arr.push(pagination.value.currentPage);
    arr.push(pagination.value.currentPage + 1);
  }

  return arr;
});

const changePage = (page) => {
  queries.value.page = page;
};

const changeStatusOfBooking = async (bookingDetails) => {
  try {
    const data = await changeStatus(bookingDetails);

    toast.success("Status updated successfully");
    await fetchBookings();
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to update booking status.");
  }
};

// Show Default image
const handleImageError = (event) => {
  event.target.onerror = null;
  event.target.src = defaultAvatar;
};

onMounted(async () => {
  fetchBookings();
});
</script>

<style lang="scss">
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
.bookings {
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

  .bookings-table {
    width: 100%;
    min-width: 1100px;
    margin-bottom: 0;
    white-space: nowrap;
    border-collapse: separate;
    border-spacing: 0;
  }

  .bookings-table th,
  .bookings-table td {
    vertical-align: middle;
    padding: 12px;
  }

  .customer-cell {
    width: 280px;
    min-width: 280px;
  }

  .service-cell {
    width: 300px;
    min-width: 300px;
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
    .bookings-table {
      min-width: 1000px;
    }

    .bookings-table th,
    .bookings-table td {
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

  .bookings-table {
    min-width: 1000px;
    margin-bottom: 0;
    white-space: nowrap;
  }
}

.content {
  min-width: 0;
}

.pagination {
  .buttons {
    div {
      button {
        background-color: #fdfdfc !important;
        border-color: #f5f7f9;
        transition: 0.3s;
        &:hover,
        &.active {
          background-color: #0174f4 !important;
          border-color: #0174f4 !important;
          color: white !important;
        }
      }
    }
  }
}

.dropdown-toggle::after {
  display: none !important;
}

.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus,
.dropdown-menu .dropdown-item:active,
.dropdown-menu .dropdown-item.active {
  background-color: #e5f1fd;
  color: #0d4cb5;
}

.dropdown {
  > button {
    background-color: #f1f5f9 !important;
    transition: 0.3s;
    &:hover {
      background-color: #e9f4ff !important;
    }
  }
}

.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #edf1f7;
  border-radius: 5px;
  flex-shrink: 0;
}

.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: skeleton-loading 1.4s infinite;
}

@keyframes skeleton-loading {
  100% {
    transform: translateX(100%);
  }
}

.skeleton-number {
  width: 18px;
  height: 16px;
}

.skeleton-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.skeleton-name {
  width: 110px;
  max-width: 100%;
  height: 14px;
}

.skeleton-email {
  width: 145px;
  max-width: 100%;
  height: 11px;
}

.skeleton-service-image {
  width: 70px;
  height: 48px;
  border-radius: 6px;
}

.skeleton-service-name {
  width: 100px;
  max-width: 100%;
  height: 14px;
}

.skeleton-duration {
  width: 55px;
  height: 11px;
}

.skeleton-date {
  width: 115px;
  max-width: 100%;
  height: 12px;
}

.skeleton-time {
  width: 75px;
  height: 12px;
}

.skeleton-price {
  width: 48px;
  height: 16px;
}

.skeleton-status {
  width: 85px;
  height: 29px;
  border-radius: 20px;
}

.skeleton-view-button {
  width: 85px;
  height: 38px;
  border-radius: 6px;
}

.skeleton-menu-button {
  width: 38px;
  height: 38px;
  border-radius: 6px;
}

.skeleton-pagination-info {
  width: 190px;
  max-width: 100%;
  height: 14px;
}

.skeleton-page-button {
  width: 36px;
  height: 36px;
  border-radius: 6px;
}

.bookings-skeleton .bookings-table th {
  white-space: nowrap;
  border-bottom: 0;
}

.bookings-skeleton .bookings-table td {
  height: 76px;
  vertical-align: middle;
}

@media (prefers-reduced-motion: reduce) {
  .skeleton::after {
    animation: none;
  }
}
</style>
