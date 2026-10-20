<template>
  <div class="Footer py-3 mt-4 border-top" style="border-color: #b6d4ff !important">
    <div
      class="topSide pb-3 mb-3 border-bottom d-flex flex-column flex-lg-row align-items-center justify-content-between"
      style="border-color: #b6d4ff !important"
    >
      <div class="logo mb-2 mb-lg-0">
        <div class="image">
          <img :src="logo" class="img-fluid" style="width: 200px" alt="logo" />
        </div>
        <div class="m-0 small text-muted">Book smarter. Experience more</div>
      </div>
      <div class="vr mx-3"></div>
      <div class="links d-flex flex-column flex-lg-row mb-2 mb-lg-0">
        <router-link
          class="btn rounded-pill"
          style="color: var(--main-color)"
          :to="{ name: 'homePage' }"
          >Home</router-link
        >
        <router-link
          class="btn rounded-pill"
          style="color: var(--main-color)"
          :to="{ name: 'services' }"
          >Services</router-link
        >
        <router-link
          class="btn rounded-pill"
          style="color: var(--main-color)"
          :to="{ name: 'aboutUs' }"
          >About Us</router-link
        >
      </div>
      <div class="vr mx-3"></div>
      <div class="socialMedia d-flex align-items-center gap-2">
        <div class="insta">
          <a
            class="icon d-flex align-items-center justify-content-center rounded-pill"
            style="width: 40px; height: 40px; background-color: #b1d3ff; color: #07297f"
            href="#"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </div>
        <div class="facebook">
          <a
            class="icon d-flex align-items-center justify-content-center rounded-pill"
            style="width: 40px; height: 40px; background-color: #b1d3ff; color: #07297f"
            href="#"
          >
            <i class="bi bi-facebook"></i>
          </a>
        </div>
        <div class="x">
          <a
            class="icon d-flex align-items-center justify-content-center rounded-pill"
            style="width: 40px; height: 40px; background-color: #b1d3ff; color: #07297f"
            href="#"
          >
            <i class="bi bi-twitter-x"></i>
          </a>
        </div>
        <div class="linkedIn">
          <a
            class="icon d-flex align-items-center justify-content-center rounded-pill"
            style="width: 40px; height: 40px; background-color: #b1d3ff; color: #07297f"
            href="#"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="bottomSide d-flex gap-2 flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center justify-content-lg-between"
    >
      <div class="rights text-muted">
        &copy; {{ new Date().getFullYear() }} RevreseHub. All rights reserved.
      </div>
      <div class="links d-flex align-items-center gap-3">
        <router-link
          :to="{ name: 'privacyPolicy' }"
          class="text-decoration-none"
          style="color: #596d88"
        >
          Privacy Policy
        </router-link>

        <router-link
          :to="{ name: 'termsOfService' }"
          class="text-decoration-none"
          style="color: #596d88"
        >
          Terms of Service
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/logo.png";
</script>

<style lang="scss" scoped>
.topSide {
  .links {
    a {
      transition: 0.3s;
      &:hover {
        transform: translateX(-4px);
        color: #0045cd !important;
      }
    }
  }
  .socialMedia {
    a {
      i {
        transition: 0.3s;
      }
      &:hover i {
        transform: scale(1.2);
        color: #0045cd !important;
      }
    }
  }
}

.bottomSide {
  .links {
    a {
      transition: 0.3s;
      &:hover {
        transform: translateX(-4px);
        color: #0045cd !important;
      }
    }
  }
}

@media (max-width: 992px) {
  .vr {
    display: none;
  }
}
</style>
