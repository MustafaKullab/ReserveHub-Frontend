<template>
  <div class="VerifyPage min-vh-100" style="background-color: var(--main-background)">
    <TopBar
      actionRoute="login"
      actionText="Log in"
      style="background-color: var(--main-background); box-shadow: none; border: none !important"
    />
    <div class="container min-vh-100 d-flex flex-column">
      <div class="content row align-items-center align-items-lg-stretch mx-0 my-2 flex-grow-1">
        <div class="col-lg-7 imgSide rounded-start-4 shadow-sm" style="min-height: 553px"></div>
        <div
          class="formSide col-lg-5 d-flex flex-column align-items-center justify-content-center py-4 py-lg-0 rounded-4 bg-white shadow-sm"
        >
          <div class="contentContainer">
            <div class="logo mb-3">
              <img :src="logo" alt="ReserveHub" class="img-fluid" style="width: 150px" />
            </div>
            <div class="title">
              <h1 style="color: var(--main-color)">Verify your account</h1>
              <p class="text-muted">
                We sent a 6-digit verification code to your email <br />address. Enter it below to
                activate your account.
              </p>
            </div>

            <form @submit.prevent="verifyAccountFunc">
              <div class="d-flex gap-2 my-2">
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

              <div class="verifyAccount">
                <button
                  class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2 my-3"
                  style="
                    background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                    color: white;
                  "
                  type="submit"
                  :disabled="loading"
                >
                  <div class="text flex-grow-1">Verify account</div>
                  <div class="icon"><i class="bi bi-arrow-up-right"></i></div>
                </button>
              </div>

              <div class="resendCode d-flex align-items-center gap-2 py-1">
                <div class="message" style="color: #1e2d4e">Didn't receive the code?</div>
                <div class="line" style="color: #ddd">|</div>
                <div class="resendBtn d-flex align-items-center gap-1">
                  <div
                    class="p-0"
                    @click.prevent="resendCode"
                    :style="{
                      color: counter > 0 ? 'black' : '#2182ff',
                      cursor: counter > 0 ? 'auto' : 'pointer',
                    }"
                  >
                    Resend code
                  </div>
                  <span v-if="counter > 0" style="color: #2182ff">in {{ counter }}</span>
                </div>
              </div>

              <div
                class="message d-flex justify-content-center align-items-center gap-2 pt-3 mt-3 border-top"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="width: 45px; height: 45px; background-color: #e5eef8; color: #36508d"
                >
                  <i class="bi bi-shield-check fs-5"></i>
                </div>
                <div class="msg" style="color: #9e9cab">
                  Your account will be activated after <br />
                  successful verification.
                </div>
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
import TopBar from "@/components/TopBar.vue";
import logo from "@/assets/logo.png";
import { computed, ref, watch } from "vue";
import { resendVerification, verifyAccount } from "@/services/authServices";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useAuthStore } from "@/stores/authStore";

// Define route object
const route = useRoute();

// Define router object
const router = useRouter();

// Define auth store
const authStore = useAuthStore();

const userId = route.params.userId;

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

watch(verificationCode, async (newVal) => {
  if (newVal.length == 6) {
    await verifyAccountFunc();
  }
});

const loading = ref(false);

// function to verify the account
const verifyAccountFunc = async () => {
  try {
    loading.value = true;
    const data = await verifyAccount({
      userId,
      code: verificationCode.value,
    });

    if (data.success) {
      toast.success("Account verified successfully.");

      await authStore.loadCurrentUser();

      router.push({ name: "services" });
    }

    console.log(data);
  } catch (error) {
    const data = error?.response?.data;

    if (data?.errors && Object.keys(data?.errors).length > 0) {
      const firstError = Object.values(data?.errors)[0];
      toast.error(firstError.msg);
    } else {
      toast.error(data?.message || "Verification failed. Please try again.");
    }
  } finally {
    loading.value = false;
  }
};

const counter = ref(0);
const colDown = ref(null);

const startColDown = async () => {
  counter.value = 60;
  colDown.value = setInterval(() => {
    if (counter.value > 0) {
      counter.value--;
    } else {
      clearInterval(colDown.value);
      colDown.value = null;
    }
  }, 1000);
};

// Function to resend code
const resendCode = async () => {
  if (counter.value > 0) return;
  try {
    const data = await resendVerification({ userId });

    console.log(data);

    toast.success(data.message);
    startColDown();
  } catch (error) {
    const data = error?.response?.data;

    toast.error(data?.message || "Failed to resend verification code.");
  }
};
</script>

<style lang="scss" scoped>
.imgSide {
  background-image: url("../assets/verifyImage.png");
  background-size: cover;
  background-position: center;
  min-height: 569px;
  @media (max-width: 991px) {
    & {
      display: none;
    }
  }
}

.formSide {
  @media (min-width: 992px) {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
}
</style>
