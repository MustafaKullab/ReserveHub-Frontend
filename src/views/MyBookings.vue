<template>
  <div class="MyBookings min-vh-100" style="background-color: var(--main-background)">
    <TopBar actionRoute="login" actionText="Log in" />
    <div class="container">
      <div class="pt-3">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb">
            <li class="breadcrumb-item m-0">
              <router-link class="text-decoration-none" :to="{ name: 'homePage' }"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item m-0 active text-muted" aria-current="page">
              {{ route.meta.title }}
            </li>
          </ol>
        </nav>
      </div>

      <div class="content pb-3">
        <div class="p-3 rounded-4" style="background-color: #f7fafe">
          <div class="header d-flex align-items-center justify-content-between">
            <div class="title">
              <h3 class="m-0 fw-bold" style="color: var(--main-color)">{{ route.meta.title }}</h3>
              <p class="description" style="color: #6a7995">
                View and manage all your bookings. You can check the details, and cancel a booking
                if needed.
              </p>
            </div>
            <div class="image d-none d-lg-block">
              <img src="@/assets/calendarImg.png" style="width: 140px" alt="Calendar" />
            </div>
          </div>

          <div class="countsSection row my-3">
            <div class="col-lg-4 col-xl-3">
              <div
                class="totalBox d-flex align-items-center justify-content-start gap-2 p-2 px-3 rounded-3 mb-3 mb-xl-0 border"
                style="background-color: #eff7fd"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    color: #0680fd;
                    background-color: #cae4fe;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-calendar-week fs-4"></i>
                </div>
                <div class="details">
                  <div class="title">Total Bookings</div>
                  <div class="count fw-bold fs-4">{{ counts.total || 0 }}</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-2">
              <div
                class="pendingBox d-flex align-items-center justify-content-start gap-2 p-2 px-3 rounded-3 mb-3 mb-xl-0 border"
                style="background-color: #fdf6e7"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    color: #feab0c;
                    background-color: #ffeec9;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-clock-fill fs-4"></i>
                </div>
                <div class="details">
                  <div class="title">Pending</div>
                  <div class="count fw-bold fs-4">{{ counts.pending || 0 }}</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-2">
              <div
                class="confirmedBox d-flex align-items-center justify-content-start gap-2 p-2 px-3 rounded-3 mb-3 mb-xl-0 border"
                style="background-color: #eaf9f1"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    color: #02af6e;
                    background-color: #c7f0db;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-check-circle-fill fs-4"></i>
                </div>
                <div class="details">
                  <div class="title">Confirmed</div>
                  <div class="count fw-bold fs-4">{{ counts.confirmed || 0 }}</div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-2">
              <div
                class="completedBox d-flex align-items-center justify-content-start gap-2 p-2 px-3 rounded-3 mb-3 mb-lg-0 border"
                style="background-color: #e9f3fd"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    color: #0683ff;
                    background-color: #d4e9fd;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-circle-fill fs-4"></i>
                </div>
                <div class="details">
                  <div class="title">Completed</div>
                  <div class="count fw-bold fs-4">{{ counts.completed || 0 }}</div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div
                class="cancelledBox d-flex align-items-center justify-content-start gap-2 p-2 px-3 rounded-3 mb-3 mb-lg-0 border"
                style="background-color: #fdeff0"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 50px;
                    height: 50px;
                    color: #fd3936;
                    background-color: #fed5d4;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-x-circle-fill fs-4"></i>
                </div>
                <div class="details">
                  <div class="title">Cancelled</div>
                  <div class="count fw-bold fs-4">{{ counts.cancelled || 0 }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bookingContainer d-flex flex-column">
            <div
              class="bookingFilter my-2 d-flex flex-column flex-lg-row align-items-streach align-items-lg-center justify-content-between gap-2"
              v-if="counts.total > 0"
            >
              <div class="status d-flex flex-column flex-lg-row gap-2 align-items-center">
                <div
                  class="allStatus p-2 rounded-3 bg-white border d-flex align-items-center justify-content-center gap-1"
                  style="cursor: pointer; width: 140px"
                  :class="{ active: selectedStatus === '' }"
                  @click.prevent="selectedStatus = ''"
                >
                  <span>All</span> <span>({{ counts.total }})</span>
                </div>
                <div
                  class="pendingStatus p-2 rounded-3 bg-white border d-flex align-items-center justify-content-center gap-1"
                  style="cursor: pointer; width: 140px"
                  :class="{ active: selectedStatus === 'pending' }"
                  @click.prevent="selectedStatus = 'pending'"
                >
                  <span>Pending</span> <span>({{ counts.pending }})</span>
                </div>
                <div
                  class="confirmedStatus p-2 rounded-3 bg-white border d-flex align-items-center justify-content-center gap-1"
                  style="cursor: pointer; width: 140px"
                  :class="{ active: selectedStatus === 'confirmed' }"
                  @click.prevent="selectedStatus = 'confirmed'"
                >
                  <span>Confirmed</span> <span>({{ counts.confirmed }})</span>
                </div>
                <div
                  class="completedStatus p-2 rounded-3 bg-white border d-flex align-items-center justify-content-center gap-1"
                  style="cursor: pointer; width: 140px"
                  :class="{ active: selectedStatus === 'completed' }"
                  @click.prevent="selectedStatus = 'completed'"
                >
                  <span>Completed</span> <span>({{ counts.completed }})</span>
                </div>
                <div
                  class="cancelledStatus p-2 px-4 rounded-3 bg-white border d-flex align-items-center justify-content-center gap-1"
                  style="cursor: pointer"
                  :class="{ active: selectedStatus === 'cancelled' }"
                  @click.prevent="selectedStatus = 'cancelled'"
                >
                  <span>Cancelled</span> <span>({{ counts.cancelled }})</span>
                </div>
              </div>
              <div class="search flex-grow-1">
                <div class="input-group">
                  <span class="input-group-text" id="search"><i class="bi bi-search"></i></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by service name..."
                    aria-label="Search by service name"
                    aria-describedby="search"
                    style="box-shadow: none"
                    v-model="search"
                  />
                </div>
              </div>
            </div>

            <div class="skeletonBookings" v-if="loading">
              <div
                v-for="n in 3"
                :key="`booking-skeleton-${n}`"
                class="booking row p-2 mx-1 bg-white rounded-4 shadow-sm mb-2 skeleton-booking"
              >
                <!-- Service -->
                <div class="col-xl-4">
                  <div
                    class="serviceDetails d-flex flex-column flex-xl-row align-items-stretch align-items-xl-center gap-2"
                  >
                    <div class="image skeleton skeleton-image"></div>

                    <div
                      class="details d-flex flex-column justify-content-center mt-2 mb-3 mt-xl-0 mb-xl-0 flex-grow-1"
                    >
                      <div class="skeleton skeleton-title"></div>
                      <div class="skeleton skeleton-description mt-2"></div>
                      <div class="skeleton skeleton-description short mt-1"></div>
                    </div>
                  </div>
                </div>

                <!-- Date / Time / Duration -->
                <div
                  class="col-xl-2 d-flex align-items-xl-center justify-content-xl-center skeleton-time-box"
                >
                  <div class="timeDetails w-100">
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <div class="skeleton skeleton-icon"></div>
                      <div class="skeleton skeleton-text"></div>
                    </div>

                    <div class="d-flex align-items-center gap-2 mb-2">
                      <div class="skeleton skeleton-icon"></div>
                      <div class="skeleton skeleton-text"></div>
                    </div>

                    <div class="d-flex align-items-center gap-2">
                      <div class="skeleton skeleton-icon"></div>
                      <div class="skeleton skeleton-text small-text"></div>
                    </div>
                  </div>
                </div>

                <!-- Price -->
                <div
                  class="col-xl-2 d-flex align-items-center justify-content-xl-center my-2 my-xl-0 skeleton-price-box"
                >
                  <div class="totalPrice d-flex align-items-center gap-2">
                    <div class="skeleton skeleton-price-icon"></div>

                    <div class="priceDetails">
                      <div class="skeleton skeleton-price"></div>
                      <div class="skeleton skeleton-label mt-2"></div>
                    </div>
                  </div>
                </div>

                <!-- Status -->
                <div
                  class="col-xl-2 d-flex align-items-center justify-content-center skeleton-status-box"
                >
                  <div class="skeleton skeleton-status"></div>
                </div>

                <!-- Buttons -->
                <div class="col-xl-2 pt-2 skeleton-buttons-box">
                  <div class="bookingButtons d-flex flex-xl-column text-center gap-2">
                    <div class="flex-grow-1">
                      <div class="skeleton skeleton-button"></div>
                    </div>

                    <div class="flex-grow-1">
                      <div class="skeleton skeleton-button"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bookings p-3 flex-grow-1" v-else-if="bookings?.length > 0">
              <div
                class="booking bookingBox row p-2 bg-white rounded-4 shadow-sm mb-2"
                v-for="booking of bookings"
                :key="booking?._id"
              >
                <div class="col-xl-4">
                  <div
                    class="serviceDetails d-flex flex-column flex-xl-row align-items-stretch align-items-xl-center gap-2 mt-4"
                  >
                    <div class="image">
                      <img
                        :src="`${apiUrlImage}${booking?.serviceId?.image}`"
                        class="rounded"
                        style="width: 140px"
                        alt="service img"
                      />
                    </div>
                    <div
                      class="details d-flex flex-column justify-content-center mt-2 mb-3 mt-xl-0 mb-xl-0"
                    >
                      <h5 class="title fw-bold m-0" style="color: var(--main-color)">
                        {{ booking?.serviceId?.name }}
                      </h5>
                      <p class="description text-muted small m-0">
                        {{ booking?.serviceId?.description }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-2 custom-border-xl d-flex align-items-xl-center justify-content-xl-center"
                >
                  <div class="timeDetails">
                    <div class="date d-flex align-items-center gap-2 mb-2">
                      <div
                        class="icon d-flex align-items-center justify-content-center rounded-pill"
                        style="width: 30px; height: 30px; background-color: #e2f2fe; color: #0c80fb"
                      >
                        <i class="bi bi-calendar-week"></i>
                      </div>
                      <div class="Date text-muted small">
                        {{ formatDate(booking?.startTime) }}
                      </div>
                    </div>
                    <div class="timeSlot d-flex align-items-center gap-2 mb-2">
                      <div
                        class="icon d-flex align-items-center justify-content-center rounded-pill"
                        style="width: 30px; height: 30px; background-color: #e2f2fe; color: #0c80fb"
                      >
                        <i class="bi bi-clock"></i>
                      </div>
                      <div class="Date text-muted small">
                        {{ formatTime(booking?.startTime, booking?.endTime) }}
                      </div>
                    </div>
                    <div class="duration d-flex align-items-center gap-2">
                      <div
                        class="icon d-flex align-items-center justify-content-center rounded-pill"
                        style="width: 30px; height: 30px; background-color: #e2f2fe; color: #0c80fb"
                      >
                        <i class="bi bi-hourglass"></i>
                      </div>
                      <div class="Date text-muted small">
                        {{ booking?.serviceId?.durationMinutes }} min
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-2 d-flex custom-border-xl align-items-center justify-content-xl-center my-2 my-xl-0"
                >
                  <div class="totalPrice d-flex align-items-center gap-2">
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-pill"
                      style="width: 40px; height: 40px; background-color: #edf7ff; color: #0056fe"
                    >
                      <i class="bi bi-tag fs-4"></i>
                    </div>
                    <div class="priceDetails">
                      <div class="price fw-bold" style="color: var(--main-color)">
                        ${{ booking?.serviceId?.price }}
                      </div>
                      <span class="text-muted small">Total price</span>
                    </div>
                  </div>
                </div>
                <div
                  class="col-0 col-xl-2 statusBox d-flex align-items-center justify-content-center custom-border-xl"
                >
                  <div
                    class="status rounded-2"
                    :class="booking.status"
                    style="width: fit-content; padding: 7px 10px 7px 25px"
                  >
                    {{ capitalize(booking?.status) }}
                  </div>
                </div>
                <div
                  class="col-xl-2 custom-border-xl pt-2 d-flex align-items-center justify-content-center custom-border"
                >
                  <div class="bookingButtons d-flex flex-xl-column text-center gap-2">
                    <div class="viewDetails mb-xl-2 flex-grow-1">
                      <router-link
                        :to="{ name: 'MyBooking', params: { bookingId: booking?._id } }"
                        class="btn btn-outline-primary"
                        >View Details</router-link
                      >
                    </div>
                    <div
                      class="cancel mx-auto flex-grow-1"
                      v-if="booking?.status !== 'cancelled' && booking?.status !== 'completed'"
                      @click.prevent="cancelBookingFunc(booking)"
                    >
                      <button class="btn d-flex align-items-center gap-2 mx-auto">
                        <div class="icon"><i class="bi bi-trash"></i></div>
                        <div class="span">Cancel</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="emptyState p-3 flex-grow-1 text-center"
              v-else-if="counts.total > 0 && bookings.length == 0"
            >
              <div class="image">
                <img
                  src="@/assets/EmptyStateImg.png"
                  style="width: 200px"
                  class="img-fluid"
                  alt="Empty State"
                />
              </div>
              <div class="text">
                <h4 class="title fw-bold m-0" style="color: var(--main-color)">
                  No Bookings found
                </h4>
                <p class="text-muted text-center small">
                  We couldn't find any bookings matching your search or filters. <br />Try adjusting
                  them and search again.
                </p>
              </div>
              <div class="button">
                <button
                  class="btn btn-outline-primary mx-auto d-flex align-items-center gap-2 justify-content-center mb-2"
                  style="width: fit-content"
                  @click.prevent="clearFilter"
                >
                  <div class="icon"><i class="bi bi-arrow-counterclockwise"> </i></div>
                  <span>Clear Filter</span>
                </button>
              </div>
            </div>

            <div class="emptyState p-3 flex-grow-1 text-center" v-else>
              <div class="image">
                <img
                  src="@/assets/EmptyStateImg.png"
                  style="width: 200px"
                  class="img-fluid"
                  alt="Empty State"
                />
              </div>
              <div class="text">
                <h4 class="title fw-bold m-0" style="color: var(--main-color)">No Bookings yet</h4>
                <p class="text-muted text-center small">
                  You haven't made any bookings yet. <br />Explore our services and reserve your
                  first experience.
                </p>
              </div>
              <div class="button">
                <router-link
                  :to="{ name: 'services' }"
                  class="btn btn-primary mx-auto d-flex align-items-center gap-2 justify-content-center mb-2"
                  style="width: fit-content"
                  ><span>Browse Service</span>
                  <div class="icon"><i class="bi bi-arrow-right"> </i></div
                ></router-link>
              </div>
            </div>

            <div
              class="pagination d-flex align-items-center justify-content-between"
              style="padding: 20px 0"
              v-if="pagination.totalPages && !loading"
            >
              <div class="paginationDetails">
                Showing
                {{
                  pagination.totalItems === 0
                    ? 0
                    : (pagination.currentPage - 1) * pagination.limit + 1
                }}
                to
                {{ Math.min(pagination.currentPage * pagination.limit, pagination.totalItems) }} of
                {{ pagination.totalItems }} bookings
              </div>
              <div class="paginationButtons d-flex align-items-center gap-2">
                <button
                  class="prev btn"
                  :disabled="!pagination.hasPrevPage"
                  @click="fetchBookings(pagination.currentPage - 1)"
                >
                  <div class="icon">
                    <i class="bi bi-arrow-left-short fs-3"></i>
                  </div>
                </button>
                <button
                  class="btn"
                  :class="{ active: page == pagination.currentPage }"
                  v-for="page of paginationComp"
                  :key="page"
                  @click.prevent="fetchBookings(page)"
                >
                  {{ page }}
                </button>
                <button
                  class="next btn"
                  :disabled="!pagination.hasNextPage"
                  @click.prevent="fetchBookings(pagination.currentPage + 1)"
                >
                  <div class="icon">
                    <i class="bi bi-arrow-right-short fs-3"></i>
                  </div>
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
import { cancelBooking, getBookings } from "@/services/bookingService";
import { capitalize, computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Define route obj
const route = useRoute();

// Define URL img
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

// Define var to store the current selected status
const selectedStatus = ref("");

// Define var to store the value of search input
const search = ref("");

// Function to clear filter
const clearFilter = () => {
  search.value = "";
  selectedStatus.value = "";
};

// Defint var to store bookings
const bookings = ref([]);

// Define var to store the counts to status
const counts = ref({});

// Define var to store the pagination
const pagination = ref({});

// Define loading
const loading = ref(true);

// Get specific page
const fetchBookings = async (page = 1) => {
  try {
    loading.value = true;

    const data = await getBookings({
      selectedStatus: selectedStatus.value,
      search: search.value,
      page: page,
    });

    bookings.value = data.result.bookings;
    counts.value = data.result.counts;
    pagination.value = data.result.pagination;
  } finally {
    loading.value = false;
  }
};

// Watch the search and status if change update bookings

let timer = null;

watch(search, () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    timer = null;
    fetchBookings(1);
  }, 300);
});

