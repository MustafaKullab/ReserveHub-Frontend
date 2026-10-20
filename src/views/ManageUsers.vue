<template>
  <div class="ManageUsers" style="background-color: var(--main-background)">
    <TopBar />
    <div class="main d-flex">
      <SideBar />

      <div class="content p-3 flex-grow-1">
        <div>
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
                Manage Users
              </li>
            </ol>
          </nav>
        </div>

        <div
          class="header p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between mb-3 border"
          style="background-color: #fcfdfe"
        >
          <div class="title text-center text-md-start mb-2 mb-md-0">
            <h4 class="fw-bold m-0 mb-1" style="color: var(--main-color)">Manage Users</h4>
            <p class="text-muted m-0">View, search and manage all platform users.</p>
          </div>
          <div class="image">
            <img src="@/assets/manageUsers.png" style="width: 220px" alt="Manage Users" />
          </div>
        </div>

        <div class="usersStatistics row">
          <div class="col-lg-4 col-xl-3 mb-1 mb-xl-0">
            <div
              class="box p-3 rounded d-flex align-items-center gap-3"
              style="background-color: #fdfdfd"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 45px;
                  height: 45px;
                  flex-direction: column;
                  background-color: #eaf6ff;
                  color: #086efb;
                "
              >
                <i class="bi bi-people-fill fs-4"></i>
              </div>
              <div class="details">
                <div class="title text-muted">Total Users</div>
                <div class="statistics fs-4 fw-bold" style="color: #01104e">{{ counts.total }}</div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-3 mb-1 mb-xl-0">
            <div
              class="box p-3 rounded d-flex align-items-center gap-3"
              style="background-color: #fdfdfd"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 45px;
                  height: 45px;
                  flex-direction: column;
                  background-color: #e8e2fd;
                  color: #603fcb;
                "
              >
                <i class="bi bi-shield fs-4"></i>
              </div>
              <div class="details">
                <div class="title text-muted">Admins</div>
                <div class="statistics fs-4 fw-bold" style="color: #01104e">
                  {{ counts.admins }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-3 mb-1 mb-xl-0">
            <div
              class="box p-3 rounded d-flex align-items-center gap-3"
              style="background-color: #fdfdfd"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 45px;
                  height: 45px;
                  flex-direction: column;
                  background-color: #e5f8ef;
                  color: #089f5b;
                "
              >
                <i class="bi bi-person-fill fs-4"></i>
              </div>
              <div class="details">
                <div class="title text-muted">Customers</div>
                <div class="statistics fs-4 fw-bold" style="color: #01104e">{{ counts.users }}</div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-3 mb-1 mb-xl-0">
            <div
              class="box p-3 rounded d-flex align-items-center gap-3"
              style="background-color: #fdfdfd"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 45px;
                  height: 45px;
                  flex-direction: column;
                  background-color: #feeece;
                  color: #ec920d;
                "
              >
                <i class="bi bi-bar-chart-fill fs-4"></i>
              </div>
              <div class="details">
                <div class="title text-muted">New This Month</div>
                <div class="statistics fs-4 fw-bold" style="color: #01104e">
                  {{ counts.lastMonth }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="users p-2 bg-white rounded my-3">
          <div class="header pb-3 pt-1">
            <div class="title fs-5 fw-bold" style="color: #000c46">Registered Users</div>
            <div class="describe text-muted">Users are added automatically when they sign up.</div>
          </div>

          <div class="table-responsive" v-if="loading">
            <table class="table users-table skeleton-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined At</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="n in 5" :key="n">
                  <td>
                    <div class="d-flex align-items-center gap-3">
                      <div class="skeleton skeleton-avatar"></div>
                      <div class="skeleton skeleton-name"></div>
                    </div>
                  </td>

                  <td>
                    <div class="skeleton skeleton-email"></div>
                  </td>

                  <td>
                    <div class="skeleton skeleton-badge"></div>
                  </td>

                  <td>
                    <div class="skeleton skeleton-status"></div>
                  </td>

                  <td>
                    <div class="skeleton skeleton-date"></div>
                  </td>

                  <td>
                    <div class="d-flex align-items-center gap-2">
                      <div class="skeleton skeleton-button"></div>
                      <div class="skeleton skeleton-button"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="table-responsive" v-else>
            <table class="table users-table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style="
                      background-color: #f0f4fb;
                      color: #102e66;
                      border-top-left-radius: 5px !important;
                    "
                  >
                    User
                  </th>
                  <th scope="col" style="background-color: #f0f4fb; color: #102e66">Email</th>
                  <th scope="col" style="background-color: #f0f4fb; color: #102e66">Role</th>
                  <th scope="col" style="background-color: #f0f4fb; color: #102e66">Status</th>
                  <th scope="col" style="background-color: #f0f4fb; color: #102e66">Joined At</th>
                  <th
                    scope="col"
                    style="background-color: #f0f4fb; color: #102e66; border-top-right-radius: 5px"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user of users" :key="user?._id">
                  <td style="min-width: 250px">
                    <div class="userDetails d-flex align-items-center gap-3">
                      <div class="userImg" style="flex-shrink: 0">
                        <img
                          :src="`${apiUrlImage}${user?.avatar}`"
                          :alt="user?.name"
                          @error="handleImageError"
                          style="width: 35px"
                          class="rounded-pill"
                        />
                      </div>
                      <div class="username">{{ user?.name }}</div>
                    </div>
                  </td>
                  <td>
                    <div class="email" style="color: #5f769b">{{ user?.email }}</div>
                  </td>
                  <td>
                    <div class="role rounded-4" :class="user?.role">
                      {{ capitalize(user?.role) }}
                    </div>
                  </td>
                  <td>
                    <div
                      class="status rounded-4"
                      :class="user?.isVerified ? 'verified' : 'notVerified'"
                    >
                      {{ user?.isVerified ? "Verified" : "Not Verified" }}
                    </div>
                  </td>
                  <td>
                    <div class="joinedAt">{{ formatDate(user?.createdAt) }}</div>
                  </td>

                  <td>
                    <div class="actions d-flex align-items-center gap-2">
                      <div class="viewModal">
                        <button
                          type="button"
                          class="btn btn-outline-primary d-flex align-items-center gap-2"
                          data-bs-toggle="modal"
                          :data-bs-target="`#view-${user?._id}`"
                        >
                          <div class="icon"><i class="bi bi-eye"></i></div>
                          <div class="text">View</div>
                        </button>

                        <div
                          class="modal fade"
                          style="top: 60px"
                          :id="`view-${user?._id}`"
                          tabindex="-1"
                          aria-labelledby="viewDetails"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title d-flex align-items-center gap-3 fs-4"
                                  id="viewDetails"
                                >
                                  <div class="icon" style="color: #2d86ff">
                                    <i class="bi bi-person-fill fs-3"></i>
                                  </div>
                                  <div class="text fw-bold">View User Details</div>
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div
                                  class="imageAndName d-flex align-items-center justify-content-between gap-3 border-bottom pb-3"
                                >
                                  <div class="image" style="flex-shrink: 0">
                                    <img
                                      :src="`${apiUrlImage}${user?.avatar}`"
                                      :alt="user?.name"
                                      class="rounded-pill"
                                      style="width: 120px; height: 120px; border: 6px solid #ebf2fe"
                                      @error="handleImageError"
                                    />
                                  </div>
                                  <div class="Name d-flex align-items-center gap-2 fs-4 fw-bold">
                                    <div class="text">{{ user?.name }}</div>
                                    <div class="icon" style="color: #0e6ffd">
                                      <i class="bi bi-patch-check-fill"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="moreDetails">
                                  <div class="">
                                    <ul class="list-unstyled keys">
                                      <li
                                        class="d-flex align-items-center gap-3 mt-2 justify-content-between"
                                      >
                                        <div class="d-flex align-items-center gap-3">
                                          <div class="icon" style="color: #4f70b1">
                                            <i class="bi bi-envelope fs-5"></i>
                                          </div>
                                          <div class="text">Email</div>
                                        </div>

                                        <div class="value">
                                          {{ user?.email }}
                                        </div>
                                      </li>
                                      <li
                                        class="d-flex align-items-center gap-3 mt-2 justify-content-between"
                                      >
                                        <div class="d-flex align-items-center gap-3">
                                          <div class="icon" style="color: #4065b2">
                                            <i class="bi bi-shield-lock fs-5"></i>
                                          </div>
                                          <div class="text">Role</div>
                                        </div>
                                        <div
                                          class="role ms-0 text-start d-flex align-items-center gap-2 rounded-pill px-3 py-0"
                                          :class="user?.role"
                                        >
                                          <div class="icon">
                                            <i
                                              class="bi bi-person-fill-gear fs-5"
                                              v-if="user?.role == 'admin'"
                                            ></i>
                                            <i
                                              class="bi bi-person-fill fs-5"
                                              v-if="user?.role == 'user'"
                                            ></i>
                                          </div>
                                          <div class="text">
                                            {{ capitalize(user?.role) }}
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        class="d-flex align-items-center gap-3 mt-2 justify-content-between"
                                      >
                                        <div class="d-flex align-items-center gap-3">
                                          <div class="icon" style="color: #10a152">
                                            <i class="bi bi-shield-check fs-5"></i>
                                          </div>
                                          <div class="text">Verification Status</div>
                                        </div>

                                        <div
                                          class="verificationStatus ms-0 text-start d-flex align-items-center gap-2 rounded-pill"
                                          :class="user?.isVerified ? 'verified' : 'notVerified'"
                                        >
                                          <div class="icon">
                                            <i
                                              class="bi bi-patch-check-fill fs-5"
                                              v-if="user?.isVerified"
                                            ></i>
                                            <i
                                              class="bi bi-patch-exclamation-fill fs-5"
                                              v-if="!user?.isVerified"
                                            ></i>
                                          </div>
                                          <div class="text">
                                            {{ user?.isVerified ? "Verified" : "Not Verified" }}
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        class="d-flex align-items-center gap-3 mt-2 justify-content-between"
                                      >
                                        <div class="d-flex align-items-center gap-3">
                                          <div class="icon" style="color: #5290f5">
                                            <i class="bi bi-calendar3 fs-5"></i>
                                          </div>
                                          <div class="text">Joined At</div>
                                        </div>
                                        <div class="text-start">
                                          {{ formatDate(user?.createdAt) }}
                                        </div>
                                      </li>
                                      <li
                                        class="d-flex align-items-center gap-3 mt-2 justify-content-between"
                                      >
                                        <div class="d-flex align-items-center gap-3">
                                          <div class="icon" style="color: #3a6acd">
                                            <i class="bi bi-clock fs-5"></i>
                                          </div>
                                          <div class="text">Last Updated</div>
                                        </div>
                                        <div class="ms-0 text-start">
                                          {{ formatDate(user?.updatedAt) }}
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer" style="border-top: none">
                                <button
                                  type="button"
                                  class="btn btn-secondary clsBtn w-100 rounded-4"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="changeRole">
                        <button
                          type="button"
                          class="btn btn-outline-secondary d-flex align-items-center gap-2"
                          data-bs-toggle="modal"
                          :data-bs-target="`#changeStatus-${user?._id}`"
                          @click.prevent="newRole = user?.role"
                        >
                          <div class="icon"><i class="bi bi-pencil"></i></div>
                          <div class="text">Change Role</div>
                        </button>

                        <div
                          class="modal fade"
                          style="top: 40px"
                          :id="`changeStatus-${user?._id}`"
                          tabindex="-1"
                          aria-labelledby="changeStatus"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title d-flex align-items-center gap-3 fs-4"
                                  id="changeStatus"
                                >
                                  <div class="icon" style="color: #2d86ff">
                                    <i class="bi bi-shield-lock-fill fs-3"></i>
                                  </div>
                                  <div class="text fw-bold">Change User Role</div>
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div
                                  class="imageAndNameAndEmail d-flex align-items-center gap-3 border-bottom pb-3"
                                >
                                  <div class="image" style="flex-shrink: 0">
                                    <img
                                      :src="`${apiUrlImage}${user?.avatar}`"
                                      :alt="user?.name"
                                      class="rounded-pill"
                                      style="width: 100px; height: 100px; border: 6px solid #ebf2fe"
                                      @error="handleImageError"
                                    />
                                  </div>
                                  <div class="Name">
                                    <div class="text fs-4 fw-bold">{{ user?.name }}</div>
                                    <div class="text-muted">{{ user?.email }}</div>
                                  </div>
                                </div>
                                <div class="userRole my-3 text-start">
                                  <div class="text">Current Role</div>
                                  <div
                                    class="role d-flex align-items-center gap-2 rounded-3 p-1 px-3 mt-2"
                                    style="background-color: #dfecfe; width: fit-content"
                                  >
                                    <div class="icon" style="color: #2d86fe">
                                      <i
                                        class="bi bi-shield-shaded fs-4"
                                        v-if="user?.role === 'admin'"
                                      ></i>
                                      <i class="bi bi-person-fill fs-4" v-else></i>
                                    </div>
                                    <div class="text">{{ capitalize(user?.role) }}</div>
                                  </div>
                                </div>

                                <div class="selectNewRole">
                                  <label for="role" class="form-label">New Role</label>
                                  <select
                                    class="form-select"
                                    aria-label="status"
                                    style="box-shadow: none"
                                    v-model="newRole"
                                  >
                                    <option :value="user?.role" selected>
                                      <div class="value">{{ capitalize(user?.role) }}</div>
                                    </option>
                                    <option :value="user?.role === 'admin' ? 'user' : 'admin'">
                                      {{
                                        user?.role === "admin"
                                          ? capitalize("user")
                                          : capitalize("admin")
                                      }}
                                    </option>
                                  </select>
                                </div>

                                <div
                                  class="message d-flex gap-2 p-3 rounded mt-3"
                                  style="background-color: #d9e8fd"
                                >
                                  <div class="icon" style="color: #0d70fe; flex-shrink: 0">
                                    <i class="bi bi-exclamation-circle-fill fs-5"></i>
                                  </div>
                                  <div
                                    class="messageText"
                                    v-if="newRole === 'admin'"
                                    style="white-space: wrap"
                                  >
                                    Changing this user's role to Admin will grant administrative
                                    privileges.
                                  </div>
                                  <div class="messageText" v-else style="white-space: wrap">
                                    Changing this user's role to User will remove administrative
                                    privileges.
                                  </div>
                                </div>
                              </div>
                              <div
                                class="modal-footer justify-content-center pt-0 row"
                                style="border-top: none"
                              >
                                <button
                                  type="button"
                                  class="btn btnCloseSt"
                                  style="width: 46%"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button "
                                  class="btn btn-primary"
                                  style="width: 46%"
                                  @click.prevent="changeRole(user._id)"
                                  :disabled="newRole === user?.role"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
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
            v-if="loading"
          >
            <div class="skeleton skeleton-pagination-info"></div>

            <div class="buttons d-flex align-items-center gap-2">
              <div class="skeleton skeleton-page-arrow"></div>

              <div v-for="n in 3" :key="n" class="skeleton skeleton-page-number"></div>

              <div class="skeleton skeleton-page-arrow"></div>
            </div>
          </div>

          <div
            class="pagination d-flex align-items-center justify-content-center justify-content-md-between text-center text-md-start"
            v-else
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
              Users
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
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
import { getUsers, updateRole } from "@/services/userServices";
import { capitalize, computed, onMounted, ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Define default avatar
import defaultAvatar from "@/assets/defaultUser.png";

// Define url of image
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

// Define users array to store the users comes from backend
const users = ref([]);
const loading = ref(true);

// Define pagination obj
const pagination = ref({});

// Define counts obj
const counts = ref({});

// Define var to store the new role
const newRole = ref("");

// Function to fetch users
const fetchAllUsers = async (page = 1) => {
  try {
    loading.value = true;
    const data = await getUsers(page);

    users.value = data.users;
    pagination.value = data.pagination;
    counts.value = data.counts;
  } catch (error) {
    console.log(error.response.data);
  } finally {
    loading.value = false;
  }
};

// Show Default image
const handleImageError = (event) => {
  event.target.onerror = null;
  event.target.src = defaultAvatar;
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

// Function to update status
const changeRole = async (userId) => {
  try {
    const data = await updateRole(userId, newRole.value);
    if (data.success) {
      toast.success("Role Updated Successfully.");
      await fetchAllUsers(pagination.value.currentPage);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// Pagination Array to show numbers
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
  fetchAllUsers(page);
};

onMounted(() => {
  fetchAllUsers();
});
</script>

<style lang="scss">
.users {
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

  .users-table {
    width: 100%;
    min-width: 1100px;
    margin-bottom: 0;
    white-space: nowrap;
    border-collapse: separate;
    border-spacing: 0;
  }

  .users-table th,
  .users-table td {
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
  .users {
    .users-table {
      min-width: 1000px;
    }

    .users-table th,
    .users-table td {
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

.users {
  width: 100%;
  min-width: 0;
  overflow: hidden;

  .table-responsive {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .users-table {
    min-width: 1000px;
    margin-bottom: 0;
    white-space: nowrap;
  }
}

.content {
  min-width: 0;
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

  .status {
    padding: 6px;
    text-align: center;
    position: relative;
    &.verified {
      background-color: #e6faf1 !important;
      color: #0b9757;
    }
    &.notVerified {
      background-color: #ef53504d !important;
      color: #d72424;
    }
  }
}

.modal {
  @media (max-width: 400px) {
    top: 135px !important;
  }
}

.moreDetails {
  .verificationStatus {
    &.verified {
      background-color: #eaf7ee !important;
      color: #1d834a;
      padding: 2px 15px;
    }
    &.notVerified {
      background-color: #fef0e6 !important;
      color: #b75412;
      padding: 2px 15px;
    }
  }
}

.modal-footer {
  .clsBtn {
    background-color: #f1f6fe !important;
    color: #0255fa;
    border-color: #d4e3fe;
    transition: 0.3s;

    &:hover {
      background-color: #d3e4ff !important;
    }
  }
  .btnCloseSt {
    background-color: #fefefe !important;
    border-color: #c7d0e8;
    color: #ff4b4b;
    transition: 0.3s;

    &:hover {
      background-color: #ff4b4b !important;
      border-color: #ff4b4b;
      color: white;
    }
  }
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

.skeleton-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 0;
}

.skeleton-table thead th {
  background-color: #f0f4fb;
  color: #102e66;
  padding: 16px 12px;
  white-space: nowrap;
  font-weight: 600;
}

.skeleton-table thead th:first-child {
  border-top-left-radius: 5px;
}

.skeleton-table thead th:last-child {
  border-top-right-radius: 5px;
}

.skeleton-table tbody td {
  padding: 16px 12px;
  vertical-align: middle;
  border-bottom: 1px solid #edf1f7;
}

.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #e8edf5;
  border-radius: 6px;
}

.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent);
  animation: skeleton-shimmer 1.4s infinite;
}

.skeleton-avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton-name {
  width: 100px;
  height: 15px;
}

.skeleton-email {
  width: 150px;
  height: 15px;
}

.skeleton-badge {
  width: 70px;
  height: 28px;
  border-radius: 8px;
}

.skeleton-status {
  width: 100px;
  height: 28px;
  border-radius: 8px;
}

.skeleton-date {
  width: 90px;
  height: 15px;
}

.skeleton-button {
  width: 85px;
  height: 36px;
  border-radius: 6px;
  flex-shrink: 0;
}

@keyframes skeleton-shimmer {
  100% {
    transform: translateX(100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton::after {
    animation: none;
  }
}

.skeleton-pagination-info {
  width: 210px;
  height: 18px;
}

.skeleton-page-button {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  flex-shrink: 0;
}

@media (max-width: 576px) {
  .skeleton-pagination-info {
    width: 130px;
  }

  .skeleton-page-button {
    width: 32px;
    height: 32px;
  }
}

.skeleton-pagination-info {
  width: 210px;
  height: 18px;
}

.skeleton-page-arrow,
.skeleton-page-number {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  flex-shrink: 0;
}

@media (max-width: 576px) {
  .skeleton-pagination-info {
    width: 130px;
  }

  .skeleton-page-arrow,
  .skeleton-page-number {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 767px) {
  .header {
    .image {
      display: none !important;
    }
  }
}
</style>
