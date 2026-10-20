<template>
  <div class="HomePage" style="background-color: var(--main-background)">
    <div class="ServicesPage" style="background-color: var(--main-background)">
      <TopBar actionRoute="login" actionText="Log in" />
      <div class="heroSection p-3 py-4">
        <div class="container">
          <div class="content">
            <div class="header">
              <h1 class="title display-5 fw-bold" style="color: var(--main-color)">
                Find and Book<br />Trusted Services<br />in
                <span style="color: #0f6cfe">One Place</span>
              </h1>
              <p class="text-muted">
                From home services to event bookings, ReserveHub<br />
                helps you find trusted providers, compare options,<br />
                and book with confidence.
              </p>
            </div>
            <div class="filter">
              <div class="serach w-100">
                <div class="input-group" style="height: 56px">
                  <span
                    class="input-group-text"
                    style="color: #085bfe; background-color: #fff; border-right: none; height: 100%"
                    ><i class="bi bi-search"></i
                  ></span>
                  <input
                    type="text"
                    v-model="search"
                    style="box-shadow: none; border-color: #e4effa; border-left: none; height: 100%"
                    class="form-control"
                    placeholder="Search for a service..."
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span class="input-group-text" style="height: 100%">
                    <button class="btn btn-primary" type="button" @click="searchServices">
                      Search
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="content">
          <div class="features row py-3">
            <div class="col-lg-6 col-xl-3 mb-3 mb-xl-0">
              <div
                class="feat p-3 rounded-3 border d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-center"
                style="background-color: #f9fdfd; min-height: 130px !important"
              >
                <div
                  class="icon mb-1 d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #e7f2fe;
                    color: #0044fd;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-lightning-charge fs-5"></i>
                </div>
                <div class="text text-center text-lg-start">
                  <p class="fw-bold m-0">Easy & Fast</p>
                  <p class="text-muted m-0 small">
                    Find and book services in just <br />
                    a few clicks.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xl-3 mb-3 mb-xl-0">
              <div
                class="feat p-3 rounded-3 border d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-center"
                style="background-color: #f9fdfd; min-height: 130px !important"
              >
                <div
                  class="icon mb-1 d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #e7f2fe;
                    color: #0044fd;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-shield-check fs-5"></i>
                </div>
                <div class="text text-center text-lg-start">
                  <p class="fw-bold m-0">Reliable Services</p>
                  <p class="text-muted m-0 small">
                    Browse active services with clear prices, durations, and availability.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3 mb-3 mb-xl-0">
              <div
                class="feat p-3 rounded-3 border d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-center"
                style="background-color: #f9fdfd; min-height: 130px !important"
              >
                <div
                  class="icon mb-1 d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #e7f2fe;
                    color: #0044fd;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-calendar fs-5"></i>
                </div>
                <div class="text text-center text-lg-start">
                  <p class="fw-bold m-0">Flexible Scheduling</p>
                  <p class="text-muted m-0 small">
                    Choose the date and time that works best for you.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3 mb-3 mb-xl-0">
              <div
                class="feat p-3 rounded-3 border d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-center"
                style="background-color: #f9fdfd; min-height: 130px !important"
              >
                <div
                  class="icon mb-1 d-flex align-items-center justify-content-center rounded-pill"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #e7f2fe;
                    color: #0044fd;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-headset fs-5"></i>
                </div>
                <div class="text text-center text-lg-start">
                  <p class="fw-bold m-0">Support When You Need It</p>
                  <p class="text-muted m-0 small">Our team is here to help you anytime.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="ourServices py-3">
            <div class="header">
              <div class="title">
                <span style="font-size: 10px; letter-spacing: 5px; color: var(--main-color)">{{
                  "our services".toUpperCase()
                }}</span>
                <h3 class="fw-bold" style="color: var(--main-color)">
                  Available <span style="color: #055bfb">Services</span>
                </h3>
              </div>
            </div>

            <div class="services row" v-if="loading">
              <div class="col-md-4 col-lg-3" v-for="n in 8" :key="'skeleton-' + n">
                <div class="service skeleton-card bg-white rounded border mb-3 shadow-sm">
                  <div class="skeleton skeleton-img"></div>

                  <div class="serviceDetails py-2 px-3">
                    <div class="skeleton skeleton-title my-3"></div>

                    <div class="d-flex align-items-center justify-content-between my-3">
                      <div class="skeleton skeleton-price"></div>
                      <div class="vr mx-2"></div>
                      <div class="skeleton skeleton-duration"></div>
                    </div>

                    <div class="skeleton skeleton-button mb-2"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="emptyState p-3 py-4 mb-3 bg-white rounded border text-center"
              v-if="!loading && services?.length === 0 && search != null"
              style="border-style: dashed !important; border-width: 2px !important"
            >
              <div class="image">
                <img src="@/assets/NotFound.png" style="width: 240px" alt="Not Found" />
              </div>

              <div class="text">
                <h4 class="fw-bold m-0" style="color: var(--main-color)">No services found</h4>
                <p>
                  We couldn't find any services matching "{{ search }}". <br />Try a different
                  keyword or browse all services
                </p>
              </div>
              <div class="button">
                <router-link
                  :to="{ name: 'services' }"
                  class="text-decoration-none btn btn-primary d-flex align-items-center justify-content-center gap-2 mx-auto"
                  style="width: fit-content"
                >
                  <div class="text">Browse All Services</div>
                  <div class="icon mt-1"><i class="bi bi-arrow-right"></i></div>
                </router-link>
              </div>
            </div>

            <div class="services row" v-if="services?.length > 0 && !loading">
              <div class="col-md-4 col-lg-3" v-for="service of services" :key="service._id">
                <div class="service bg-white rounded border mb-3 shadow-sm">
                  <div class="servImg">
                    <img
                      :src="`${apiUrlImg}${service?.image}`"
                      style="width: 100%; height: 200px; object-fit: cover"
                      class="rounded-top"
                      alt="service img"
                    />
                  </div>
                  <div class="serviceDetails py-2 px-3">
                    <div class="serviceName fw-bold my-2">{{ service?.name }}</div>
                    <div
                      class="priceAndDuration d-flex align-items-center justify-content-between my-2"
                    >
                      <div class="price w-50 border-end" style="color: #136dfb">
                        ${{ service?.price }}
                      </div>
                      <div
                        class="duration d-flex align-items-center gap-2 w-50 justify-content-end"
                      >
                        <div class="icon" style="color: #136dfb"><i class="bi bi-clock"></i></div>
                        <span class="small" style="color: #807f97"
                          >{{ service?.durationMinutes }} min</span
                        >
                      </div>
                    </div>

                    <div class="viewDetails">
                      <router-link
                        :to="{ name: 'serviceDetails', params: { serviceId: service?._id } }"
                        class="d-flex align-items-center justify-content-center gap-2 text-decoration-none btn"
                        style="background-color: #ecf5fe; border-color: #a5c1ff; color: #0347fd"
                        ><span>View Details</span>
                        <div class="icon mt-1"><i class="bi bi-arrow-right"></i></div
                      ></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="emptyState p-3 py-4 mb-3 bg-white rounded border text-center"
              v-else
              style="border-style: dashed !important; border-width: 2px !important"
            >
              <div class="image">
                <img src="@/assets/emptyBox.png" style="width: 240px" alt="Not Found" />
              </div>

              <div class="text">
                <h4 class="fw-bold m-0" style="color: var(--main-color)">
                  No Services Available Yet
                </h4>
                <p>
                  There are currently no services available for booking. Please check back later to
                  explore new services.
                </p>
              </div>
            </div>

            <div class="createOutdoorSection p-3 py-4 rounded-3">
              <span style="font-size: 10px; letter-spacing: 5px; color: var(--main-color)">{{
                "transform your space".toUpperCase()
              }}</span>

              <h1 class="title fw-bold" style="color: var(--main-color)">
                Create Outdoor Spaces<br />
                <span style="color: #0f6cfe">You'll Love</span>
              </h1>

              <p class="text-muted">
                From car shades to outdoor seating and privacy screens,<br />
                find everything you need to make your home more<br />
                comfortable, functional, and beautiful.
              </p>

              <div class="exploreServices">
                <router-link
                  :to="{ name: 'services' }"
                  style="width: fit-content"
                  class="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                >
                  <span>Explore Services</span>
                  <div class="icon"><i class="bi bi-arrow-right"></i></div>
                </router-link>
              </div>
            </div>

            <div class="getStartedSection pt-3">
              <span style="font-size: 10px; letter-spacing: 5px; color: var(--main-color)">{{
                "how it works".toUpperCase()
              }}</span>

              <h2 class="title fw-bold" style="color: var(--main-color)">
                Get Started in <span style="color: #0f6cfe">3 Simple Steps</span>
              </h2>

              <div class="boxes row">
                <div class="col-lg-6 col-xl-4 mb-3 mb-xl-0">
                  <div
                    class="bg-white border px-2 d-flex align-items-center rounded"
                    style="min-height: 100px"
                  >
                    <div class="box d-flex gap-3">
                      <div class="icon" style="color: #0464fb">
                        <i class="bi bi-1-circle-fill fs-4"></i>
                      </div>
                      <div class="details d-flex align-items-center gap-2">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-pill"
                          style="
                            width: 50px;
                            height: 50px;
                            background-color: #e8f3fe;
                            color: #0d6afe;
                            flex-shrink: 0;
                          "
                        >
                          <i class="bi bi-search fs-4"></i>
                        </div>
                        <div class="text">
                          <div class="fw-bold">Search</div>
                          <div class="text-muted small">
                            Find the service you need using our search and filters.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xl-4 mb-3 mb-xl-0">
                  <div
                    class="bg-white border px-2 d-flex align-items-center rounded"
                    style="min-height: 100px"
                  >
                    <div class="box d-flex gap-3">
                      <div class="icon" style="color: #0464fb">
                        <i class="bi bi-2-circle-fill fs-4"></i>
                      </div>
                      <div class="details d-flex align-items-center gap-2">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-pill"
                          style="
                            width: 50px;
                            height: 50px;
                            background-color: #e8f3fe;
                            color: #0d6afe;
                            flex-shrink: 0;
                          "
                        >
                          <i class="bi bi-calendar fs-4"></i>
                        </div>
                        <div class="text">
                          <div class="fw-bold">Choose & Book</div>
                          <div class="text-muted small">
                            Pick the best option and schedule your booking.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xl-4 mb-3 mb-xl-0">
                  <div
                    class="bg-white border px-2 d-flex align-items-center rounded"
                    style="min-height: 100px"
                  >
                    <div class="box d-flex gap-3">
                      <div class="icon" style="color: #0464fb">
                        <i class="bi bi-3-circle-fill fs-4"></i>
                      </div>
                      <div class="details d-flex align-items-center gap-2">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-pill"
                          style="
                            width: 50px;
                            height: 50px;
                            background-color: #e8f3fe;
                            color: #0d6afe;
                            flex-shrink: 0;
                          "
                        >
                          <i class="bi bi-check-circle fs-4"></i>
                        </div>
                        <div class="text">
                          <div class="fw-bold">Enjoy the Service</div>
                          <div class="text-muted small">
                            Sit back and let the professionals handle the rest.
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
        <FooterComp />
      </div>
    </div>
  </div>
