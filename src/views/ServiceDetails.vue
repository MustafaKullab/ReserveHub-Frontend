<template>
  <div class="ServiceDetails" style="background-color: var(--main-background)">
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
            <li class="breadcrumb-item m-0 active text-muted" aria-current="page">
              {{ service?.name }}
            </li>
          </ol>
        </nav>
      </div>

      <div class="content pt-2">
        <div class="serviceDetails row pb-3 m-0" v-if="loading">
          <div class="col-lg-7 h-100 p-0 pe-lg-3">
            <div class="skeleton skeleton-image rounded-4"></div>
          </div>

          <div
            class="col-lg-5 h-100 rounded-4 py-3 px-4 d-flex flex-column justify-content-center gap-4 mt-3 mt-lg-0 skeleton-details"
          >
            <div class="DetailsAndActivity pb-3 border-bottom">
              <div class="d-flex align-items-center justify-content-between mb-3 gap-3">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-badge"></div>
              </div>

              <div class="skeleton skeleton-text mb-2"></div>
              <div class="skeleton skeleton-text mb-2"></div>
              <div class="skeleton skeleton-text skeleton-text-short"></div>
            </div>

            <div class="priceAndDuration d-flex align-items-center justify-content-between py-3">
              <div class="d-flex align-items-center gap-2">
                <div class="skeleton skeleton-icon rounded-circle"></div>

                <div>
                  <div class="skeleton skeleton-value mb-2"></div>
                  <div class="skeleton skeleton-label"></div>
                </div>
              </div>

              <div class="vr mx-3"></div>

              <div class="d-flex align-items-center gap-2">
                <div class="skeleton skeleton-icon rounded-circle"></div>

                <div>
                  <div class="skeleton skeleton-value mb-2"></div>
                  <div class="skeleton skeleton-label"></div>
                </div>
              </div>
            </div>

            <div class="skeleton skeleton-button rounded-pill"></div>
          </div>
        </div>

        <div class="serviceDetails row pb-3 m-0" v-if="service?._id && !loading">
          <div class="col-lg-7 h-100 p-0 pe-lg-3">
            <div class="serviceImage">
              <img
                :src="`${apiUrlImage}${service?.image}`"
                class="service-img rounded-4"
                :alt="service?.name"
              />
            </div>
          </div>
          <div
            class="col-lg-5 h-100 rounded-4 py-3 px-4 d-flex flex-column justify-content-center gap-4 mt-3 mt-lg-0"
            style="background-color: #f3f8fe"
          >
            <div class="DetailsAndActivity pb-2 border-bottom">
              <div class="nameAndActivity d-flex align-items-center justify-content-between mb-3">
                <h3 class="name fw-bold" style="color: var(--main-color)">{{ service?.name }}</h3>
                <div class="activity">
                  <div class="active rounded-pill" v-if="service?.isActive">Available</div>
                  <div class="notActive rounded-pill" v-if="!service?.isActive">Unavailable</div>
                </div>
              </div>
              <div class="describe" style="color: #7d7281">{{ service?.description }}</div>
            </div>
            <div class="priceAndDuration d-flex align-items-center justify-content-between py-3">
              <div class="price d-flex align-items-center gap-2">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="width: 50px; height: 50px; background-color: #e4f0fe; color: #1246c2"
                >
                  <i class="bi bi-tag fs-4"></i>
                </div>
                <div class="priceDetails">
                  <h5 class="price m-0">${{ service?.price }}</h5>
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
                  <h5 class="price m-0">{{ service?.durationMinutes }} min</h5>
                  <span class="small text-muted">Duration</span>
                </div>
              </div>
            </div>

            <div class="bookButton d-flex align-items-center">
              <router-link
                :to="{ name: 'BookingService', params: { serviceId: route.params.serviceId } }"
                class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2"
                style="
                  background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                  color: white;
                "
                type="submit"
              >
                <div class="text flex-grow-1 ms-1">Book Now</div>
                <div class="icon me-1"><i class="bi bi-arrow-right"></i></div>
              </router-link>
            </div>
          </div>
        </div>

        <div
          class="availability p-3 rounded-4 mb-3"
          style="background-color: #f3f8fe"
          v-if="service?._id"
        >
          <div class="header">
            <h4 class="title fw-bold m-0 mb-1">Availability</h4>
            <p class="m-0">The service is available on the following days and times.</p>
          </div>
          <div class="row mt-3 g-3">
            <div class="col-lg-4" v-for="(available, i) of service?.availability" :key="i">
              <div
                class="date p-2 rounded d-flex align-items-center flex-grow-1 gap-3"
                style="background-color: #e8f3fe"
              >
                <div class="icon" style="color: #0f67f3">
                  <i class="bi bi-calendar-week fs-5"></i>
                </div>
                <div class="details d-flex align-items-center justify-content-between flex-grow-1">
                  <div class="day">{{ available?.day }}</div>
                  <div class="time d-flex align-items-center gap-2 text-muted">
                    <div class="from">{{ available?.from }}</div>
                    -
                    <div class="to">{{ available?.to }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="moreServices p-3 rounded-4" style="background-color: #f3f8fe">
          <div
            class="header d-flex flex-column flex-sm-row align-items-center justify-content-between"
          >
            <div class="title">
              <h4 class="fw-bold m-0 mb-1" style="color: var(--main-color)">More Services</h4>
              <p class="m-0 text-muted small">
                Discover more services and book your next experienc.
              </p>
            </div>
            <div class="link">
              <router-link
                class="d-flex align-items-center gap-2 text-decoration-none"
                :to="{ name: 'services' }"
                ><span>View ALl </span>
                <div style="margin-top: 2px"><i class="bi bi-arrow-right"></i></div
              ></router-link>
            </div>
          </div>

          <div class="services row mt-3">
            <div class="col-12 col-md-6 col-xl-4" v-for="(service, i) of services" :key="i">
              <div
                class="service mb-3 mb-xl-0 bg-white rounded shadow-sm"
                style="min-height: 350px"
              >
                <div class="image p-2" style="height: 180px">
                  <img
                    :src="`${apiUrlImage}${service?.image}`"
                    style="height: 100%; object-fit: cover"
                    :alt="service?.name"
                    class="rounded-start w-100"
                  />
                </div>
                <div
                  class="details px-3 py-2 d-flex flex-column justify-content-between"
                  style="color: var(--main-color)"
                >
                  <div class="serviceName">
                    <h5 class="name fw-bold">{{ service?.name }}</h5>
                  </div>
                  <div class="duration d-flex align-items-center gap-2 text-muted py-2">
                    <div class="icon"><i class="bi bi-clock"></i></div>
                    <div class="min">{{ service?.durationMinutes }} min</div>
                  </div>
                  <div class="price">
                    <div class="price fs-4 py-1 fw-bold">${{ service?.price }}</div>
                  </div>
                  <div class="link">
                    <router-link
                      :to="{ name: 'serviceDetails', params: { serviceId: service?._id } }"
                      class="icon d-flex align-items-center justify-content-between rounded-3 border w-100 p-2 text-decoration-none"
                      style="
                        background-color: rgb(223 239 255 / 66%);
                        color: #036aff;
                        cursor: pointer;
                      "
                    >
                      <div class="text">View Details</div>
                      <div
                        class="icon rounded-pill text-light d-flex align-items-center justify-content-center"
                        style="width: 35px; height: 35px; background-color: #036aff"
                      >
                        <i class="bi bi-arrow-right fs-5"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  </div>
</template>

<script setup>
import FooterComp from "@/components/FooterComp.vue";
import TopBar from "@/components/TopBar.vue";
import { getService, getServices } from "@/services/servicesService";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

const route = useRoute();

const service = ref({});
const services = ref([]);
const loading = ref(false);

watch(
  () => route.params.serviceId,
  async (newServiceId) => {
    try {
      loading.value = true;
      const data1 = await getService(newServiceId);
      const data2 = await getServices({ isActive: true });

      service.value = data1.service;
      services.value = data2.services.filter((serv) => serv._id !== newServiceId).slice(0, 3);
      console.log(services.value);
    } finally {
      loading.value = false;
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
.nameAndActivity {
  .activity {
    div {
      padding: 8px 16px 8px 30px;

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
}

.serviceDetails {
  height: 420px;
  @media (max-width: 991px) {
    height: auto;
  }

  .serviceImage {
    height: 100%;
    overflow: hidden;
    border-radius: 1rem;

    @media (max-width: 991px) {
      height: 300px;
    }
    .service-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.moreServices {
  .services {
    .service {
      transition: 0.5s;
      &:hover {
        transform: scale(1.03) translateY(-3px);
      }
    }
  }
}

.link {
  a {
    transition: 0.3s;
    &:hover {
      background-color: #dfeefd !important;
      i {
        animation: to-right 0.8s alternate-reverse infinite;
      }
    }
  }
}

@keyframes to-right {
  0% {
    transform: translate(-2px);
  }
  50% {
    transform: translate(3px);
  }
  100% {
    transform: translate(-2px);
  }
}

.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #e9edf3;
  border-radius: 8px;
}

/* Shimmer Animation */
.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
  animation: skeleton-shimmer 1.5s infinite;
}

@keyframes skeleton-shimmer {
  100% {
    transform: translateX(100%);
  }
}

.skeleton-image {
  width: 100%;
  height: 420px;
  border-radius: 16px;
}

.skeleton-details {
  background-color: #f3f8fe;
}

.skeleton-title {
  width: 55%;
  height: 28px;
  border-radius: 6px;
}

.skeleton-badge {
  width: 90px;
  height: 28px;
  border-radius: 50px;
}

.skeleton-text {
  width: 100%;
  height: 12px;
  border-radius: 6px;
}

.skeleton-text-short {
  width: 65%;
}

.skeleton-icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
}

.skeleton-value {
  width: 65px;
  height: 18px;
  border-radius: 5px;
}

.skeleton-label {
  width: 50px;
  height: 12px;
  border-radius: 5px;
}

.skeleton-button {
  width: 100%;
  height: 44px;
  border-radius: 50px;
}

@media (max-width: 991.98px) {
  .skeleton-image {
    height: 300px;
  }
}

@media (max-width: 575.98px) {
  .skeleton-image {
    height: 230px;
  }

  .skeleton-details {
    padding: 20px !important;
    gap: 20px !important;
  }

  .skeleton-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