watch(selectedStatus, () => {
  fetchBookings(1);
});

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

// Define array of days
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Define array of Months
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatDate = (startTime) => {
  let fullDate = "";

  const day = DAYS[new Date(startTime).getDay()];
  const numDay = new Date(startTime).getDate();
  const month = MONTHS[new Date(startTime).getMonth()];
  const year = new Date(startTime).getFullYear();

  fullDate += day + ", ";
  fullDate += numDay + " ";
  fullDate += month + " ";
  fullDate += year;

  return fullDate;
};

// Format booking time
const formatTime = (startTime, endTime) => {
  const startHours = new Date(startTime).getHours();
  const startMinutes = new Date(startTime).getMinutes();
  const endHours = new Date(endTime).getHours();
  const endMinutes = new Date(endTime).getMinutes();

  return (
    String(startHours).padStart(2, "0") +
    ":" +
    String(startMinutes).padStart(2, "0") +
    " - " +
    String(endHours).padStart(2, "0") +
    ":" +
    String(endMinutes).padStart(2, "0")
  );
};

// Function to cancel booking
const cancelBookingFunc = async (booking) => {
  try {
    const data = await cancelBooking({ bookingId: booking._id });

    if (data.success) {
      toast.success("Booking cancelled");
      fetchBookings(1);
    }
  } catch (error) {
    console.log(error.response.data);
    toast.error(error.response.data.message);
  }
};

