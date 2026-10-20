<template>
  <div class="ResetPassword min-vh-100" style="background-color: var(--main-background)">
    <div class="container min-vh-100 d-flex flex-column">
      <TopBar
        actionRoute="login"
        actionText="Log in"
        style="background-color: var(--main-background); box-shadow: none; border: none !important"
      />

      <div class="content row align-items-center align-items-lg-stretch mx-0 flex-grow-1">
        <div
          class="col-lg-5 formSide d-flex flex-column align-items-center justify-content-center py-4 bg-white rounded-4"
        >
          <div class="contentContainer">
            <div class="logo mb-2">
              <img :src="logo" alt="ReserveHub" class="img-fluid" style="width: 150px" />
            </div>

            <div class="title">
              <h1 style="color: var(--main-color)">Reset your password</h1>
              <p class="text-muted my-2" style="max-width: 440px">
                Enter the 6-digit reset code we sent to your email, then create a new password to
                securely regin access to your account
              </p>
            </div>

            <form @submit.prevent="resetPasswordFunc">
              <div class="d-flex justify-content-center justify-content-md-start gap-2 my-2">
                <input
                  type="text"
                  v-for="(digit, i) of code"
                  :key="i"
                  class="form-control text-center"
                  style="
                    width: 50px;
                    height: 50px;
                    box-shadow: none;
                    background-color: #f3f5f9;
                    border-color: #dfe2eb;
                    font-size: 20px;
                  "
                  maxlength="1"
                  v-model="code[i]"
                  ref="inputs"
                  @input="nextInp(i)"
                  @keydown.backspace="preInp(i)"
                />
              </div>

              <div class="input-group mb-2 position-relative">
                <span
                  class="input-group-text"
                  style="
                    border-right: none;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                    background-color: #f1f2f7;
                  "
                  id="basic-addon2"
                  ><i class="bi bi-lock"></i
                ></span>
                <input
                  :type="showPass ? 'text' : 'password'"
                  id="password"
                  class="form-control p-2"
                  placeholder="Create a new password"
                  aria-label="password"
                  aria-describedby="basic-addon2"
                  style="
                    box-shadow: none;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    background-color: #f1f2f7;
                  "
                  autocomplete="new-password"
                  :class="{ 'is-invalid': resetPassError }"
                  v-model="password"
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
                  :style="{ right: resetPassError ? '35px' : '12px' }"
                  @click="showPassword"
                >
                  <i class="bi" :class="showPass ? 'bi-eye-slash' : 'bi-eye'"></i>
                </div>
              </div>
              <div class="input-group mb-2 position-relative">
                <span
                  class="input-group-text"
                  style="
                    border-right: none;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                    background-color: #f1f2f7;
                  "
                  id="basic-addon4"
                  ><i class="bi bi-lock"></i
                ></span>
                <input
                  :type="showPass2 ? 'text' : 'password'"
                  id="confirmPassword"
                  class="form-control p-2"
                  placeholder="Confirm your new password"
                  aria-label="password"
                  aria-describedby="basic-addon4"
                  style="
                    box-shadow: none;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    background-color: #f1f2f7;
                  "
                  autocomplete="new-password"
                  v-model="confirmPassword"
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
                  @click="showPassword2"
                >
                  <i class="bi" :class="showPass2 ? 'bi-eye-slash' : 'bi-eye'"></i>
                </div>
              </div>

              <div class="resetPassword">
                <button
                  class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2 my-3"
                  style="
                    background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                    color: white;
                  "
                  :disabled="loading"
                  type="submit"
                >
                  <div class="text flex-grow-1 ms-1">Reset Password</div>
                  <div class="icon me-1"><i class="bi bi-arrow-right"></i></div>
                </button>
              </div>

              <div
                class="remeberPass d-flex justify-content-center align-items-center gap-2 border-top py-2 my-2"
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
                    Choose a strong password to keep your account secure.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-7 imgSide rounded-end-4"></div>
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
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { resetPassword } from "@/services/authServices";

// Define route obj
const route = useRoute();

// Define router obj
const router = useRouter();

// Define email of user
const email = route.query.email;

const code = ref(["", "", "", "", "", ""]);
const inputs = ref([]);

const nextInp = (index) => {
  if (index < 5 && code.value[index]) {
    inputs.value[index + 1].focus();
  }
};

const preInp = (index) => {
  if (index > 0 && !code.value[index]) {
    code.value[index] = "";
    inputs.value[index - 1].focus();
  }
};

const verificationCode = computed(() => {
  return code.value.join("");
});

const password = ref(null);
const confirmPassword = ref(null);

// Var to define the password input element
const showPass = ref(false);
const showPass2 = ref(false);

// Function to change the type of password input
const showPassword = () => {
  showPass.value = !showPass.value;
};

const showPassword2 = () => {
  showPass2.value = !showPass2.value;
};

const resetPassError = ref("");
const loading = ref(false);

watch(password, () => {
  resetPassError.value = "";
});

// Function to reset password
const resetPasswordFunc = async () => {
  if (password.value !== confirmPassword.value) {
    toast.error("Both passwords must be equal.");
    return;
  }

  try {
    loading.value = true;

    const data = await resetPassword({
      email: email,
      code: verificationCode.value,
      newPassword: password.value,
    });

    toast.success(data.message);
    router.push({ name: "login" });
  } catch (error) {
    const data = error?.response?.data;

    if (data?.errors && Object.keys(data?.errors).length > 0) {
      const filterError = Object.values(data?.errors)[0];

      if (filterError.path === "newPassword") {
        resetPassError.value = filterError.msg;
      }

      toast.error(filterError.msg);
    } else {
      return toast.error(data?.message || "Something went wrong.");
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss">
.imgSide {
  background-image: url(../assets/resetPasswordImage.png);
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
