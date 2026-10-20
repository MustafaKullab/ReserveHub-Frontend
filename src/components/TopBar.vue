<template>
  <div
    class="TopBar border-bottom"
    style="
      background-color: rgba(251, 253, 255, 0.65);
      backdrop-filter: blur(12px);
      border-color: rgba(227, 237, 248, 0.4);
      box-shadow: 0 2px 8px rgba(24, 35, 99, 0.06);
      position: sticky !important;
      top: 0 !important;
      z-index: 200;
    "
  >
    <div :class="route.meta.requiresAdmin ? 'container-fluid' : 'container'">
      <div class="topBar navbar navbar-expand-lg py-3">
        <router-link :to="{ name: 'homePage' }" class="logo navbar-brand flex-shrink-0">
          <img :src="logo" class="img-fluid" style="width: 120px" alt="ReserveHub" />
        </router-link>
        <div
          class="buttonAndProfile d-flex align-items-center gap-2 ms-auto"
          v-if="authStore.isAuthenticated"
        >
          <button
            class="navbar-toggler"
            style="order: 1; box-shadow: none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            v-if="!route.meta.requiresAdmin"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="viewWebsite">
            <router-link
              :to="{ name: 'homePage' }"
              class="d-flex align-items-center text-decoration-none gap-2"
              v-if="route.meta.requiresAdmin"
            >
              <div class="icon"><i class="bi bi-box-arrow-up-right"></i></div>
              <div class="text">View Website</div>
            </router-link>
          </div>

          <div class="vr mx-3"></div>

          <div
            class="profileMe d-flex justify-content-center align-items-center rounded-pill"
            style="width: 40px; height: 40px; background-color: #d4e6fb"
            v-if="authStore.isAuthenticated"
          >
            <router-link :to="{ name: 'profile' }">
              <div class="img">
                <i class="bi bi-person fs-4" v-if="!user?.avatar"></i>
                <img
                  :src="`${apiUrlImage}${user?.avatar}`"
                  style="width: 38px; height: 38px; object-fit: cover"
                  class="rounded-pill"
                  alt="avatar"
                  v-else
                />
              </div>
            </router-link>
          </div>
        </div>

        <div
          class="links collapse navbar-collapse flex-grow-1 justify-content-end"
          id="navbarSupportedContent"
          v-if="authStore.isAuthenticated && !route.meta.requiresAdmin"
        >
          <ul class="navbar-nav d-flex align-items-start align-items-lg-center gap-1">
            <li class="nav-item">
              <router-link
                class="btn rounded-pill nav-link text-start text-lg-center"
                style="padding: 6px 12px"
                :to="{ name: 'homePage' }"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="btn rounded-pill nav-link text-start text-lg-center"
                style="padding: 6px 12px"
                :to="{ name: 'services' }"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="btn rounded-pill nav-link text-start text-lg-center"
                style="padding: 6px 12px"
                :to="{ name: 'BookingsPage' }"
                >My Bookings</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="btn rounded-pill nav-link text-start text-lg-center"
                style="padding: 6px 12px"
                :to="{ name: 'aboutUs' }"
                >About Us</router-link
              >
            </li>
            <li class="nav-item" v-if="authStore.user.role === 'admin'">
              <router-link
                class="btn rounded-pill nav-link text-start text-lg-center"
                style="padding: 6px 12px"
                :to="{ name: 'dashboardPage' }"
                >Dashboard</router-link
              >
            </li>
          </ul>
        </div>

        <div
          class="authLinks ms-auto d-flex align-items-center gap-3"
          v-if="!authStore.isAuthenticated"
          :style="{ order: !authStore.isAuthenticated ? 2 : 0 }"
        >
          <router-link class="text-decoration-none text-dark" :to="{ name: 'services' }"
            >Explore services</router-link
          >
          <div :class="actionRoute">
            <router-link class="btn rounded-pill signup" :to="{ name: actionRoute }">{{
              actionText
            }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";
import { useRoute } from "vue-router";
import logo from "../assets/logo.png";
import { computed } from "vue";
// Define Route Object
const route = useRoute();

// Define auth store
const authStore = useAuthStore();

defineProps(["actionRoute", "actionText"]);

// Define obj to store the current user
const user = computed(() => authStore.user);

const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;
</script>

<style lang="scss" scoped>
.authLinks div {
  a {
    background-color: #bbd9ff !important;
    color: #3181da;
    transition: 0.3s;

    &:hover {
      background-color: #bbd9ff !important;
    }
    &:focus {
      border-color: #76b6ff;
    }
  }
}
.links {
  a {
    color: #3181da;
    transition: 0.3s;

    &:hover,
    &.router-link-exact-active {
      background-color: #bbd9ff !important;
    }
    &:focus {
      border-color: #76b6ff;
      color: #3181da !important;
    }
  }
}

.buttonAndProfile {
  @media (min-width: 992px) {
    order: 2 !important;
  }
}
</style>