onMounted(() => {
  fetchBookings(1);
});
</script>

<style lang="scss" scoped>
.bookingFilter {
  .status {
    div {
      transition: 0.3s;
      @media (max-width: 991px) {
        width: 100% !important;
      }

      &.active,
      &:hover {
        background-color: #0a7eff !important;
        border-color: #0a7eff !important;
        color: white !important;
      }
    }
  }
}

.statusBox {
  position: relative !important;
  @media (max-width: 1199px) {
    position: absolute;
    justify-content: end !important;
    right: 10px !important;
    top: -440px;
  }
  @media ((max-width: 537px)) {
    top: -456px !important;
  }
  .status {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
    }
    &.pending::before {
      background-color: #fcad11;
    }
    &.confirmed::before {
      background-color: #05ab6a;
    }
    &.completed::before {
      background-color: #2e91fd;
    }
    &.cancelled::before {
      background-color: #fe3933;
    }
    &.pending {
      background-color: #fef6e6 !important;
      color: #fcad11;
    }
    &.confirmed {
      background-color: #def8ec !important;
      color: #05ab6a;
    }
    &.completed {
      background-color: #e8f3fe !important;
      color: #2e91fd;
    }
    &.cancelled {
      background-color: #fde5e4 !important;
      color: #fe3933;
    }
  }
}

