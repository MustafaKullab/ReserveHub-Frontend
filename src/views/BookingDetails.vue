<template>
  <div class="BookingDetails" style="background-color: var(--main-background)">
    <TopBar />
    <div class="main d-flex">
      <SideBar />

      <div class="content p-3 flex-grow-1">
        <div v-if="loading" class="booking-skeleton">
          <div class="skeleton skeleton-breadcrumb mb-4"></div>

          <div
            class="skeleton-card p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between mb-3"
          >
            <div class="w-100">
              <div class="skeleton skeleton-title mb-2"></div>
              <div class="skeleton skeleton-subtitle"></div>
            </div>

            <div class="skeleton skeleton-button mt-3 mt-md-0"></div>
          </div>

          <div
            class="skeleton-card p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between mb-3"
          >
            <div class="w-100">
              <div class="skeleton skeleton-label mb-2"></div>
              <div class="skeleton skeleton-reference mb-2"></div>
              <div class="skeleton skeleton-subtitle"></div>
            </div>

            <div class="skeleton skeleton-status mt-3 mt-md-0"></div>
          </div>

          <div class="row statisticsBoxes">
            <div v-for="item in 4" :key="`stat-${item}`" class="col-lg-3 col-md-6">
              <div class="skeleton-card p-3 rounded d-flex align-items-center gap-2 mb-2 mb-lg-0">
                <div class="skeleton skeleton-icon"></div>

                <div class="flex-grow-1">
                  <div class="skeleton skeleton-label mb-2"></div>
                  <div class="skeleton skeleton-value mb-2"></div>
                  <div class="skeleton skeleton-subtitle"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row my-3">
            <div class="col-lg-6 mb-3 mb-lg-0">
              <div class="skeleton-card p-3 rounded h-100">
                <div class="skeleton skeleton-section-title mb-3"></div>

                <div class="d-flex flex-column flex-lg-row align-items-center gap-3 py-3">
                  <div class="skeleton skeleton-avatar"></div>

                  <div class="w-100">
                    <div class="skeleton skeleton-value mb-3 mx-auto mx-lg-0"></div>
                    <div class="skeleton skeleton-subtitle mb-3 mx-auto mx-lg-0"></div>
                    <div class="skeleton skeleton-subtitle mx-auto mx-lg-0"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="skeleton-card p-3 rounded h-100">
                <div class="skeleton skeleton-section-title mb-3"></div>

                <div class="d-flex flex-column flex-lg-row align-items-center gap-3 py-3">
                  <div class="skeleton skeleton-service-image"></div>

                  <div class="w-100">
                    <div class="skeleton skeleton-value mb-3 mx-auto mx-lg-0"></div>
                    <div class="skeleton skeleton-subtitle mb-3 mx-auto mx-lg-0"></div>
                    <div class="skeleton skeleton-description mx-auto mx-lg-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 mb-3 mb-lg-0">
              <div class="skeleton-card p-3 rounded h-100">
                <div class="skeleton skeleton-section-title mb-3"></div>

                <div
                  v-for="item in 8"
                  :key="`detail-${item}`"
                  class="d-flex justify-content-between align-items-center py-2 border-bottom gap-3"
                >
                  <div class="skeleton skeleton-detail-label"></div>
                  <div class="skeleton skeleton-detail-value"></div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="skeleton-card p-3 rounded h-100">
                <div class="skeleton skeleton-section-title mb-3"></div>

                <div class="skeleton skeleton-alert mb-3"></div>

                <div class="d-flex flex-column flex-lg-row gap-2">
                  <div class="skeleton skeleton-action"></div>
                  <div class="skeleton skeleton-action"></div>
                </div>

                <div class="skeleton skeleton-business-rule mt-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="booking">
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
              <li class="breadcrumb-item m-0">
                <router-link class="text-decoration-none" :to="{ name: 'bookingsPage' }"
                  >Manage Bookings</router-link
                >
              </li>
              <li class="breadcrumb-item active text-muted m-0" aria-current="page">
                Booking Details
              </li>
            </ol>
          </nav>

          <div
            class="header p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between mb-3 border"
            style="background-color: #fcfdfe"
          >
            <div class="title text-center text-md-start mb-2 mb-md-0">
              <h4 class="fw-bold m-0 mb-1" style="color: var(--main-color)">Booking Details</h4>
              <p class="text-muted m-0">
                View the selected booking, appointment details and customer Information.
              </p>
            </div>
            <div class="backToBookings">
              <router-link
                :to="{ name: 'bookingsPage' }"
                class="btn btn-outline-primary d-flex align-items-center gap-2"
              >
                <div class="icon">
                  <i class="bi bi-arrow-left"></i>
                </div>
                <div class="text">Back to Bookings</div>
              </router-link>
            </div>
          </div>

          <div
            class="bookingReference p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between border mb-3"
            style="background-color: #fcfdfe"
          >
            <div class="details">
              <div class="title" style="font-size: 14px; color: #546888">BOOKING REFERENCE</div>
              <div class="bookingId fs-4 fw-bold" style="color: #051a59">
                Booking #BK-{{ String(booking?._id).substr(0, 5) }}
              </div>
              <div class="createdOn small" style="color: #637a9f">
                Created on {{ formatDate(new Date(booking?.createdAt)) }} at
                {{ formatTime(new Date(booking?.createdAt)) }}
              </div>
            </div>
            <div
              class="status rounded mt-3"
              :class="booking?.status"
              style="padding: 5px 10px 5px 25px; width: fit-content"
              v-if="booking"
            >
              {{ capitalize(booking?.status) }}
            </div>
          </div>

          <div class="statisticsBoxes row">
            <div class="col-lg-6 col-xl-3 d-flex">
              <div
                class="box p-3 rounded d-flex align-items-center gap-2 border mb-2 mb-xl-0 flex-fill"
                style="background-color: #fcfdfe"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 45px;
                    height: 45px;
                    background-color: #e3f2fd;
                    color: #0368fd;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-calendar4 fs-5"></i>
                </div>

                <div class="details">
                  <div class="title text-muted">Appointment Date</div>
                  <div class="date fw-bold" style="color: #030d4d">
                    {{ formatDate(new Date(booking?.startTime)) }}
                  </div>
                  <div class="day text-muted">
                    {{ DAYS[new Date(booking?.startTime).getDay()] }}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xl-3 d-flex">
              <div
                class="box p-3 rounded d-flex align-items-center gap-2 border mb-2 mb-xl-0 flex-fill"
                style="background-color: #fcfdfe"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 45px;
                    height: 45px;
                    background-color: #fdf3e1;
                    color: #f79e16;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-clock fs-5"></i>
                </div>

                <div class="details">
                  <div class="title text-muted">Start Time</div>
                  <div class="date fw-bold" style="color: #030d4d">
                    {{ formatTime(new Date(booking?.startTime)) }}
                  </div>
                  <div class="day text-muted">Appointment begins</div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3 d-flex">
              <div
                class="box p-3 rounded d-flex align-items-center gap-2 border mb-2 mb-lg-0 flex-fill"
                style="background-color: #fcfdfe"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 45px;
                    height: 45px;
                    background-color: #efecfd;
                    color: #6d54d0;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-clock fs-5"></i>
                </div>

                <div class="details">
                  <div class="title text-muted">End Time</div>
                  <div class="date fw-bold" style="color: #030d4d">
                    {{ formatTime(new Date(booking?.endTime)) }}
                  </div>
                  <div class="day text-muted">
                    {{ booking?.serviceId?.durationMinutes }} minutes duration
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3 d-flex">
              <div
                class="box p-3 rounded d-flex align-items-center gap-2 border flex-fill"
                style="background-color: #fcfdfe"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 45px;
                    height: 45px;
                    background-color: #eafbf1;
                    color: #16aa6c;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-clock fs-5"></i>
                </div>

                <div class="details">
                  <div class="title text-muted">Service Price</div>
                  <div class="date fw-bold" style="color: #030d4d">
                    ${{ booking?.serviceId?.price }}
                  </div>
                  <div class="day text-muted">Service listed price</div>
                </div>
              </div>
            </div>
          </div>

          <div class="informations row my-3">
            <div class="col-lg-6 d-flex">
              <div
                class="customerInformation mb-3 mb-lg-0 p-3 rounded border flex-fill"
                style="background-color: #fcfdfe"
              >
                <div class="header pb-2 border-bottom d-flex align-items-center gap-2 fw-bold">
                  <div class="icon"><i class="bi bi-person fs-5"></i></div>
                  <div class="text">Customer Information</div>
                </div>

                <div
                  class="customerDetails d-flex flex-column flex-lg-row align-items-center gap-3 py-4"
                >
                  <div class="image" style="flex-shrink: 0">
                    <img
                      :src="`${apiUrlImage}${booking?.userId?.avatar}`"
                      style="width: 80px; height: 80px"
                      alt="avatar"
                      class="rounded-pill"
                      @error="handleImageError"
                    />
                  </div>
                  <div class="information text-center text-lg-start">
                    <div class="username fw-bold">{{ booking?.userId.username }}</div>
                    <div class="email" style="color: #475c86">{{ booking?.userId.email }}</div>
                    <div class="memberSince d-flex align-items-center gap-2" style="color: #475c86">
                      <div class="icon"><i class="bi bi-envelope"></i></div>
                      <div class="text" style="margin-top: 0.5px">
                        Member since {{ formatDate(new Date(booking?.userId?.createdAt)) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-flex">
              <div
                class="serviceInformation p-3 rounded border flex-fill"
                style="background-color: #fcfdfe"
              >
                <div class="header pb-2 border-bottom d-flex align-items-center gap-2 fw-bold">
                  <div class="icon"><i class="bi bi-backpack4 fs-5"></i></div>
                  <div class="text">Service Information</div>
                </div>

                <div
                  class="customerDetails d-flex flex-column flex-lg-row align-items-center gap-3 py-3"
                >
                  <div class="image">
                    <img
                      :src="`${apiUrlImage}${booking?.serviceId?.image}`"
                      style="width: 260px; height: 90px; flex-shrink: 0; object-fit: cover"
                      alt="avatar"
                      class="rounded border"
                    />
                  </div>
                  <div class="information text-center text-lg-start">
                    <div class="serviceName fw-bold">{{ booking?.serviceId?.name }}</div>
                    <div
                      class="durationAndPrice text-muted d-flex align-items-center justify-content-center justify-content-lg-center gap-3"
                    >
                      <div class="duration d-flex align-items-center gap-2">
                        <div class="icon"><i class="bi bi-clock"></i></div>
                        <div class="text">{{ booking?.serviceId?.durationMinutes }} minutes</div>
                      </div>
                      <div class="price d-flex align-items-center gap-2">
                        <div class="icon"><i class="bi bi-tag"></i></div>
                        <div class="text">${{ booking?.serviceId?.price }}</div>
                      </div>
                    </div>
                    <div class="serviceDesc text-muted">{{ booking?.serviceId?.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="BookingDetailsAndManageStatus row">
            <div class="col-lg-6 d-flex mb-3 mb-lg-0">
              <div
                class="BookingDetails p-3 rounded flex-fill border"
                style="background-color: #fcfdfe"
              >
                <div class="header pb-2 border-bottom d-flex align-items-center gap-2 fw-bold">
                  <div class="icon"><i class="bi bi-file-earmark-text fs-5"></i></div>
                  <div class="text">Booking Details</div>
                </div>
                <div class="details row">
                  <div class="col-6 pe-0 d-none d-lg-block">
                    <ul class="list-unstyled keys m-0">
                      <li class="m-0 py-1 border-bottom text-muted">Booking ID</li>
                      <li class="m-0 py-1 border-bottom text-muted">Status</li>
                      <li class="m-0 py-1 border-bottom text-muted">Start Time</li>
                      <li class="m-0 py-1 border-bottom text-muted">End Time</li>
                      <li class="m-0 py-1 border-bottom text-muted">Duration</li>
                      <li class="m-0 py-1 border-bottom text-muted">Service Price</li>
                      <li class="m-0 py-1 border-bottom text-muted">Created At</li>
                      <li class="m-0 py-1 border-bottom text-muted">Last Updated</li>
                    </ul>
                  </div>
                  <div class="col-12 col-lg-6 ps-lg-0">
                    <ul class="list-unstyled keys m-0">
                      <li class="m-0 py-1 border-bottom">
                        <span class="d-lg-none">Booking ID : </span>
                        BK-{{ String(booking?._id).substr(0, 5) }}
                      </li>
                      <li class="m-0 py-1 border-bottom" v-if="booking">
                        <span class="d-lg-none">Status : </span>
                        <span
                          class="status rounded-pill"
                          :class="booking?.status"
                          style="padding: 5px 10px 5px 25px; width: fit-content"
                          v-if="booking"
                        >
                          {{ capitalize(booking?.status) }}
                        </span>
                      </li>
                      <li class="m-0 py-1 border-bottom">
                        <span class="d-lg-none">Start Time : </span>
                        {{ formatDate(new Date(booking?.startTime)) }} at
                        {{ formatTime(new Date(booking?.startTime)) }}
                      </li>
                      <li class="m-0 py-1 border-bottom">
                        <span class="d-lg-none">End Time : </span>
                        {{ formatDate(new Date(booking?.endTime)) }} at
                        {{ formatTime(new Date(booking?.endTime)) }}
                      </li>
                      <li class="m-0 py-1 border-bottom">
                        <span class="d-lg-none">Duration : </span>
                        {{ booking?.serviceId?.durationMinutes }} minutes
                      </li>
                      <li class="m-0 py-1 border-bottom">
                        <span class="d-lg-none">Price : </span>${{ booking?.serviceId?.price }}
                      </li>
                      <li class="m-0 py-1 border-bottom">
                        <span class="d-lg-none">Created At : </span>
                        {{ formatDate(new Date(booking?.createdAt)) }} at
                        {{ formatTime(new Date(booking?.createdAt)) }}
                      </li>
                      <li class="m-0 py-1 border-bottom">
                        <span class="d-lg-none">Updated At : </span>
                        {{ formatDate(new Date(booking?.updatedAt)) }} at
                        {{ formatTime(new Date(booking?.updatedAt)) }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 d-flex">
              <div
                class="manageStatus p-3 rounded flex-fill border"
                style="background-color: #fcfdfe"
              >
                <div class="header pb-2 border-bottom d-flex align-items-center gap-2 fw-bold">
                  <div class="icon"><i class="bi bi-gear fs-5"></i></div>
                  <div class="text">Manage Status</div>
                </div>
                <div class="content">
                  <div class="alert d-flex align-items-center gap-2 my-2" :class="booking?.status">
                    <div
                      class="icon rounded-pill d-flex align-items-center justify-content-center"
                      style="width: 40px; height: 40px; flex-shrink: 0"
                    >
                      <i
                        class="bi bi-exclamation-circle fs-5"
                        v-if="booking?.status === 'pending'"
                      ></i>
                      <i
                        class="bi bi-check-circle-fill fs-5"
                        v-else-if="booking?.status === 'confirmed'"
                      ></i>
                      <i
                        class="bi bi-calendar-check fs-5"
                        v-else-if="booking?.status === 'completed'"
                      ></i>
                      <i class="bi bi-x-circle fs-5" v-else></i>
                    </div>
                    <div class="text text-muted" v-if="booking && booking.status === 'pending'">
                      This booking is currently
                      <span>{{ capitalize(booking?.status) }} </span>. Choose one of the available
                      actions below.
                    </div>
                    <div
                      class="text text-muted"
                      v-else-if="booking && booking.status === 'confirmed'"
                    >
                      This booking is currently
                      <span>{{ capitalize(booking?.status) }} </span>. You can cancel this booking
                      or mark it as completed once the appointment has ended.
                    </div>
                    <div
                      class="text text-muted"
                      v-else-if="booking && booking.status === 'completed'"
                    >
                      This booking has been
                      <span>{{ capitalize(booking?.status) }} </span>. No further actions are
                      available.
                    </div>
                    <div class="text text-muted" v-else>
                      This booking has been
                      <span>{{ capitalize(booking?.status) }} </span>. No further actions are
                      available.
                    </div>
                  </div>

                  <div class="actions d-flex flex-column flex-lg-row align-items-center gap-2">
                    <div class="confirmButton" v-if="booking?.status === 'pending'">
                      <button
                        class="btn btn-primary d-flex align-items-center gap-2 btn-sm"
                        :disabled="
                          booking?.status === 'cancelled' || booking?.status === 'completed'
                        "
                        @click.prevent="
                          changeStatusOfBooking({
                            status: 'confirmed',
                            bookingId: booking._id,
                          })
                        "
                      >
                        <div class="icon"><i class="bi bi-check-lg"></i></div>
                        <div class="text">Confirm Booking</div>
                      </button>
                    </div>
                    <div class="completedButton" v-if="booking?.status === 'confirmed'">
                      <button
                        class="btn btn-info d-flex align-items-center gap-2 btn-sm"
                        :disabled="
                          booking?.status === 'cancelled' || booking?.status === 'completed'
                        "
                        @click.prevent="
                          changeStatusOfBooking({
                            status: 'completed',
                            bookingId: booking._id,
                          })
                        "
                      >
                        <div class="icon"><i class="bi bi-check-lg"></i></div>
                        <div class="text">Complete Booking</div>
                      </button>
                    </div>
                    <div class="cancellButton">
                      <button
                        class="btn btn-outline-danger d-flex align-items-center gap-2 btn-sm"
                        :disabled="
                          booking?.status === 'cancelled' || booking?.status === 'completed'
                        "
                        @click.prevent="
                          changeStatusOfBooking({
                            status: 'cancelled',
                            bookingId: booking._id,
                          })
                        "
                      >
                        <div class="icon"><i class="bi bi-x-lg"></i></div>
                        <div class="text">Cancel Booking</div>
                      </button>
                    </div>
                  </div>

                  <div class="BusinessRule mt-3 p-3 rounded" style="background-color: #eff5fd">
                    <div class="header d-flex align-items-center gap-2 fw-bold">
                      <div class="icon" style="color: #398fef">
                        <i class="bi bi-file-earmark-text"></i>
                      </div>
                      <div class="title">Business Rule</div>
                    </div>
                    <div class="content">
                      <ul class="ps-4">
                        <li style="color: #7483a3">
                          After confirmation, “Mark as Completed” becomes available once the
                          appointment end time has passed.
                        </li>
                        <li style="color: #7483a3">
                          Cancelled and completed bookings have no further status actions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="bg-white rounded-3 p-5 text-center">
          <i class="bi bi-calendar-x fs-1 text-muted"></i>

          <h5 class="fw-bold mt-3">Unable to Load Booking</h5>

          <p class="text-muted">This booking could not be found or loaded.</p>

          <router-link :to="{ name: 'bookingsPage' }" class="btn btn-primary">
            Back to Bookings
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
import { changeStatus, getBooking } from "@/services/bookingService";
import { capitalize, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Get Default avatar
import defaultAvatar from "@/assets/defaultUser.png";

// Define the route obj
const route = useRoute();

// Define url of image
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

// Get booking id from url
const bookingId = route.params.bookingId;

// Define const to store the booking
const booking = ref(null);
const loading = ref(true);

// Define function to fetch current service
const fetchCurrentBooking = async () => {
  try {
    const data = await getBooking(bookingId);
    booking.value = data.booking;

    console.log("Avatar:", booking.value?.userId?.avatar);

    console.log("Image URL:", `${apiUrlImage}${booking.value?.userId?.avatar}`);
    console.log(booking.value);
  } catch (error) {
    toast.error(error.response?.data || error.message);
  } finally {
    loading.value = false;
  }
};

// array of map
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Function to format date
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

// Function to format time

const formatTime = (startTime) => {
  return (
    String(new Date(startTime).getHours()).padStart(2, "0") +
    ":" +
    String(new Date(startTime).getMinutes()).padStart(2, "0")
  );
};

// Function to change status
const changeStatusOfBooking = async (bookingDetails) => {
  try {
    const data = await changeStatus(bookingDetails);

    toast.success("Status updated successfully");
    await fetchCurrentBooking();
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
  await fetchCurrentBooking();
});
</script>

<style lang="scss">
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

.alert {
  &.pending {
    background-color: #fdf7e9;
    .icon {
      background-color: #fef0d8 !important;
      color: #fb9206;
    }
    .text {
      span {
        color: #db9d47;
      }
    }
  }
  &.confirmed {
    background-color: #edf7f0;
    .icon {
      background-color: #ceecdd !important;
      color: #027756;
    }
    .text {
      span {
        color: #027756;
      }
    }
  }
  &.completed {
    background-color: #e9f1fe !important;
    .icon {
      background-color: #c9e0fd !important;
      color: #0161fb;
    }
    .text {
      span {
        color: #0161fb;
      }
    }
  }
  &.cancelled {
    background-color: #feeae9 !important;
    .icon {
      background-color: #fdd8d8 !important;
      color: #ea1011;
    }
    .text {
      span {
        color: #ea1011;
      }
    }
  }
}

@media (max-width: 991px) {
  .actions {
    > div {
      width: 100% !important;
      button {
        width: 100% !important;
      }
    }
  }
}

.booking-skeleton {
  --skeleton-base: #e9edf3;
  --skeleton-highlight: #f7f9fc;

  .skeleton-card {
    background-color: #fcfdfe;
    border: 1px solid #e5eaf1;
  }

  .skeleton {
    position: relative;
    overflow: hidden;
    background-color: var(--skeleton-base);
    border-radius: 6px;
    flex-shrink: 0;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, var(--skeleton-highlight), transparent);
      animation: booking-shimmer 1.4s infinite;
    }
  }

  .skeleton-breadcrumb {
    width: 260px;
    max-width: 80%;
    height: 16px;
  }

  .skeleton-title {
    width: 190px;
    max-width: 80%;
    height: 25px;
  }

  .skeleton-subtitle {
    width: 65%;
    max-width: 300px;
    height: 13px;
  }

  .skeleton-button {
    width: 165px;
    height: 38px;
    border-radius: 6px;
  }

  .skeleton-label {
    width: 110px;
    height: 13px;
  }

  .skeleton-reference {
    width: 175px;
    height: 27px;
  }

  .skeleton-status {
    width: 100px;
    height: 30px;
    border-radius: 20px;
  }

  .skeleton-icon {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .skeleton-value {
    width: 125px;
    max-width: 100%;
    height: 18px;
  }

  .skeleton-section-title {
    width: 190px;
    max-width: 80%;
    height: 21px;
    border-radius: 4px;
    padding-bottom: 12px;
    box-sizing: content-box;
    border-bottom: 1px solid #e5eaf1;
  }

  .skeleton-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .skeleton-service-image {
    width: 100%;
    max-width: 260px;
    height: 90px;
    border-radius: 6px;
  }

  .skeleton-description {
    width: 100%;
    max-width: 230px;
    height: 32px;
  }

  .skeleton-detail-label {
    width: 35%;
    height: 14px;
  }

  .skeleton-detail-value {
    width: 45%;
    height: 14px;
  }

  .skeleton-alert {
    width: 100%;
    height: 85px;
    border-radius: 8px;
  }

  .skeleton-action {
    width: 145px;
    max-width: 100%;
    height: 34px;
    border-radius: 5px;
  }

  .skeleton-business-rule {
    width: 100%;
    height: 115px;
    border-radius: 8px;
  }
}

@keyframes booking-shimmer {
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 991px) {
  .booking-skeleton {
    .skeleton-action {
      width: 100%;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .booking-skeleton .skeleton::after {
    animation: none;
  }
}

@media (max-width: 767px) {
  .breadcrumb {
    li {
      font-size: 12px !important;
    }
  }
}
</style>
