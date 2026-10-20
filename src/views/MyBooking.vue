<template>
  <div class="MyBooking min-vh-100" style="background-color: var(--main-background)">
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
            <li class="breadcrumb-item m-0">
              <router-link class="text-decoration-none" :to="{ name: 'BookingsPage' }"
                >My Bookings</router-link
              >
            </li>
            <li class="breadcrumb-item m-0 active text-muted" aria-current="page">
              Booking Details
            </li>
          </ol>
        </nav>
      </div>

      <div class="content pb-3">
        <div
          class="bookingDetailsSection d-flex align-items-center justify-content-between p-3 border rounded mb-3"
          style="background-color: #f4fafe"
        >
          <div class="title">
            <h3 class="fw-bold m-0" style="color: var(--main-color)">Booking Details</h3>
            <p class="text-muted">
              Here are the details of your booking. You can check all the information and cancel<br />
              the booking if needed.
            </p>
          </div>
          <div class="image">
            <img src="@/assets/BookingDetailsImg.png" style="width: 180px" alt="Booking Details" />
          </div>
        </div>

        <div class="bookingDetails p-3 rounded border" style="background-color: #fdfdfd">
          <div v-if="loading" class="serviceAndStatus border-bottom">
            <div class="row pb-2">
              <div class="col-lg-9 col-xxl-10">
                <div class="service d-flex flex-column flex-md-row gap-3">
                  <!-- Image skeleton -->
                  <div class="image">
                    <div class="skeleton rounded" style="width: 250px; height: 160px"></div>
                  </div>

                  <!-- Title + description skeleton -->
                  <div class="titleAndDescription flex-grow-1">
                    <div class="skeleton mb-3" style="width: 55%; height: 28px"></div>

                    <div class="skeleton mb-2" style="width: 100%; height: 16px"></div>

                    <div class="skeleton mb-2" style="width: 90%; height: 16px"></div>

                    <div class="skeleton" style="width: 65%; height: 16px"></div>
                  </div>
                </div>
              </div>

              <!-- Right side -->
              <div
                class="col-lg-3 col-xxl-2 border-none border-lg-start border-sm-top border-sm-bottom py-2 py-lg-0"
              >
                <div class="box">
                  <!-- Status -->
                  <div class="skeleton rounded-pill mb-3" style="width: 125px; height: 38px"></div>

                  <!-- Booking ID -->
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <div
                      class="skeleton rounded-pill flex-shrink-0"
                      style="width: 40px; height: 40px"
                    ></div>

                    <div class="flex-grow-1">
                      <div class="skeleton mb-2" style="width: 75px; height: 13px"></div>

                      <div class="skeleton" style="width: 100px; height: 17px"></div>
                    </div>
                  </div>

                  <!-- Booked on -->
                  <div class="d-flex align-items-center gap-2">
                    <div
                      class="skeleton rounded-pill flex-shrink-0"
                      style="width: 40px; height: 40px"
                    ></div>

                    <div class="flex-grow-1">
                      <div class="skeleton mb-2" style="width: 70px; height: 13px"></div>

                      <div class="skeleton" style="width: 130px; height: 17px"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="serviceAndStatus border-bottom" v-if="booking && !loading">
            <div class="row pb-2">
              <div class="col-lg-9 col-xxl-10">
                <div class="service d-flex flex-column flex-md-row gap-3">
                  <div class="image">
                    <img
                      :src="`${apiUrlImage}${booking?.serviceId?.image}`"
                      class="rounded"
                      style="min-width: 250px; height: 160px; object-fit: cover"
                      alt="service img"
                    />
                  </div>
                  <div class="titleAndDescription">
                    <h4 class="title fw-bold">{{ booking?.serviceId?.name }}</h4>
                    <p class="text-muted">
                      {{ booking?.serviceId?.description }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-xxl-2 border-none border-lg-start border-sm-top border-sm-bottom py-2 py-lg-0"
              >
                <div class="box">
                  <div
                    class="status p-2 px-3 rounded-pill d-flex align-items-center gap-2 mb-2"
                    :class="booking?.status"
                  >
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-pill"
                      style="width: 22px; height: 22px"
                    >
                      <i
                        class="bi"
                        style="margin-top: 2.5px"
                        :class="{
                          'bi-check-fill':
                            booking?.status === 'confirmed' || booking?.status === 'completed',
                          'bi-x-circle-fill': booking?.status == 'cancelled',
                          'bi-clock-fill': booking?.status == 'pending',
                        }"
                      ></i>
                    </div>
                    <div class="statusTxt">
                      {{ booking?.status ? capitalize(booking?.status) : booking?.status }}
                    </div>
                  </div>
                  <div class="bookingId d-flex align-items-center gap-2 mb-2">
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-pill"
                      style="width: 40px; height: 40px; background-color: #e7f6fd; color: #0679f9"
                    >
                      <i class="bi bi-file-person-fill"></i>
                    </div>
                    <div class="bkId">
                      <div class="title text-muted">Booking ID</div>
                      <div class="id fw-bold">#BK-{{ String(booking?._id).substr(0, 8) }}</div>
                    </div>
                  </div>
                  <div class="bookedOn d-flex align-items-center gap-2">
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-pill"
                      style="width: 40px; height: 40px; background-color: #e7f6fd; color: #0679f9"
                    >
                      <i class="bi bi-calendar-week"></i>
                    </div>
                    <div class="bkOn">
                      <div class="title text-muted">Booked on</div>
                      <div class="id fw-bold d-flex align-items-center gap-1">
                        <p>{{ DAYS[new Date(booking?.createdAt).getDay()] }},</p>
                        <p>
                          {{
                            new Date(booking?.createdAt).toLocaleDateString("en-GB", {
                              dateStyle: "medium",
                            })
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="loading" class="bookingDetailsBoxes row my-3">
            <!-- Booking Date -->
            <div class="col-lg-3">
              <div
                class="skeletonBox d-flex align-items-center gap-2 px-2 py-3 rounded-2 border mb-2 mb-lg-0"
              >
                <div class="skeleton skeleton-circle" style="width: 50px; height: 50px"></div>

                <div class="text flex-grow-1">
                  <div class="skeleton mb-2" style="width: 90px; height: 15px"></div>

                  <div class="skeleton" style="width: 130px; height: 18px"></div>
                </div>
              </div>
            </div>

            <!-- Time -->
            <div class="col-lg-3">
              <div
                class="skeletonBox d-flex align-items-center gap-2 px-2 py-3 rounded-2 border mb-2 mb-lg-0"
              >
                <div class="skeleton skeleton-circle" style="width: 50px; height: 50px"></div>

                <div class="text flex-grow-1">
                  <div class="skeleton mb-2" style="width: 45px; height: 15px"></div>

                  <div class="skeleton" style="width: 105px; height: 18px"></div>
                </div>
              </div>
            </div>

            <!-- Duration -->
            <div class="col-lg-3">
              <div
                class="skeletonBox d-flex align-items-center gap-2 px-2 py-3 rounded-2 border mb-2 mb-lg-0"
              >
                <div class="skeleton skeleton-circle" style="width: 50px; height: 50px"></div>

                <div class="text flex-grow-1">
                  <div class="skeleton mb-2" style="width: 65px; height: 15px"></div>

                  <div class="skeleton" style="width: 100px; height: 18px"></div>
                </div>
              </div>
            </div>

            <!-- Total Price -->
            <div class="col-lg-3">
              <div class="skeletonBox d-flex align-items-center gap-2 px-2 py-3 rounded-2 border">
                <div class="skeleton skeleton-circle" style="width: 50px; height: 50px"></div>

                <div class="text flex-grow-1">
                  <div class="skeleton mb-2" style="width: 75px; height: 15px"></div>

                  <div class="skeleton" style="width: 55px; height: 18px"></div>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="!loading && booking" class="bookingDetailsBoxes row my-3">
            <div class="col-lg-3">
              <div
                class="boxDate d-flex align-items-center gap-2 px-2 py-3 rounded-2 border mb-2 mb-lg-0"
                style="background-color: #eef7fd"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="width: 50px; height: 50px; background-color: #d6e9fd; color: #026dfc"
                >
                  <i class="bi bi-calendar-range fs-4"></i>
                </div>
                <div class="text">
                  <div class="title text-muted">Booking Date</div>
                  <div class="fw-bold d-flex align-items-center gap-1">
                    <p>{{ DAYS[new Date(booking?.startTime).getDay()] }},</p>
                    <p>
                      {{
                        new Date(booking?.startTime).toLocaleDateString("en-GB", {
                          dateStyle: "medium",
                        })
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="boxTime d-flex align-items-center gap-2 px-2 py-3 rounded-2 border mb-2 mb-lg-0"
                style="background-color: #fefaf0"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="width: 50px; height: 50px; background-color: #feefcd; color: #fdb300"
                >
                  <i class="bi bi-clock fs-4"></i>
                </div>
                <div class="text">
                  <div class="title text-muted">Time</div>
                  <div class="fw-bold">
                    {{ String(new Date(booking?.startTime).getHours()).padStart(2, 0) }}:{{
                      String(new Date(booking?.startTime).getMinutes()).padStart(2, 0)
                    }}
                    -

                    {{ String(new Date(booking?.endTime).getHours()).padStart(2, 0) }}:{{
                      String(new Date(booking?.endTime).getMinutes()).padStart(2, 0)
                    }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="boxDuration d-flex align-items-center gap-2 px-2 py-3 rounded-2 border mb-2 mb-lg-0"
                style="background-color: #f5f3fd"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="width: 50px; height: 50px; background-color: #e7defe; color: #9560fc"
                >
                  <i class="bi bi-hourglass-bottom fs-4"></i>
                </div>
                <div class="text">
                  <div class="title text-muted">Duration</div>
                  <div class="fw-bold">{{ booking?.serviceId?.durationMinutes }} minutes</div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="boxPrice d-flex align-items-center gap-2 px-2 py-3 rounded-2 border"
                style="background-color: #f0fcf5"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="width: 50px; height: 50px; background-color: #cff4e1; color: #0dbe62"
                >
                  <i class="bi bi-tag fs-4"></i>
                </div>
                <div class="text">
                  <div class="title text-muted">Total Price</div>
                  <div class="fw-bold">${{ booking?.serviceId?.price }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="importantSection my-3">
            <div class="accordion" id="important">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button d-flex align-items-center gap-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style="color: #026afe; box-shadow: none"
                  >
                    <div class="icon"><i class="bi bi-exclamation-circle-fill fs-3"></i></div>
                    <div class="text">Important information</div>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#important"
                >
                  <div class="accordion-body">
                    <ul>
                      <li class="text-muted">
                        Please arrive a few minutes before your appointment time.
                      </li>
                      <li class="text-muted">
                        You can cancel this booking from this page if needed.
                      </li>
                      <li class="text-muted">
                        For any questions, please contact our support team.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="buttons d-flex align-items-center justify-content-between">
            <div class="backToMyBookings">
              <router-link
                class="btn btn-outline-primary btn-lg d-flex align-items-center gap-2"
                :to="{ name: 'BookingsPage' }"
                ><div class="icon" style="margin-top: 1px"><i class="bi bi-arrow-left"></i></div>
                <div class="text">Back to My Bookings</div>
              </router-link>
            </div>
            <div
              class="cancelBooking"
              v-if="booking?.status !== 'cancelled' && booking?.status !== 'completed'"
            >
              <button
                class="btn btn-outline-danger btn-lg d-flex align-items-center gap-2"
                @click.prevent="cancelBookingFunc(booking)"
              >
                <div class="icon" style="margin-top: 1px"><i class="bi bi-trash"></i></div>
                <div class="text">Cancel Booking</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopBar from "@/components/TopBar.vue";
import { cancelBooking, getBooking } from "@/services/bookingService";
import { capitalize, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Define route obj
const route = useRoute();

// Define Url img
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

// Get booking id
const bookingId = route.params.bookingId;

const booking = ref(null);
const loading = ref(true);

const fetchBooking = async () => {
  try {
    loading.value = true;
    const data = await getBooking(bookingId);

    booking.value = data.booking;
  } finally {
    loading.value = false;
  }
};

// Days to format
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Function to cancel booking
const cancelBookingFunc = async (booking) => {
  try {
    console.log(booking);

    const data = await cancelBooking({ bookingId: booking._id });

    if (data.success) {
      toast.success("Booking cancelled");
      fetchBooking();
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

onMounted(() => {
  fetchBooking();
});
</script>

<style lang="scss" scoped>
// Custom classes

@media (min-width: 992px) {
  .border-lg-start {
    border-inline-start: 1px solid #dee2e6 !important;
  }
}
@media (max-width: 991px) {
  .border-sm-top {
    border-top: 1px solid #dee2e6 !important;
  }

  .border-sm-bottom {
    border-bottom: 1px solid #dee2e6 !important;
  }
}

// Custom classes
.serviceAndStatus {
  .service {
    .image {
      img {
        @media (max-width: 767px) {
          width: 100% !important;
        }
      }
    }
  }
}
.bookingDetails {
  .box {
    .status {
      width: fit-content;
      &.confirmed {
        background-color: #e3faee;
        color: #07c161;
        .icon {
          color: #07c161 !important;
        }
      }
      &.cancelled {
        background-color: #fef2f2;
        color: #dc2626;
        .icon {
          color: #dc2626 !important;
        }
      }
      &.completed {
        background-color: #eff6ff;
        color: #2563eb;
        .icon {
          color: #2563eb !important;
        }
      }
      &.pending {
        background-color: #fffbeb;
        color: #d97706;
        .icon {
          color: #d97706 !important;
        }
      }
    }
  }
}

.skeleton {
  position: relative;
  overflow: hidden;
  background: #e9ecef;
}

.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  animation: skeleton-loading 1.4s infinite;
}

.skeletonBox {
  min-height: 110px;
  background-color: #fdfdfd;
}

.skeleton-circle {
  flex-shrink: 0;
  border-radius: 50%;
}

@keyframes skeleton-loading {
  100% {
    transform: translateX(100%);
  }
}
</style>
