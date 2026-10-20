<template>
  <div class="ProfilePage" style="background-color: var(--main-background)">
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

            <li class="breadcrumb-item m-0 active text-muted" aria-current="page">My Account</li>
          </ol>
        </nav>
      </div>

      <div class="content pb-3">
        <div
          class="MyAccount p-3 rounded-3 border shadow-sm d-flex align-items-center justify-content-between"
          style="background-color: #f5fafe"
        >
          <div class="title">
            <h4 class="header fw-bold m-0 mb-1" style="color: var(--main-color)">My Account</h4>
            <p class="text-muted m-0 small">
              Manage your profile information and keep your details up to date.
            </p>
          </div>
          <div class="image">
            <img src="@/assets/ProfilePageImg.png" style="width: 110px" alt="Profile Page Img" />
          </div>
        </div>

        <div class="profileDetails row my-3">
          <div class="col-md-4 col-lg-3">
            <div
              v-if="loading"
              class="detailsBox p-3 bg-white rounded-3 border text-center mb-3 mb-md-0"
              style="position: sticky; top: 85px !important"
            >
              <!-- Avatar -->
              <div class="d-flex justify-content-center">
                <div class="skeleton skeleton-circle"></div>
              </div>

              <!-- Name & Email -->
              <div class="my-2">
                <div class="skeleton skeleton-title mx-auto mb-2" style="width: 130px"></div>

                <div class="skeleton skeleton-text mx-auto" style="width: 180px"></div>
              </div>

              <!-- Account Status -->
              <div class="skeleton skeleton-button w-100 mb-3" style="height: 42px"></div>

              <!-- Buttons -->
              <div class="pb-2 border-bottom">
                <div class="skeleton skeleton-button w-100 mb-2"></div>

                <div class="skeleton skeleton-button w-100"></div>
              </div>

              <!-- Back Home -->
              <div class="pt-3">
                <div class="skeleton skeleton-button w-100"></div>
              </div>

              <!-- Logout -->
              <div class="pt-3">
                <div class="skeleton skeleton-button w-100"></div>
              </div>
            </div>
            <div
              class="detailsBox p-3 bg-white rounded-3 border text-center mb-3 mb-md-0"
              style="position: sticky; top: 85px !important"
              v-if="user && !loading"
            >
              <div class="image">
                <i class="bi bi-person fs-4" v-if="!user?.avatar"></i>
                <img
                  :src="previewUrl || `${apiUrlImage}${user?.avatar}`"
                  style="
                    width: 100px;
                    height: 100px;
                    border: 2px solid white;
                    outline: 2px solid #dae4f0;
                    object-fit: cover;
                  "
                  @error="handleWithImageError"
                  class="rounded-pill"
                  alt="avatar"
                  v-else
                />
              </div>
              <div class="nameAndEmail my-1">
                <p class="name fw-bold m-0" style="color: var(--main-color)">{{ user?.name }}</p>
                <span class="email text-muted m-0">{{ user?.email }}</span>
              </div>

              <div
                class="isAccountVerified d-flex align-items-center justify-content-center gap-2 rounded-3 p-2"
                :class="user?.isVerified ? 'verified' : 'notVerified'"
              >
                <div class="icon">
                  <i class="bi bi-check-circle-fill"></i>
                </div>
                <div class="isVerified">
                  {{ user?.isVerified ? "Verified Account" : "Not Verified Account" }}
                </div>
              </div>

              <div class="buttons pb-2 border-bottom">
                <router-link
                  :to="{ name: 'profile' }"
                  class="btn d-flex align-items-center justify-content-start gap-2 act mb-2"
                  style="color: #344861"
                >
                  <div class="icon">
                    <i class="bi bi-person-fill"></i>
                  </div>
                  <div class="text">Profile Information</div>
                </router-link>
                <router-link
                  :to="{ name: 'BookingsPage' }"
                  class="btn d-flex align-items-center justify-content-start gap-2"
                  style="color: #344861"
                >
                  <div class="icon">
                    <i class="bi bi-person-fill"></i>
                  </div>
                  <div class="text">My Bookings</div>
                </router-link>
              </div>

              <div class="backToHomeButton pt-3">
                <router-link
                  :to="{ name: 'homePage' }"
                  class="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
                >
                  <div class="icon">
                    <i class="bi bi-arrow-left"></i>
                  </div>
                  <div class="text">Back to Home</div>
                </router-link>
              </div>

              <div class="logoutButton pt-3">
                <button
                  class="btn btn-outline-danger d-flex align-items-center justify-content-center gap-2 w-100"
                  @click.prevent="logoutAccount"
                >
                  <div class="icon">
                    <i class="bi bi-box-arrow-right"></i>
                  </div>
                  <div class="text">logout</div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-9">
            <div v-if="loading" class="updateBox p-3 bg-white rounded-3 border mb-3">
              <!-- Header -->
              <div class="header d-flex align-items-center gap-3">
                <div class="skeleton skeleton-icon"></div>

                <div class="title flex-grow-1">
                  <div class="skeleton skeleton-title mb-2" style="width: 180px"></div>

                  <div class="skeleton skeleton-text" style="width: 280px; max-width: 100%"></div>
                </div>
              </div>

              <!-- Form -->
              <div class="mt-3">
                <!-- Full Name -->
                <div class="mb-3">
                  <div class="skeleton skeleton-text mb-2" style="width: 80px"></div>

                  <div class="d-flex">
                    <div
                      class="skeleton"
                      style="width: 42px; height: 38px; border-radius: 6px 0 0 6px"
                    ></div>

                    <div
                      class="skeleton flex-grow-1"
                      style="height: 38px; border-radius: 0 6px 6px 0; margin-left: 1px"
                    ></div>
                  </div>
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <div class="skeleton skeleton-text mb-2" style="width: 100px"></div>

                  <div class="d-flex">
                    <div
                      class="skeleton"
                      style="width: 42px; height: 38px; border-radius: 6px 0 0 6px"
                    ></div>

                    <div
                      class="skeleton flex-grow-1"
                      style="height: 38px; border-radius: 0 6px 6px 0; margin-left: 1px"
                    ></div>
                  </div>
                </div>

                <!-- Profile Picture -->
                <div>
                  <div class="skeleton skeleton-text mb-3" style="width: 110px"></div>

                  <div class="d-flex align-items-center gap-3">
                    <div class="skeleton skeleton-circle-sm"></div>

                    <div class="flex-grow-1">
                      <div class="skeleton skeleton-button mb-2" style="width: 170px"></div>

                      <div
                        class="skeleton skeleton-text"
                        style="width: 220px; max-width: 100%"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- Save Button -->
                <div class="mt-3 d-flex justify-content-end">
                  <div class="skeleton skeleton-button" style="width: 130px"></div>
                </div>
              </div>
            </div>
            <div class="updateBox p-3 bg-white rounded-3 border mb-3" v-if="user && !loading">
              <div class="header d-flex align-items-center gap-3">
                <div
                  class="icon rounded d-flex align-items-center justify-content-center border"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #f5f9fe;
                    color: #046bf2;
                    border-color: #aed2fd !important;
                  "
                >
                  <i class="bi bi-person-fill fs-4"></i>
                </div>
                <div class="title">
                  <h5 class="fw-bold m-0" style="color: var(--main-color)">Profile Information</h5>
                  <p class="text-muted m-0 small">Update your personal information and picture.</p>
                </div>
              </div>

              <form class="mt-3">
                <div class="fullName mb-3">
                  <label for="name" class="form-label m-0 mb-1" style="color: #283e59"
                    >Full Name</label
                  >
                  <div class="input-group">
                    <span class="input-group-text" id="fullName"><i class="bi bi-person"></i></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter new full name"
                      v-model="newName"
                      aria-label="fullName"
                      aria-describedby="fullName"
                      style="box-shadow: none"
                      id="name"
                    />
                  </div>
                </div>
                <div class="email mb-3">
                  <label for="email" class="form-label m-0 mb-1" style="color: #283e59"
                    >Email Address</label
                  >
                  <div class="input-group">
                    <span class="input-group-text" id="email"><i class="bi bi-envelope"></i></span>
                    <input
                      type="email"
                      id="email"
                      class="form-control text-muted"
                      :value="user?.email"
                      aria-label="email"
                      aria-describedby="email"
                      disabled
                      style="box-shadow: none; cursor: not-allowed"
                    />
                  </div>
                </div>

                <div class="profilePicture">
                  <label for="picture" class="form-label" style="color: #283e59"
                    >Profile Picture</label
                  >
                  <div class="d-flex align-items-center gap-3">
                    <div class="image">
                      <i class="bi bi-person fs-4" v-if="!previewUrl && !user?.avatar"></i>
                      <img
                        :src="previewUrl || `${apiUrlImage}${user?.avatar}`"
                        style="
                          width: 80px;
                          height: 80px;
                          border: 2px solid white;
                          outline: 2px solid #dae4f0;
                          object-fit: cover;
                        "
                        @error="handleWithImageError"
                        class="rounded-pill"
                        alt="avatar"
                        v-else
                      />
                    </div>
                    <div class="uploadImg">
                      <input
                        type="file"
                        style="display: none"
                        ref="uploadFile"
                        @change="handleImageChange"
                      />
                      <button
                        class="uploadImgButton btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 mb-1"
                        type="button"
                        @click.prevent="openFileToUpload"
                      >
                        <div class="icon"><i class="bi bi-upload"></i></div>
                        <div class="text">Upload New Photo</div>
                      </button>
                      <div class="small text-muted">JPG, PNG or WebP, Max size 2MB.</div>
                    </div>
                  </div>
                </div>

                <div class="updateButton mt-2 d-flex justify-content-end">
                  <div>
                    <button
                      class="uploadImgButton btn btn-primary d-flex align-items-center justify-content-center gap-2 mb-1"
                      @click.prevent="updateInfo"
                    >
                      <div class="icon"><i class="bi bi-floppy"></i></div>
                      <div class="text">Save Changes</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div v-if="loading" class="accountStatusBox p-3 bg-white rounded-3 border">
              <!-- Header -->
              <div class="header d-flex align-items-center gap-3">
                <div class="skeleton skeleton-icon"></div>

                <div class="title flex-grow-1">
                  <div class="skeleton skeleton-title mb-2" style="width: 130px"></div>

                  <div class="skeleton skeleton-text" style="width: 230px; max-width: 100%"></div>
                </div>
              </div>

              <!-- Status -->
              <div
                class="skeleton mt-3"
                style="height: 75px; width: 100%; border-radius: 10px"
              ></div>
            </div>
            <div class="accountStatusBox p-3 bg-white rounded-3 border" v-if="user && !loading">
              <div class="header d-flex align-items-center gap-3">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded border"
                  style="
                    width: 40px;
                    height: 40px;
                    width: 40px;
                    height: 40px;
                    background-color: #f5f9fe;
                    color: #046bf2;
                    border-color: #aed2fd !important;
                  "
                >
                  <i class="bi bi-shield-fill-check fs-4"></i>
                </div>
                <div class="title">
                  <h5 class="fw-bold m-0">Account Status</h5>
                  <div class="text-muted">Information about your account.</div>
                </div>
              </div>

              <div
                class="statusBox p-2 rounded-3 border mt-3"
                :class="user?.isVerified ? 'verified' : 'notVerified'"
              >
                <div class="d-flex align-items-center gap-3">
                  <div class="icon">
                    <i class="bi bi-check-circle-fill fs-3"></i>
                  </div>

                  <div class="text">
                    <div>
                      {{ user?.isVerified === true ? "Verified Account" : "Not Verified Account" }}
                    </div>
                    <div class="text-muted" style="color: #4f616e">
                      {{
                        user?.isVerified
                          ? "Your account has been verified. You can now book services."
                          : "Your account has not been verified yet."
                      }}
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
</template>