</template>
<script setup>
import FooterComp from "@/components/FooterComp.vue";
import TopBar from "@/components/TopBar.vue";
import { getServices } from "@/services/servicesService";
import { onMounted, ref, watch } from "vue";

// Define Url of Img
const apiUrlImg = import.meta.env.VITE_API_URL_IMAGE;

// Define new var to store search
const search = ref(null);

// Define new var to store services
const services = ref(null);

const loading = ref(false);

const fetchServices = async (filter = { isActive: true, limit: 8 }) => {
  try {
    loading.value = true;
    const data = await getServices(filter);

    services.value = data.services.slice(0, 8);
  } finally {
    loading.value = false;
  }
};

watch(search, () => {
  if (search.value === "") {
    fetchServices();
  }
});

// Function to search services
const searchServices = () => {
  fetchServices({ search: search.value });
};

onMounted(() => {
  fetchServices();
});
</script>

<style lang="scss" scoped>
.heroSection {
  background-image: url("@/assets/HomePageOne.png");
  width: 100%;
  background-position: center;
  background-size: cover;
  @media (max-width: 767px) {
    background-image:
      linear-gradient(
        110deg,
        rgba(237, 246, 255, 0.562) 0%,
        rgba(213, 232, 255, 0.555) 50%,
        rgba(167, 207, 255, 0.542) 100%
      ),
      url("../assets/heroImage.png");
    .content {
      .title,
      p {
        br {
          display: none;
        }
      }
    }
  }
}

