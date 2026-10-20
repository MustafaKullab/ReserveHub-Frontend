<template>
  <div class="LogIn" style="background-color: var(--main-background)">
    <div class="container">
      <TopBar
        actionRoute="signup"
        actionText="Sign up"
        style="background-color: var(--main-background); box-shadow: none; border: none !important"
      />
      <div class="content row bg-white rounded-4 align-items-center m-0 m-lg-0">
        <div class="col-lg-7 p-0">
          <div class="describeSide rounded-4 p-5">
            <div class="text mb-2">
              <h1 class="display-4 text-light">
                More experiences <br />
                await
              </h1>
              <p style="color: #cbe6ff">
                Discover great services, book appointments,<br />
                and manage your plan - all in one place.
              </p>
            </div>
            <div class="features">
              <div
                class="feat d-flex align-items-center gap-3 mb-3 p-2 rounded-4"
                style="background-color: #70baff3d"
              >
                <div
                  class="icon d-flex justify-content-center align-items-center fs-5 rounded-pill"
                  style="width: 50px; height: 50px; background-color: #1236a8; color: #88b9f3"
                >
                  <i class="bi bi-calendar-event"></i>
                </div>
                <div class="featDetails">
                  <h4 class="mb-1" style="color: #e7f5f8">Easy booking</h4>
                  <p class="m-0" style="color: #cbe6ff">Book in just a few clicks.</p>
                </div>
              </div>
              <div
                class="feat d-flex align-items-center gap-3 mb-3 p-2 rounded-4"
                style="background-color: #70baff3d"
              >
                <div
                  class="icon d-flex justify-content-center align-items-center fs-5 rounded-pill"
                  style="width: 50px; height: 50px; background-color: #1236a8; color: #88b9f3"
                >
                  <i class="bi bi-gear"></i>
                </div>
                <div class="featDetails">
                  <h4 class="mb-1" style="color: #e7f5f8">Manage anytime</h4>
                  <p class="m-0" style="color: #cbe6ff">Your schedule, your way.</p>
                </div>
              </div>
              <div
                class="feat d-flex align-items-center gap-3 p-2 rounded-4"
                style="background-color: #70baff3d"
              >
                <div
                  class="icon d-flex justify-content-center align-items-center fs-5 rounded-pill"
                  style="width: 50px; height: 50px; background-color: #1236a8; color: #88b9f3"
                >
                  <i class="bi bi-heart"></i>
                </div>
                <div class="featDetails">
                  <h4 class="mb-1" style="color: #e7f5f8">More moments</h4>
                  <p class="m-0" style="color: #cbe6ff">Spend time on what matters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 py-5 py-lg-0">
          <div class="formSide px-4">
            <div class="logo mb-4">
              <img :src="logo" class="img-fluid" style="width: 180px" alt="logo" />
            </div>
            <div class="welcomeMsg">
              <h1>Welcome back</h1>
              <p class="text-muted">Sign in to manage you bookings and account.</p>
            </div>

            <form @submit.prevent="loginUser">
              <label for="email" class="label-control mb-2">Email address</label>
              <div class="input-group mb-3">
                <span
                  class="input-group-text"
                  style="
                    border-right: none;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                    background-color: #f1f2f7;
                  "
                  id="basic-addon1"
                  ><i class="bi bi-envelope"></i
                ></span>
                <input
                  type="email"
                  id="email"
                  class="form-control p-2"
                  placeholder="Enter your email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  style="
                    box-shadow: none;
                    border-left: none;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    background-color: #f1f2f7;
                  "
                  v-model="user.email"
                />
              </div>
              <label for="password" class="label-control mb-2">Password</label>
              <div class="input-group mb-1 position-relative">
                <span
                  class="input-group-text"
                  style="
                    border-right: none;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                    background-color: #f1f2f7;
                  "
                  id="basic-addon1"
                  ><i class="bi bi-lock"></i
                ></span>
                <input
                  :type="showPass ? 'text' : 'password'"
                  id="password"
                  class="form-control p-2"
                  placeholder="Enter your password"
                  aria-label="password"
                  aria-describedby="basic-addon2"
                  style="
                    box-shadow: none;
                    border-left: none;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    background-color: #f1f2f7;
                  "
                  v-model="user.password"
                  autocomplete="current-password"
                />
                <div
                  class="eyeIcon position-absolute"
                  style="
                    top: 50%;
                    right: 12px;
                    transform: translateY(-50%);
                    cursor: pointer;
                    z-index: 200;
                  "
                  @click="showPassword"
                >
                  <i class="bi" :class="showPass ? 'bi-eye-slash' : 'bi-eye'"></i>
                </div>
              </div>

              <div class="forgotPassword text-end">
                <router-link class="text-decoration-none m-0" :to="{ name: 'forgotPassword' }"
                  >Forgot password?</router-link
                >
              </div>

              <div class="loginButton">
                <button
                  class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2 my-3"
                  style="
                    background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                    color: white;
                  "
                  :disabled="authStore.loading"
                >
                  <div class="text flex-grow-1">Login</div>
                  <div class="icon"><i class="bi bi-arrow-up-right"></i></div>
                </button>
                <div v-if="authStore.errors" class="alert alert-danger" role="alert">
                  {{ authStore.errors.message || "Login failed. Please try again." }}
                </div>
              </div>

              <div class="dontHaveAnAccount text-center">
                Don't have an account?
                <router-link class="text-decoration-none" :to="{ name: 'signup' }"
                  >Sign up</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="footer mt-auto p-2 d-flex align-items-center justify-content-center text-muted"
        style="height: 56px"
      >
        &copy; {{ new Date().getFullYear() }} RevreseHub. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import logo from "../assets/logo.png";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import TopBar from "@/components/TopBar.vue";

// Define the auth store
const authStore = useAuthStore();

// Define the router
const router = useRouter();

// Var to define the password input element
const showPass = ref(false);

// Function to change the type of password input
const showPassword = () => {
  showPass.value = !showPass.value;
};

const user = ref({
  email: "",
  password: "",
});
watch(
  () => user.value,
  () => {
    authStore.errors = null;
  },
  { deep: true },
);

// Function to login user
const loginUser = async () => {
  await authStore.loginUser(user.value);

  if (authStore.isAuthenticated) {
    router.push({ name: "homePage" });
  }
};
</script>

<style lang="scss">
.topBar {
  .logo {
    @media (max-width: 991px) {
      width: 120px;
    }
  }
}
.describeSide {
  background-image: url("../assets/loginImage.png");
  background-size: cover;
  background-position: center;
  min-height: 560px;
  @media (max-width: 991px) {
    background-position: center;
  }
}

form {
  input {
    transition: 0.3s;
    &:focus {
      border-color: #dee2e6 !important;
    }
  }
}

.featDetails {
  p {
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
}
</style>