.bookingButtons {
  > div {
    button {
      transition: 0.3s;

      width: fit-content;
      border-radius: 10px;
    }
    &.viewDetails {
      button {
        color: #2d92fb !important;
        border: 1px solid #7db4fd;
        background-color: #f6fafe !important;
        &:hover {
          background-color: #2d92fb !important;
          color: white !important;
        }
      }
    }
    &.cancel {
      button {
        color: #fd2029 !important;
        border: 1px solid #fd8787;
        background-color: #feeceb !important;
        &:hover {
          background-color: #fd2029 !important;
          color: white !important;
        }
      }
    }
  }
}

@media (max-width: 1199px) {
  .custom-border {
    border-top: 1px solid #dee2e6 !important;
  }
}

@media (min-width: 1200px) {
  .custom-border-xl {
    border-inline-start: 1px solid #dee2e6;
  }
}

.serviceDetails {
  .image {
    img {
      @media (max-width: 1199px) {
        width: 100% !important;
        height: 200px !important;
        object-fit: cover;
      }
    }
  }
}

.bookingBox {
  transition: 0.3s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.066) !important;
  }
}

.pagination {
  .paginationButtons {
    > button {
      border: 1px solid #e1e7ef !important;
      color: var(--main-color) !important;
      padding: 0;
      width: 40px;
      height: 40px;
      transition: 0.2s;
      &:hover,
      &.active {
        background-color: #0982fe !important;
        color: white !important;
      }
    }
  }
}

