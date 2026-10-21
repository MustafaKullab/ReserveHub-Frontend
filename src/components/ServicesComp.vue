<template>
  <div class="ServicesSection p-3 rounded-4" style="background-color: #f3f8fd">
    <div class="header d-flex align-items-center justify-content-between mb-2">
      <div
        class="title px-1 pb-3 px-lg-2 d-flex flex-column align-items-center gap-1"
        style="color: var(--main-color)"
      >
        <h2 class="me-auto mb-0">All Services</h2>
        <p class="m-0 me-auto">
          Discover our wide range of services and book your next experience.
        </p>
      </div>
    </div>
    <div v-if="props.loading" class="services row px-1 px-lg-2">
      <div class="col-md-6 col-lg-4 col-xl-3 px-2 mb-3" v-for="n in 8" :key="'skeleton-' + n">
        <div class="skeleton-card bg-white rounded shadow-sm overflow-hidden">
          <div class="skeleton skeleton-img"></div>

          <div class="serviceDetails px-3 py-3">
            <div class="skeleton skeleton-title mb-3"></div>

            <div class="skeleton skeleton-description mb-2"></div>
            <div class="skeleton skeleton-description short mb-3"></div>

            <div class="d-flex align-items-center justify-content-between mt-3">
              <div class="d-flex align-items-center gap-2">
                <div class="skeleton skeleton-icon"></div>
                <div class="skeleton skeleton-meta"></div>
              </div>

              <div class="d-flex align-items-center gap-2">
                <div class="skeleton skeleton-icon"></div>
                <div class="skeleton skeleton-meta price"></div>
              </div>

              <div class="skeleton skeleton-button"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="services row px-1 px-lg-2" v-else-if="!props.loading && services.length > 0">
      <div
        class="col-md-6 col-lg-4 col-xl-3 px-2 mb-3"
        v-for="service of props.services"
        :key="service._id"
      >
        <div class="service rounded p-0 shadow-sm" style="background-color: #fff">
          <div class="image">
            <img
              :src="`${apiUrl}${service.image}`"
              class="img-fluid rounded"
              style="height: 200px; width: 100%; object-fit: cover"
              alt="service img"
            />
          </div>
          <div class="serviceDetails rounded px-3 py-2">
            <div class="text my-2">
              <h5 class="name">{{ service.name }}</h5>
              <p class="description m-0">
                {{ service.description }}
              </p>
            </div>
            <div class="timePriceAndLink d-flex justify-content-between align-items-center">
              <div class="timePrice d-flex align-items-center">
                <div class="time d-flex align-items gap-2" style="color: var(--main-color)">
                  <div class="icon mb-1"><i class="bi bi-clock"></i></div>
                  <span>{{ service.durationMinutes }} min</span>
                </div>
                <div class="vr mx-3"></div>
                <div class="price d-flex align-items gap-2" style="color: var(--main-color)">
                  <div class="icon"><i class="bi bi-tag"></i></div>
                  <span>${{ service.price }}</span>
                </div>
              </div>
              <div class="link">
                <router-link
                  :to="{ name: 'serviceDetails', params: { serviceId: service._id } }"
                  class="icon rounded-pill d-flex align-items-center justify-content-center"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #cee5fd;
                    color: #0b2976;
                    cursor: pointer;
                  "
                >
                  <i class="bi bi-arrow-right fs-5"></i>
                </router-link>
              </div>
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
        <h4 class="fw-bold m-0" style="color: var(--main-color)">No Services Available Yet</h4>
        <p>
          There are currently no services available for booking. Please check back later to explore
          new services.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const apiUrl = import.meta.env.VITE_API_URL_IMAGE;

const props = defineProps(["services", "loading"]);
</script>

<style lang="scss" scoped>
.ServicesSection {
  @media (max-width: 992px) {
    .header {
      .title {
        width: 100%;
      }
      .sortBy {
        width: 100% !important;
      }
    }
  }
  .services {
    .service {
      transition: 0.5s;
      &:hover {
        transform: scale(1.01) translateY(2px);
      }
      .serviceDetails {
        .description {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .link {
          .icon {
            transition: 0.3s;
            &:hover {
              background-color: #afd4ff !important;
              animation: to-right 0.8s alternate-reverse infinite;
            }
          }
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
}

.skeleton-card {
  height: 100%;
}

.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #e9eff6;
  border-radius: 6px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent);
    animation: skeleton-shimmer 1.4s infinite;
  }

  &-img {
    height: 200px;
    border-radius: 0;
  }

  &-title {
    height: 19px;
    width: 70%;
  }

  &-description {
    height: 10px;
    width: 100%;

    &.short {
      width: 60%;
    }
  }

  &-icon {
    height: 13px;
    width: 13px;
    border-radius: 50%;
  }

  &-meta {
    height: 10px;
    width: 38px;

    &.price {
      width: 48px;
    }
  }

  &-button {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    flex-shrink: 0;
  }
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
