<template>
  <div class="ForgotPassword min-vh-100" style="background-color: var(--main-background)">
    <div class="container min-vh-100 d-flex flex-column">
      <TopBar
        actionRoute="login"
        actionText="Log in"
        style="background-color: var(--main-background); box-shadow: none; border: none !important"
      />

      <div
        class="content row align-items-center align-items-lg-stretch rounded-4 my-2 m-0 flex-grow-1"
      >
        <div
          class="formSide col-lg-5 px-4 px-lg-5 py-4 bg-white rounded-4 d-flex align-items-center justify-content-center"
        >
          <div class="formContainer">
            <div class="logo mb-3">
              <img :src="logo" alt="ReserveHub" class="img-fluid" style="width: 150px" />
            </div>

            <div class="title">
              <h1 style="color: var(--main-color)">Forgot your password?</h1>
              <p class="text-muted my-3">
                Enter your email and we'll send you a reset code to <br />
                securely restore access to your account.
              </p>
            </div>

            <form @submit.prevent="sendResetCode">
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
                  v-model="email"
                />
              </div>

              <div class="sendCode">
                <button
                  class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2 my-3"
                  style="
                    background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                    color: white;
                  "
                  type="submit"
                >
                  <div class="text flex-grow-1 ms-1">Send reset code</div>
                  <div class="icon me-1"><i class="bi bi-arrow-right"></i></div>
                </button>
              </div>
              <div
                class="remeberPass d-flex align-items-center justify-content-center gap-2 border-top py-2 my-2"
              >
                <div class="text text-muted">Remember your password?</div>
                <div class="link">
                  <router-link class="text-decoration-none" :to="{ name: 'login' }"
                    >Log in</router-link
                  >
                </div>
              </div>

              <div
                class="message d-flex align-items-center gap-3 py-2 px-3 rounded-4"
                style="background-color: #f1f6fc"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="width: 45px; height: 45px; background-color: #d8eafe; color: #091e7f"
                >
                  <i class="bi bi-shield-check fs-5"></i>
                </div>
                <div class="text">
                  <h6 class="head m-0 mb-1">Your sercurity matters</h6>
                  <p class="m-0 small" style="color: #8591b1">
                    We'll never share your information. Password <br />
                    recovery is always secure and encrypted.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-7 imgSide rounded-end-4" style="min-height: 553px"></div>
      </div>

      <div
        class="footer p-2 d-flex align-items-center justify-content-center text-muted"
        style="height: 56px"
      >
        &copy; {{ new Date().getFullYear() }} RevreseHub. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script setup>
import TopBar from "@/components/TopBar.vue";
import logo from "@/assets/logo.png";
import { ref } from "vue";
import { forgotPassword } from "@/services/authServices";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";

// Define router obj
const router = useRouter();

const email = ref("");

// Function to send reset Code
const sendResetCode = async () => {
  try {
    const data = await forgotPassword({ email: email.value });
    if (data.success) {
      toast.success(data.message);
      router.push({ name: "resetPassword", query: { email: email.value } });
    }
  } catch (error) {
    const data = error?.response?.data;

    console.log(data);

    if (data?.errors && Object.keys(data?.errors).length > 0) {
      const filterErrors = Object.values(data?.errors)[0];

      toast.error(filterErrors.msg || filterErrors.message);
    } else {
      toast.error(data?.message || "Something went wrong, please try again.");
    }
  }
};
</script>

<style lang="scss" scoped>
.message {
  .text {
    .small {
      @media (max-width: 767px) {
        font-size: 12px !important;
      }
    }
  }
}

.imgSide {
  background-image: url(../assets/forgotPasswordImage.png);
  background-size: cover;
  background-position: center;
  min-height: 569px;
  @media (max-width: 992px) {
    & {
      display: none;
    }
  }
}

.formSide {
  @media (min-width: 992px) {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
}
</style>