.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #e9ecef;
  border-radius: 6px;
}

.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  100% {
    transform: translateX(100%);
  }
}

.skeleton-image {
  width: 140px;
  height: 100px;
  border-radius: 6px;
}

.skeleton-title {
  width: 150px;
  height: 20px;
}

.skeleton-description {
  width: 180px;
  height: 12px;
}

.skeleton-description.short {
  width: 120px;
}

.skeleton-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton-text {
  width: 100px;
  height: 12px;
}

.skeleton-text.small-text {
  width: 70px;
}

.skeleton-price-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton-price {
  width: 55px;
  height: 18px;
}

.skeleton-label {
  width: 75px;
  height: 11px;
}

.skeleton-status {
  width: 90px;
  height: 32px;
  border-radius: 8px;
}

.skeleton-button {
  width: 100%;
  height: 38px;
  border-radius: 6px;
}

@media (max-width: 1199px) {
  .skeleton-image {
    width: 140px;
    height: 100px;
  }

  .skeleton-booking {
    padding: 15px !important;
  }

  .custom-border-xl {
    border-left: none !important;
  }
}

@media (max-width: 576px) {
  .skeleton-image {
    width: 100%;
    height: 150px;
  }

  .skeleton-title {
    width: 60%;
  }

  .skeleton-description {
    width: 80%;
  }

  .skeleton-button {
    height: 40px;
  }
}
</style>
