<template>
  <div class="SignUp min-vh-100" style="background-color: var(--main-background)">
    <div class="container min-vh-100 d-flex flex-column">
      <TopBar
        actionRoute="login"
        actionText="Log in"
        style="background-color: var(--main-background); box-shadow: none; border: none !important"
      />
      <div class="content row rounded-4 m-0 align-items-center my-2 flex-grow-1">
        <div class="formSide col-lg-5 bg-white rounded-4 p-3 py-lg-2">
          <div class="logo mb-2">
            <img :src="logo" class="img-fluid" style="width: 150px" alt="logo" />
          </div>
          <div class="createMsg my-3">
            <h1 style="color: var(--main-color)">Create your account</h1>
            <p class="" style="color: #768092">
              Join ReserveHub and start booking your next <br />
              experience.
            </p>
          </div>
          <form @submit.prevent="signupUser">
            <div class="input-group mb-2">
              <span
                class="input-group-text"
                style="
                  border-right: none;
                  border-top-left-radius: 10px;
                  border-bottom-left-radius: 10px;
                  background-color: #f1f2f7;
                "
                id="basic-addon3"
                ><i class="bi bi-person"></i
              ></span>
              <input
                type="text"
                id="username"
                class="form-control p-2"
                placeholder="Enter your full name"
                aria-label="email"
                aria-describedby="basic-addon3"
                style="
                  box-shadow: none;
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
                  background-color: #f1f2f7;
                "
                :class="{ 'is-invalid': signupError?.errors?.name }"
                v-model="user.name"
              />
            </div>
            <div class="input-group mb-2">
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
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
                  background-color: #f1f2f7;
                "
                :class="{ 'is-invalid': signupError?.errors?.email }"
                v-model="user.email"
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
                placeholder="Create a password"
                aria-label="password"
                aria-describedby="basic-addon2"
                style="
                  box-shadow: none;
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
                  background-color: #f1f2f7;
                "
                autocomplete="new-password"
                :class="{ 'is-invalid': signupError?.errors?.password }"
                v-model="user.password"
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
                :style="{ right: signupError?.errors?.password ? '35px' : '12px' }"
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
                placeholder="Confirm your password"
                aria-label="password"
                aria-describedby="basic-addon4"
                style="
                  box-shadow: none;
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
                  background-color: #f1f2f7;
                "
                autocomplete="new-password"
                v-model="user.confirmPassword"
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

            <div class="mb-2">
              <input type="file" style="display: none" ref="FileInp" />
              <div
                class="uploadFile d-flex justify-content-center gap-3 cursor-pointer"
                @click="chooseFile"
              >
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-pill"
                  style="width: 45px; height: 45px; background-color: #dee6f2; color: #113181"
                >
                  <i class="bi bi-upload"></i>
                </div>
                <div class="details">
                  <p class="m-0">Profile photo <span class="text-muted">(optional)</span></p>
                  <p class="text-muted small m-0">Upload a profile picture (JPG,PNG)</p>
                </div>
              </div>
            </div>

            <div class="createAccount">
              <button
                class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2 my-3"
                style="
                  background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                  color: white;
                "
                :disabled="loading"
              >
                <div class="text flex-grow-1">Create Account</div>
                <div class="icon"><i class="bi bi-arrow-up-right"></i></div>
              </button>
            </div>

            <div class="alreadyHaveAnAccount text-center m-0">
              Already have an account?
              <router-link class="text-decoration-none" :to="{ name: 'login' }">Log in</router-link>
            </div>
          </form>
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
import { ref, watch } from "vue";
import logo from "../assets/logo.png";
import { signup } from "@/services/authServices";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";
import TopBar from "@/components/TopBar.vue";

// Define router object
const router = useRouter();

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

const FileInp = ref(null);

// Function to open file input
const chooseFile = () => {
  FileInp.value.showPicker();
  console.log("Access");
};

const user = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const signupError = ref(null);

watch(
  () => user.value,
  () => {
    signupError.value = null;
  },
  { deep: true },
);

const avatar = ref(null);

// Define the loading
const loading = ref(false);

// Function to sign up user
const signupUser = async () => {
  if (user.value.password !== user.value.confirmPassword) {
    toast.error("Both passwords must be equal.");
    return;
  }

  const formData = new FormData();
  formData.append("name", user.value.name);
  formData.append("email", user.value.email);
  formData.append("password", user.value.password);

  avatar.value = FileInp.value.files[0];
  if (avatar.value) {
    formData.append("avatar", avatar.value);
  }

  try {
    loading.value = true;
    const data = await signup(formData);

    console.log(data);
    if (data.success) {
      toast.success("Account created successfully.");

      router.push({ name: "verify", params: { userId: data.userId } });
    }
  } catch (error) {
    const data = error?.response?.data;

    signupError.value = data;

    if (data?.errors && Object.keys(data?.errors).length > 0) {
      const filterErrors = Object.values(data?.errors).map((error) => error.msg);

      toast.error(filterErrors[0]);
    } else {
      toast.error(data?.message || "Sign up failed. Please try again.");
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}

.topBar {
  .logo {
    @media (max-width: 991px) {
      width: 120px;
    }
  }
}

.uploadFile {
  transition: 0.3s;
  border: 2px dashed transparent;
  padding: 6px;
  border-radius: 6px;

  &:hover {
    border-color: var(--main-color);
    animation: borderMove 0.6s linear infinite;
  }
}

@keyframes borderMove {
  0% {
    border-style: dashed;
  }

  50% {
    border-style: dotted;
  }

  100% {
    border-style: dashed;
  }
}

.imgSide {
  background-image: url("../assets/signupImage.png");
  background-size: cover;
  background-position: center;
  min-height: 545px;
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

form {
  input {
    transition: 0.3s;
    &:focus {
      border-color: #dee2e6 !important;
    }
    &.fieldError:focus {
      border-color: red !important;
    }
  }
}
</style>