.createOutdoorSection {
  background-image: url("@/assets/HomePageTwo.png");
  width: 100%;
  background-position: center;
  @media (max-width: 767px) {
    background-position: left !important;
    p {
      font-size: 13px !important;
    }
  }
  background-size: cover;
}

.viewDetails {
  a {
    &:hover {
      background-color: #0347fd !important;
      color: rgb(255, 255, 255) !important;
      border-color: rgb(156, 164, 252);
    }
  }
}

.serach {
  @media (min-width: 992px) {
    width: 50% !important;
  }
}

.services {
  .service {
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
    }
  }
}

.features {
  .feat {
    .icon {
      margin-bottom: 45px !important;
      @media (max-width: 991px) {
        & {
          margin-bottom: 0px !important;
        }
      }
    }
  }
}

.skeleton-card {
  overflow: hidden;
}

.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #e9edf3;
  border-radius: 6px;
}

.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.65), transparent);
  animation: skeleton-shimmer 1.4s infinite;
}

.skeleton-img {
  width: 100%;
  height: 200px;
  border-radius: 0;
}

.skeleton-title {
  width: 70%;
  height: 20px;
}

.skeleton-price {
  width: 55px;
  height: 18px;
}

.skeleton-duration {
  width: 75px;
  height: 16px;
}

.skeleton-button {
  width: 100%;
  height: 38px;
  border-radius: 6px;
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
</style>