<script setup>
import TopBar from "@/components/TopBar.vue";
import router from "@/router";
import { logout } from "@/services/authServices";
import { getMe, updateMe } from "@/services/userServices";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Define URL of img
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

// Define obj to store the current user
const user = ref(null);

const loading = ref(true);

// Function to fetch current user
const fetchUser = async () => {
  try {
    const data = await getMe();

    user.value = data.user;

    newName.value = user.value?.name;
  } finally {
    loading.value = false;
  }
};

// Define var to store new name
const newName = ref(null);

// Ref to store the file element
const uploadFile = ref(null);

// Define var to store img
const selectedImage = ref("");

// Define preview image
const previewUrl = ref("");

// Handle with change photo to show
const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }

  selectedImage.value = file;
  previewUrl.value = URL.createObjectURL(file);
};

// function to open file element
const openFileToUpload = () => {
  uploadFile.value.showPicker();
};

// Function to update information
const updateInfo = async () => {
  try {
    const formData = new FormData();
    formData.append("name", newName.value);

    if (selectedImage.value) {
      formData.append("avatar", selectedImage.value);
    }

    const data = await updateMe(formData);

    if (data.success) {
      toast.success("Updated Successfully.");
      fetchUser();
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

// Function to handle with img error
const handleWithImageError = (event) => {
  event.target.onerror = null;
  event.target.src = previewUrl.value;
};

// Function to logout
const logoutAccount = async () => {
  const data = await logout();

  if (data.success) {
    toast.success("Logout Successfully.");
    location.reload();
    router.push({ name: "login" });
  }
};

onMounted(() => {
  fetchUser();
});
</script>

<style lang="scss" scoped>
.isAccountVerified {
  width: fit-content;
  margin: 10px auto;
  padding: 10px;
  &.verified {
    background-color: #f1fcf4;
    color: #08a547;
  }
  &.notVerified {
    background-color: #fef1f1;
    color: #fd383f;
  }
}

.buttons {
  margin: auto;
  > a {
    position: relative;
    transition: 0.3s;
    border-left: 2px solid transparent;
    &.act,
    &:hover {
      background-color: #e6f2fe !important;
      color: #016df9 !important;
      border-left-color: #016df9 !important;
    }
  }
}

.statusBox {
  &.verified {
    background-color: #edfbf2 !important;
    .icon,
    .text {
      color: #02a348;
    }
  }

  &.notVerified {
    background-color: #fff2f3 !important;
    .icon,
    .text {
      color: #fb4345;
    }
  }
}

.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #e9eef5;
  border-radius: 6px;
}

.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  100% {
    transform: translateX(100%);
  }
}

.skeleton-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.skeleton-circle-sm {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.skeleton-text {
  height: 14px;
  border-radius: 5px;
}

.skeleton-title {
  height: 18px;
  border-radius: 5px;
}

.skeleton-icon {
  width: 40px;
  height: 40px;
  border-radius: 6px;
}

.skeleton-button {
  height: 38px;
  border-radius: 6px;
}
</style>
