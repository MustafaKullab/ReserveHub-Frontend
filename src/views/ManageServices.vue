<template>
  <div class="ManageServices" style="background-color: var(--main-background)">
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
              Manage Services
            </li>
          </ol>
        </nav>

        <div
          class="header p-3 rounded-3 d-flex align-items-center justify-content-between text-center text-md-start"
          style="background-color: #f8fbfe"
        >
          <div class="title">
            <h4 class="fw-bold m-0 mb-1" style="color: var(--main-color)">Manage Services</h4>
            <p class="text-muted m-0">
              Add, edit, and manage all services. You can update service details or deactive a
              service when needed.
            </p>
          </div>
          <div class="image d-none d-md-block" style="flex-shrink: 0">
            <img src="@/assets/manageServices.png" style="width: 100px" alt="Manage services" />
          </div>
        </div>

        <div class="Filter p-3 my-3 rounded-4" style="background-color: #f5fafe">
          <form class="row">
            <div class="col-md-6 col-xl-4 pe-md-1 mb-3 mb-md-0">
              <div class="input-group">
                <span class="input-group-text" id="search"><i class="bi bi-search"></i></span>
                <input
                  type="text"
                  class="form-control rounded-end-4"
                  placeholder="Search for a service.."
                  aria-label="search"
                  aria-describedby="search"
                  style="box-shadow: none"
                  v-model="queries.search"
                />
              </div>
            </div>

            <div class="col-md-2 px-md-1 mb-3 mb-md-0">
              <div class="availability">
                <select
                  class="form-select"
                  aria-label="Availability"
                  style="box-shadow: none"
                  v-model="queries.day"
                >
                  <option disabled selected>Available day</option>
                  <option value="">All Days</option>
                  <option :value="day" v-for="day of days" :key="day">{{ day }}</option>
                </select>
              </div>
            </div>

            <div class="col-md-2 px-md-1 mb-3 mb-md-0">
              <div class="duration">
                <select
                  class="form-select"
                  aria-label="duration"
                  style="box-shadow: none"
                  v-model="queries.duration"
                >
                  <option disabled selected>Duration</option>
                  <option value="">All durations</option>
                  <option value="under60">60 min or less</option>
                  <option value="above60">More than 60 min</option>
                </select>
              </div>
            </div>

            <div class="col-md-2 px-md-1 mb-3 mb-md-0">
              <div class="sortBy">
                <select
                  class="form-select"
                  aria-label="sort"
                  style="box-shadow: none"
                  v-model="queries.sort"
                >
                  <option disabled selected>Sort by</option>
                  <option value="">Default</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div class="col-12 mt-3 mt-xl-0 col-xl-2 px-2 ps-xl-1">
              <div class="searchButton">
                <router-link
                  :to="{ name: 'createService' }"
                  class="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  style="color: white; font-size: 15px; padding: 9px"
                  type="submit"
                >
                  <div class="icon"><i class="bi bi-plus-lg"></i></div>
                  <div class="text">Add Services</div>
                </router-link>
              </div>
            </div>
          </form>
        </div>

        <div class="services p-2 bg-white rounded">
          <div v-if="loading">
            <div class="table-responsive">
              <table class="table services-table skeleton-table">
                <thead>
                  <tr>
                    <th v-for="n in 6" :key="n">
                      <div class="skeleton skeleton-header"></div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="n in 5" :key="n">
                    <!-- Service -->
                    <td>
                      <div class="d-flex align-items-center gap-2">
                        <div class="skeleton skeleton-image"></div>

                        <div class="flex-grow-1">
                          <div class="skeleton skeleton-name mb-2"></div>
                          <div class="skeleton skeleton-description"></div>
                        </div>
                      </div>
                    </td>

                    <!-- Price -->
                    <td>
                      <div class="skeleton skeleton-price"></div>
                    </td>

                    <!-- Duration -->
                    <td>
                      <div class="d-flex align-items-center gap-2">
                        <div class="skeleton skeleton-icon"></div>
                        <div class="skeleton skeleton-duration"></div>
                      </div>
                    </td>

                    <!-- Availability -->
                    <td>
                      <div class="d-flex gap-2">
                        <div class="skeleton skeleton-day"></div>
                        <div class="skeleton skeleton-day"></div>
                      </div>
                    </td>

                    <!-- Status -->
                    <td>
                      <div class="skeleton skeleton-status"></div>
                    </td>

                    <!-- Actions -->
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

            <div class="d-flex align-items-center justify-content-between pt-3 skeleton-pagination">
              <div class="skeleton skeleton-pagination-info"></div>

              <div class="d-flex align-items-center gap-2">
                <div class="skeleton skeleton-page"></div>
                <div class="skeleton skeleton-page"></div>
                <div class="skeleton skeleton-page"></div>
                <div class="skeleton skeleton-page"></div>
                <div class="skeleton skeleton-page"></div>
              </div>
            </div>
          </div>

          <div class="table-responsive" v-else>
            <table class="table services-table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style="background-color: #f0f4fb; border-top-left-radius: 5px !important"
                    class=" "
                  >
                    Service
                  </th>
                  <th scope="col" style="background-color: #f0f4fb">Price</th>
                  <th scope="col" style="background-color: #f0f4fb">Duration</th>
                  <th scope="col" style="background-color: #f0f4fb">Availability</th>
                  <th scope="col" style="background-color: #f0f4fb">Status</th>
                  <th scope="col" style="background-color: #f0f4fb; border-top-right-radius: 5px">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="service of services" :key="service?._id">
                  <td class="service-cell" scope="row">
                    <div class="serviceDetails d-flex align-items-center gap-2">
                      <div class="image">
                        <img
                          :src="`${apiUrlImage}${service?.image}`"
                          class="service-image rounded"
                          :alt="service?.name"
                        />
                      </div>

                      <div class="info">
                        <div class="name fw-bold">{{ service?.name }}</div>
                        <div class="text description text-muted">
                          {{ service?.description }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="price fw-bold mt-4">${{ service?.price }}</div>
                  </td>
                  <td>
                    <div class="time d-flex align-items-center gap-2 mt-4">
                      <div class="icon" style="color: #2d82f7"><i class="bi bi-clock"></i></div>
                      <div class="text-muted">{{ service?.durationMinutes }}</div>
                    </div>
                  </td>
                  <td>
                    <div class="slots d-flex align-items-center gap-2 mt-4">
                      <div v-for="slot of service.availability" :key="slot.day">
                        <div
                          class="day rounded"
                          style="background-color: #dbeffd; color: #145cfb; padding: 5px 15px"
                        >
                          {{ slot.day }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="isActive">
                    <div
                      class="status mt-4 rounded"
                      :class="service?.isActive === true ? 'active' : 'deactive'"
                    >
                      {{ service?.isActive ? "Active" : "Inactive" }}
                    </div>
                  </td>
                  <td class="actions">
                    <div class="d-flex align-items-center gap-2 mt-4">
                      <router-link
                        :to="{ name: 'editService', params: { serviceId: service?._id } }"
                        class="edit btn btn-outline-primary d-flex align-items-center gap-2"
                      >
                        <div class="icon"><i class="bi bi-pencil"></i></div>
                        <div class="text">Edit</div>
                      </router-link>
                      <button
                        class="btn d-flex align-items-center gap-2"
                        :class="!service?.isActive ? 'activate' : 'deactive'"
                        @click.prevent="ChangeStatus(service?._id, service?.isActive)"
                      >
                        <div class="icon" style="margin-top: 1px">
                          <i class="bi" :class="!service?.isActive ? 'bi-play' : 'bi-ban'"></i>
                        </div>
                        <div class="text">
                          {{ !service?.isActive ? "Activate" : "Deactivate" }}
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-if="!loading && services?.length === 0"
            class="bg-white rounded-4 text-center p-5 pb-3"
          >
            <i class="bi bi-folder-x fs-1 text-muted"></i>
            <h5 class="mt-2">No Services Found</h5>
            <p class="text-muted">No services match your search or filters.</p>
          </div>

          <div
            class="pagination d-flex align-items-center justify-content-center justify-content-md-between text-center text-md-start"
            v-if="!loading"
          >
            <div class="info text-muted">
              Showing
              {{
                pagination.totalItems === 0
                  ? 0
                  : (pagination.currentPage - 1) * pagination.limit + 1
              }}
              to {{ Math.min(pagination.currentPage * pagination.limit, pagination.totalItems) }} of
              {{ pagination.totalItems }}
              Services
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
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import { computed, onMounted, ref, watch } from "vue";
import { getServices, updateService } from "@/services/servicesService";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Define api url image
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

const days = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

const queries = ref({
  search: "",
  day: "",
  duration: "",
  sort: "",
});

const services = ref(null);
const loading = ref(false);

// Function to get services
const searchServices = async () => {
  console.log("Start");

  try {
    loading.value = true;
    const data = await getServices(queries.value);

    services.value = data.services;
    pagination.value = data.pagination;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

// Function to change status
const ChangeStatus = async (serviceId, active) => {
  try {
    const data = await updateService(serviceId, { isActive: !active });

    if (data.success) {
      toast.success(
        active ? "Service deactivated successfully." : "Service activated successfully.",
      );
    }

    await searchServices();
  } catch (error) {
    console.log(error?.response?.data);
  }
};
const pagination = ref({});

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

// function to change page
const changePage = async (page) => {
  queries.value.page = page;

  await searchServices();
};

let timer = null;

watch(
  () => queries.value.search,
  () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      queries.value.page = 1;
      searchServices();
      timer = null;
    }, 500);
  },
);

watch(
  () => [queries.value.day, queries.value.duration, queries.value.sort],
  async () => {
    queries.value.page = 1;
    await searchServices();
  },
);

onMounted(async () => {
  try {
    loading.value = true;
    const data = await getServices(queries.value);

    services.value = data.services;
    pagination.value = data.pagination;
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss" scoped>
.searchButton {
  button {
    @media (max-width: 992px) {
      .text {
        font-size: 10px !important;
      }
      .icon {
        display: none;
      }
    }
  }
}

.content {
  flex: 1;
  min-width: 0;
  max-width: 100%;
}

.services {
  width: 100%;
  min-width: 0;

  .table-responsive {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .services-table {
    width: 100%;
    min-width: 1100px;
    margin-bottom: 0;
  }
}

.pagination {
  gap: 12px;
  flex-wrap: wrap;
  padding: 12px 4px;
}

@media (max-width: 767px) {
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

.service-cell {
  width: 480px;
  min-width: 480px;
}

.service-cell {
  width: 480px;
  max-width: 480px;
}

.serviceDetails {
  width: 100%;
  min-width: 0;

  .image {
    flex-shrink: 0;

    .service-image {
      width: 100px;
      height: 60px;
      object-fit: cover;
    }
  }

  .info {
    flex: 1;
    min-width: 0;

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      overflow-wrap: anywhere;
    }
  }
}

.isActive {
  .status {
    width: fit-content;
    padding: 5px 15px 5px 30px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 8px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transform: translateY(-50%);
    }
    &.active::before {
      background-color: #0cab59;
    }

    &.deactive::before {
      background-color: #fe1325;
    }

    &.active {
      background-color: #e5f8eb !important;
      color: #0cab59;
    }

    &.deactive {
      background-color: #fde7e9 !important;
      color: #fe1325;
    }
  }
}

.actions {
  button.activate {
    background-color: #e5f1fd;
    border: 1px solid #0c73fe;
    transition: 0.3s;
    &:hover {
      background-color: #0086ff;
      color: white;
    }
  }
  button.deactive {
    background-color: #fef6f6;
    border: 1px solid #fbcdd0;
    color: #fe0003;
    transition: 0.3s;
    &:hover {
      background-color: #fe0003;
      color: white;
    }
  }
  button.more {
    background-color: #fdfdfd;
    border-color: #e3e8ef;
    transition: 0.3s;
    &:hover {
      background-color: #e3e8ef;
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent);
  animation: skeleton-shimmer 1.4s infinite;
}

@keyframes skeleton-shimmer {
  100% {
    transform: translateX(100%);
  }
}

/* Table */
.skeleton-table {
  min-width: 1000px;
  margin-bottom: 0;
  vertical-align: middle;
}

.skeleton-table thead th {
  background-color: #f0f4fb;
  padding: 16px;
  border-bottom: 0;
}

.skeleton-table tbody td {
  padding: 18px 12px;
  height: 100px;
  vertical-align: middle;
}

/* Header */
.skeleton-header {
  height: 14px;
  width: 65%;
  background-color: #e0e7f1;
}

/* Service */
.skeleton-image {
  width: 65px;
  height: 65px;
  border-radius: 8px;
}

.skeleton-name {
  width: 130px;
  max-width: 100%;
  height: 15px;
}

.skeleton-description {
  width: 180px;
  max-width: 100%;
  height: 11px;
}

/* Price */
.skeleton-price {
  width: 65px;
  height: 16px;
}

/* Duration */
.skeleton-icon {
  width: 17px;
  height: 17px;
  border-radius: 50%;
}

.skeleton-duration {
  width: 55px;
  height: 13px;
}

/* Availability */
.skeleton-day {
  width: 45px;
  height: 30px;
  border-radius: 5px;
}

/* Status */
.skeleton-status {
  width: 75px;
  height: 28px;
  border-radius: 6px;
}

/* Actions */
.skeleton-button {
  width: 85px;
  height: 35px;
  border-radius: 5px;
}

/* Pagination */
.skeleton-pagination {
  gap: 15px;
}

.skeleton-pagination-info {
  width: 180px;
  height: 14px;
}

.skeleton-page {
  width: 36px;
  height: 36px;
  border-radius: 5px;
}

/* Responsive */
@media (max-width: 768px) {
  .skeleton-pagination {
    flex-wrap: wrap;
  }

  .skeleton-pagination-info {
    width: 140px;
  }

  .skeleton-button {
    width: 70px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .skeleton::after {
    animation: none;
  }
}
</style>
