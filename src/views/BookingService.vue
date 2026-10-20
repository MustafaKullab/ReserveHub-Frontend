<template>
  <div class="BookingService" style="background-color: var(--main-background)">
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
              <router-link class="text-decoration-none" :to="{ name: 'services' }"
                >Services</router-link
              >
            </li>
            <li class="breadcrumb-item m-0">
              <router-link
                class="text-decoration-none"
                :to="{ name: 'serviceDetails', params: { serviceId: serviceId } }"
                >{{ service.name }}</router-link
              >
            </li>
            <li class="breadcrumb-item m-0 active text-muted" aria-current="page">Booking</li>
          </ol>
        </nav>
      </div>

      <div class="content pb-3">
        <div class="row">
          <div class="col-lg-8">
            <div class="chooseTimeAndReview mb-3">
              <div
                class="chooseDateAndTime p-3 rounded-4 shadow-sm"
                style="background-color: #f3f9fe"
              >
                <div class="header d-flex gap-3">
                  <div
                    class="number d-flex align-items-center justify-content-center rounded-pill fw-bold"
                    style="
                      width: 40px;
                      height: 40px;
                      background-color: #d6e7fd;
                      color: #0053fe;
                      font-size: 20px;
                      flex-shrink: 0;
                    "
                  >
                    1
                  </div>
                  <div class="title">
                    <h4 class="m-0 fw-bold" style="color: var(--main-color)">Choose Date & Time</h4>
                    <p style="color: rgb(83 86 89 / 75%) !important">
                      Select a date to view available time slots. Choose one start time; the end
                      time is calculated automatically.
                    </p>
                  </div>
                </div>
                <div class="dateAndTime row">
                  <div class="col-md-7 mb-3 mb-md-0">
                    <div class="calendarBox shadow-sm">
                      <VDatePicker
                        v-model="selectedDate"
                        :select-attribute="selectAttribute"
                        :attributes="attributes"
                        :disabled-dates="disabledDates"
                        :min-date="new Date()"
                        expanded
                        borderless
                        locale="en-US"
                      />
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="availableTime p-3 bg-white rounded-4 shadow-sm">
                      <div class="header d-flex gap-2">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-pill"
                          style="
                            width: 35px;
                            height: 35px;
                            background-color: #d6e7fd;
                            color: #0053fe;
                          "
                        >
                          <i class="bi bi-calendar-week"></i>
                        </div>
                        <div class="title">
                          <h4 class="m-0 fw-bold" style="color: var(--main-color)">
                            Available Time Slots
                          </h4>
                          <div class="date d-flex align-items-center gap-1 text-muted small">
                            <p>{{ dayMapArr[new Date(selectedDate).getDay()] }},</p>
                            <p>
                              {{
                                new Date(selectedDate).toLocaleDateString("en-GB", {
                                  dateStyle: "medium",
                                })
                              }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="availableTimes">
                        <div class="row g-2">
                          <div
                            class="col-md-4"
                            v-for="(time, i) of scheduleTimes"
                            :key="i"
                            @click.prevent="startTime = formatTime(time)"
                          >
                            <div
                              class="time text-center p-2 rounded-3"
                              :class="{ active: formatTime(time) == startTime }"
                              style="background-color: #ecf5fe; cursor: pointer"
                            >
                              {{ formatTime(time) }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="reviewBooking p-3 mb-3 mb-lg-0 rounded-4 shadow-sm"
              style="background-color: #f3f9fe"
            >
              <div class="header d-flex gap-3">
                <div
                  class="number d-flex align-items-center justify-content-center rounded-pill fw-bold"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #d6e7fd;
                    color: #0053fe;
                    font-size: 20px;
                    flex-shrink: 0;
                  "
                >
                  2
                </div>
                <div class="title">
                  <h4 class="m-0 fw-bold" style="color: var(--main-color)">Review Booking</h4>
                  <p style="color: rgb(83 86 89 / 75%) !important">
                    Please review your booking details before confirming.
                  </p>
                </div>
              </div>
              <div class="bookingDetails mb-3">
                <div
                  class="bookingContainer p-2 px-3 mx-2 rounded border row"
                  style="background-color: #fbfdfd"
                >
                  <div class="col-12 mb-3 mt-2 mt-xxl-0 mb-xxl-0 col-xxl-4">
                    <div
                      class="fullDate d-flex align-items-center gap-2 p-2 p-xxl-0 border rounded rounded-xxl-none"
                    >
                      <div
                        class="icon d-flex align-items-center justify-content-center rounded-pill"
                        style="width: 35px; height: 35px; background-color: #d6e7fd; color: #0053fe"
                      >
                        <i class="bi bi-calendar-week"></i>
                      </div>
                      <div class="details">
                        <div class="title small text-muted">Selected date</div>
                        <div class="date d-flex align-items-center gap-1 fw-bold">
                          <p class="m-0">{{ dayMapArr[new Date(selectedDate).getDay()] }},</p>
                          <p class="m-0">
                            {{
                              new Date(selectedDate).toLocaleDateString("en-GB", {
                                dateStyle: "medium",
                              })
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3 mb-xxl-0 col-xxl-2">
                    <div
                      class="startTime d-flex align-items-center gap-2 p-2 p-xxl-0 border rounded rounded-xxl-none"
                    >
                      <div
                        class="icon d-flex align-items-center justify-content-center rounded-pill"
                        style="width: 35px; height: 35px; background-color: #d6e7fd; color: #0053fe"
                      >
                        <i class="bi bi-clock"></i>
                      </div>
                      <div class="details">
                        <div class="title small text-muted">Start time</div>
                        <div class="date d-flex align-items-center gap-1 fw-bold">
                          {{ startTime }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3 mb-xxl-0 col-xxl-2">
                    <div
                      class="endTime d-flex align-items-center gap-2 p-2 p-xxl-0 border rounded rounded-xxl-none"
                    >
                      <div
                        class="icon d-flex align-items-center justify-content-center rounded-pill"
                        style="width: 35px; height: 35px; background-color: #d6e7fd; color: #0053fe"
                      >
                        <i class="bi bi-clock"></i>
                      </div>
                      <div class="details">
                        <div class="title small text-muted">End time</div>
                        <div
                          class="date d-flex align-items-center gap-1 fw-bold"
                          v-if="endTime !== null"
                        >
                          {{ String(endTime.getHours()).padStart(2, "0") }}:{{
                            String(endTime.getMinutes()).padStart(2, "0")
                          }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3 mb-xxl-0 col-xxl-2">
                    <div
                      class="duration d-flex align-items-center gap-2 p-2 p-xxl-0 border rounded rounded-xxl-none"
                    >
                      <div
                        class="icon d-flex align-items-center justify-content-center rounded-pill"
                        style="width: 35px; height: 35px; background-color: #d6e7fd; color: #0053fe"
                      >
                        <i class="bi bi-hourglass"></i>
                      </div>
                      <div class="details">
                        <div class="title small text-muted">Duration</div>
                        <div class="date d-flex align-items-center gap-1 fw-bold">
                          {{ service.durationMinutes }} min
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-2 mb-xxl-0 col-xxl-2">
                    <div
                      class="totalPrice d-flex align-items-center gap-2 p-2 p-xxl-0 border rounded rounded-xxl-none"
                    >
                      <div
                        class="icon d-flex align-items-center justify-content-center rounded-pill"
                        style="width: 35px; height: 35px; background-color: #d6e7fd; color: #0053fe"
                      >
                        <i class="bi bi-tag"></i>
                      </div>
                      <div class="details">
                        <div class="title small text-muted">Total price</div>
                        <div class="date d-flex align-items-center gap-1 fw-bold">
                          ${{ service.price }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="confirmBooking d-flex align-items-center">
                <button
                  class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2"
                  :disabled="!finalStartTime || loading"
                  style="
                    background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                    color: white;
                  "
                  type="submit"
                  @click.prevent="confirmBooking"
                >
                  <div class="text flex-grow-1 ms-1">Confirm Booking</div>
                  <div class="icon me-1"><i class="bi bi-arrow-right"></i></div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              v-if="loadingService"
              class="serviceSummary p-3 rounded-4 shadow-sm border mb-3 skeleton-summary"
            >
              <div class="header mb-3">
                <div class="skeleton skeleton-summary-title"></div>
              </div>

              <div class="skeleton skeleton-summary-image rounded"></div>

              <div class="serviceDetails">
                <div class="header d-flex align-items-center justify-content-between mt-3 gap-3">
                  <div class="serviceName flex-grow-1">
                    <div class="skeleton skeleton-service-name"></div>
                  </div>

                  <div class="skeleton skeleton-summary-badge rounded-pill"></div>
                </div>

                <div class="description mt-2">
                  <div class="skeleton skeleton-summary-text mb-2"></div>
                  <div class="skeleton skeleton-summary-text mb-2"></div>
                  <div class="skeleton skeleton-summary-text skeleton-summary-text-short"></div>
                </div>

                <div
                  class="priceAndDuration d-flex align-items-center justify-content-evenly border-top pt-3 mt-3"
                >
                  <div class="price d-flex align-items-center gap-2">
                    <div class="skeleton skeleton-summary-icon rounded-circle"></div>

                    <div class="priceDetails">
                      <div class="skeleton skeleton-summary-value mb-2"></div>
                      <div class="skeleton skeleton-summary-label"></div>
                    </div>
                  </div>

                  <div class="vr mx-3"></div>

                  <div class="duration d-flex align-items-center gap-2">
                    <div class="skeleton skeleton-summary-icon rounded-circle"></div>

                    <div class="priceDetails">
                      <div class="skeleton skeleton-summary-value mb-2"></div>
                      <div class="skeleton skeleton-summary-label"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="serviceSummary p-3 rounded-4 shadow-sm border mb-3"
              style="background-color: #f3f9fe"
              v-if="!loadingService && service"
            >
              <div class="header mb-2">
                <h4 class="title m-0 fw-bold" style="color: var(--main-color)">Service Summary</h4>
              </div>
              <div class="image">
                <img
                  :src="`${apiUrlImage}${service.image}`"
                  class="rounded"
                  style="width: 100%; height: 270px; object-fit: cover"
                  alt="service img"
                />
              </div>
              <div class="serviceDetails">
                <div class="header d-flex align-items-center justify-content-between mt-3">
                  <div class="serviceName">
                    <h5 class="fw-bold mb-0" style="color: var(--main-color)">
                      {{ service.name }}
                    </h5>
                  </div>
                  <div class="activity">
                    <div class="active rounded-pill" v-if="service.isActive">Available</div>
                    <div class="notActive rounded-pill" v-if="!service.isActive">Unavailable</div>
                  </div>
                </div>
                <div class="description text-muted small mt-1">{{ service.description }}</div>
                <div
                  class="priceAndDuration d-flex align-items-center justify-content-evenly border-top pt-3 mt-2"
                >
                  <div class="price d-flex align-items-center gap-2">
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-pill"
                      style="width: 50px; height: 50px; background-color: #e4f0fe; color: #1246c2"
                    >
                      <i class="bi bi-tag fs-4"></i>
                    </div>
                    <div class="priceDetails">
                      <h5 class="price m-0">${{ service.price }}</h5>
                      <span class="small text-muted">Price</span>
                    </div>
                  </div>
                  <div class="vr mx-3"></div>
                  <div class="duration d-flex align-items-center gap-2">
                    <div
                      class="icon d-flex align-items-center justify-content-center rounded-pill"
                      style="width: 50px; height: 50px; background-color: #e4f0fe; color: #1246c2"
                    >
                      <i class="bi bi-clock fs-4"></i>
                    </div>
                    <div class="priceDetails">
                      <h5 class="price m-0">{{ service.durationMinutes }} min</h5>
                      <span class="small text-muted">Duration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="availability p-3 rounded-4 shadow-sm border"
              style="background-color: #f3f9fe"
            >
              <div class="header mb-2">
                <h4 class="title m-0 fw-bold" style="color: var(--main-color)">Availability</h4>
                <p class="m-0 text-muted small">
                  The service is available on the following days and times.
                </p>
              </div>

              <div class="available mb-1" v-for="(available, i) of service.availability" :key="i">
                <div
                  class="date p-2 rounded d-flex align-items-center flex-grow-1 gap-3"
                  style="background-color: #e8f3fe"
                >
                  <div class="icon" style="color: #0f67f3">
                    <i class="bi bi-calendar-week fs-5"></i>
                  </div>
                  <div
                    class="details d-flex align-items-center justify-content-between flex-grow-1"
                  >
                    <div class="day">{{ available.day }}</div>
                    <div class="time d-flex align-items-center gap-2 text-muted">
                      <div class="from">{{ available.from }}</div>
                      -
                      <div class="to">{{ available.to }}</div>
                    </div>
                  </div>
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
import TopBar from "@/components/TopBar.vue";
import { createBooking } from "@/services/bookingService";
import { getService } from "@/services/servicesService";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

// Define route object
const route = useRoute();

// Define service id
const serviceId = route.params.serviceId;

// Define var to store date
const selectedDate = ref(Date.now());

const selectAttribute = {
  highlight: {
    color: "blue",
    fillMode: "solid",
    contentClass: "selected-day",
  },
};

watch(
  () => selectedDate.value,
  () => {
    startTime.value = null;
  },
);
const service = ref({});
const loadingService = ref(true);

// Day Map to get available days
const dayMap = {
  Sun: 1,
  Mon: 2,
  Tue: 3,
  Wed: 4,
  Thu: 5,
  Fri: 6,
  Sat: 7,
};

// To display the day on Ui
const dayMapArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const availableWeekDays = computed(() => {
  return service.value.availability?.map((schedule) => dayMap[schedule.day]) ?? [];
});

// Not allow days
const allWeekDays = [1, 2, 3, 4, 5, 6, 7];

const disabledWeekDays = computed(() => {
  return allWeekDays.filter((day) => !availableWeekDays.value.includes(day));
});

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const selectDay = computed(() => {
  if (!selectedDate.value) return null;

  return DAYS[new Date(selectedDate.value).getDay()];
});

const attributes = computed(() => {
  return [
    {
      dot: {
        color: "blue",
      },
      dates: {
        repeat: {
          weekdays: availableWeekDays.value,
        },
      },
    },
  ];
});

const disabledDates = computed(() => [
  {
    repeat: {
      weekdays: disabledWeekDays.value,
    },
  },
]);

const selectedSchedules = computed(() => {
  if (!selectDay.value) return [];

  return service.value.availability?.filter((schedule) => schedule.day === selectDay.value) ?? [];
});

const scheduleTimes = computed(() => {
  const timeSlots = selectedSchedules.value.map((schedule) => {
    const [fromHours, fromMinutes] = schedule.from.split(":").map(Number);
    const [toHours, toMinutes] = schedule.to.split(":").map(Number);

    const startTime = fromHours * 60 + fromMinutes;
    const endTime = toHours * 60 + toMinutes;

    let timeSlotsArray = [];

    for (
      let i = startTime;
      i <= endTime - service.value.durationMinutes;
      i += service.value.durationMinutes
    ) {
      timeSlotsArray.push(i);
    }

    return timeSlotsArray;
  });

  return timeSlots.flat();
});

const startTime = ref(null);

const formatTime = (time) => {
  const hours = time / 60;
  const minutes = time % 60;
  return String(Math.floor(hours)).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");
};

const finalStartTime = computed(() => {
  if (!selectedDate.value || !startTime.value) return null;

  const time = new Date(selectedDate.value);

  const [hours, minutes] = startTime.value.split(":").map(Number);

  time.setHours(hours, minutes, 0, 0);
  return time;
});

const endTime = computed(() => {
  if (finalStartTime.value === null) return null;

  const end = new Date(finalStartTime.value);
  end.setMinutes(end.getMinutes() + service.value.durationMinutes);

  return end;
});

const loading = ref(false);

// Function to confirm the booking
const confirmBooking = async () => {
  try {
    loading.value = true;
    const data = await createBooking({
      serviceId: service.value._id,
      startTime: finalStartTime.value,
    });

    if (data.success) {
      toast.success("Booking Successfully.");
    }
  } catch (error) {
    if (error.response?.status === 409) {
      toast.error(
        error.response?.data?.message ||
          "This time slot is already booked. Please choose another time.",
      );
      return;
    }

    toast.error("Something went wrong. Please try again.");
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  try {
    const data = await getService(serviceId);

    service.value = data.service;
  } finally {
    loadingService.value = false;
  }
});
</script>

<style lang="scss">
.calendarBox {
  background-color: white;
  border-radius: 18px;
  padding: 14px;
  overflow: hidden;

  .vc-container {
    width: 100%;
    border: none;
    background: transparent;
    font-family: inherit;
  }

  .vc-header {
    margin-bottom: 12px;
  }

  .vc-title {
    background-color: transparent !important;
    font-size: 18px;
    font-weight: 700;
    color: var(--main-color);
  }

  .vc-weekday {
    color: #62748f;
    font-weight: 500;
  }

  .vc-day {
    margin: 1px;
  }

  .vc-dots {
    display: none;
  }

  .vc-day-content {
    border: 1px solid #eee;
    width: 60px;
    height: 42px;
    border-radius: 10px;
    transition: 0.2s;
  }
  .vc-day-content:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  .vc-day-content:not(.selected-day):hover {
    background-color: #eaf3ff;
  }

  .vc-highlight {
    border: none !important;
    border-radius: 6px !important;
    width: 100% !important;
    height: 100% !important;
    background: linear-gradient(to right, #182363, #0d4cb5, #0962f0) !important;
  }

  .vc-day-content.vc-focus {
    outline: none !important;
    box-shadow: none !important;
  }

  .vc-arrow {
    background-color: #eef5fd;
    border-radius: 10px;
    color: #1263e8;
  }
}

.availableTimes {
  .selectedTime {
    background-color: #0b64f1 !important;
    color: white;
  }
  .time {
    transition: 0.2s;
    &:hover,
    &.active {
      background-color: #0b64f1 !important;
      color: white;
    }
  }
}

.bookingContainer {
  > div {
    div {
      @media (min-width: 1400px) {
        border: none !important;
      }
    }
  }
}

.activity {
  div {
    padding: 5px 16px 5px 30px;

    &.active {
      background-color: #e1f8ee;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #0a8f46;
        border-radius: 50%;
      }
    }

    &.notActive {
      background-color: #f8e2e2;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #ae1c1c;
        border-radius: 50%;
      }
    }
  }
}

/* Skeleton */
.skeleton-summary .skeleton {
  position: relative;
  overflow: hidden;
  background-color: #e5ebf2;
}

.skeleton-summary .skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent);
  animation: summary-shimmer 1.5s infinite;
}

@keyframes summary-shimmer {
  100% {
    transform: translateX(100%);
  }
}

.skeleton-summary-title {
  width: 55%;
  height: 26px;
  border-radius: 6px;
}

.skeleton-summary-image {
  width: 100%;
  height: 270px;
}

.skeleton-service-name {
  width: 65%;
  height: 23px;
  border-radius: 5px;
}

.skeleton-summary-badge {
  width: 85px;
  height: 25px;
  flex-shrink: 0;
}

.skeleton-summary-text {
  width: 100%;
  height: 11px;
  border-radius: 5px;
}

.skeleton-summary-text-short {
  width: 60%;
}

.skeleton-summary-icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}

.skeleton-summary-value {
  width: 65px;
  height: 18px;
  border-radius: 5px;
}

.skeleton-summary-label {
  width: 45px;
  height: 12px;
  border-radius: 4px;
}

@media (max-width: 575.98px) {
  .skeleton-summary-image {
    height: 220px;
  }

  .skeleton-summary-icon {
    width: 40px;
    height: 40px;
  }

  .skeleton-summary-value {
    width: 55px;
  }

  .skeleton-summary .priceAndDuration {
    justify-content: space-between !important;
  }

  .skeleton-summary .vr {
    margin-inline: 8px !important;
  }
}
</style>
