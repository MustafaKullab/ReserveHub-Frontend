<template>
  <div class="CreateService" style="background-color: var(--main-background)">
    <TopBar />
    <div class="main d-flex">
      <SideBar />

      <div class="content p-3 flex-grow-1">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb">
            <li class="breadcrumb-item m-0">
              <router-link
                class="text-decoration-none"
                :to="{ name: 'homePage' }"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item m-0">
              <router-link
                class="text-decoration-none"
                :to="{ name: 'dashboardPage' }"
                >Admin</router-link
              >
            </li>
            <li class="breadcrumb-item m-0">
              <router-link
                class="text-decoration-none"
                :to="{ name: 'manageServices' }"
                >Manage Services</router-link
              >
            </li>
            <li
              class="breadcrumb-item m-0 active text-muted"
              aria-current="page"
            >
              Edit Service
            </li>
          </ol>
        </nav>

        <div
          class="header p-3 rounded-3 d-flex align-items-center justify-content-between"
          style="background-color: #f8fbfe"
        >
          <div class="title">
            <h4 class="fw-bold m-0 mb-1" style="color: var(--main-color)">
              Edit Service
            </h4>
            <p class="small text-muted m-0">
              Update the service details, availability, and status. Your changes
              will be saved and reflected in future bookings.
            </p>
          </div>
          <div class="image">
            <img
              src="@/assets/editService.png"
              style="width: 100px"
              alt="Manage services"
            />
          </div>
        </div>

        <div class="row pt-3">
          <div class="col-lg-7">
            <div
              class="basicInformation p-3 rounded border mb-3"
              style="background-color: #f8fbfe"
            >
              <div class="header d-flex gap-2 mb-3">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #daedfd;
                    color: #0765fc;
                    flex-shrink: 0;
                    margin-top: 4px;
                  "
                >
                  <i class="bi bi-file-earmark-medical fs-4"></i>
                </div>
                <div class="title">
                  <div class="fw-bold">Basic Information</div>
                  <div class="small text-muted">
                    Add the main details for the service.
                  </div>
                </div>
              </div>

              <form>
                <div class="serviceName mb-3">
                  <label for="name" class="form-label mb-2">Service Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="e.g. Relaxing Massage"
                    v-model="serviceName"
                    style="box-shadow: none"
                  />
                </div>
                <div class="description mb-3">
                  <label for="description" class="form-label mb-1"
                    >Description</label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="Describe the service, what it includes, and any important details..."
                    v-model="serviceDescription"
                    style="height: 80px; box-shadow: none; resize: none"
                  />
                </div>

                <div
                  class="priceAndDuration d-flex align-items-center justify-content-between gap-3"
                >
                  <div class="price w-100">
                    <label for="price" class="form-label">Price (USD)</label>
                    <div class="input-group">
                      <span class="input-group-text" id="price">$</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="e.g.60"
                        aria-label="price"
                        aria-describedby="price"
                        v-model.number="servicePrice"
                        style="box-shadow: none"
                      />
                    </div>
                    <span class="small text-muted"
                      >Set the service price in US dollars.</span
                    >
                  </div>
                  <div class="duration w-100">
                    <label for="duration" class="form-label"
                      >Duration (Minutes)</label
                    >
                    <div class="input-group">
                      <span class="input-group-text" id="duration"
                        ><i class="bi bi-clock"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="e.g.60"
                        v-model.number="serviceDuration"
                        aria-label="duration"
                        aria-describedby="duration"
                        style="box-shadow: none"
                      />
                    </div>
                    <span class="small text-muted"
                      >Minimum duration is 20 minutes.</span
                    >
                  </div>
                </div>
              </form>
            </div>

            <div
              class="availability p-3 rounded border"
              style="background-color: #f8fbfe"
            >
              <div class="header d-flex gap-2 mb-3">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #daedfd;
                    color: #0765fc;
                    flex-shrink: 0;
                    margin-top: 4px;
                  "
                >
                  <i class="bi bi-calendar2-check fs-4"></i>
                </div>
                <div class="title">
                  <div class="fw-bold">Availability</div>
                  <div class="small text-muted">
                    Set the days and time slots when this service is available
                    for booking.
                  </div>
                </div>
              </div>

              <form>
                <div
                  class="availabilityTimes p-3 rounded border"
                  style="background-color: #fdfdfe"
                >
                  <div
                    class="form-check py-1 my-1 border-bottom d-flex flex-column flex-xxl-row align-items-start"
                    v-for="(day, i) of Days"
                    :key="i"
                  >
                    <div
                      class="checkbox mx-auto mx-xxl-start"
                      style="width: 13%"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="selectedDays"
                        :value="day.value"
                        :id="i"
                        @change.prevent="handleDayChange(day.value)"
                        style="box-shadow: none; width: 20px; height: 20px"
                      />
                      <label
                        class="form-check-label"
                        style="margin-top: 1px"
                        :for="i"
                      >
                        {{ day.label }}
                      </label>
                    </div>
                    <div
                      class="timeSlots mx-auto mx-xxl-start my-3 my-xxl-0"
                      v-if="selectedDays.includes(day.value)"
                      style="width: 65%"
                    >
                      <div
                        class="slot d-flex gap-2 mb-2"
                        v-for="(slot, i) of getDaySlots(day.value)"
                        :key="i"
                      >
                        <div class="slotTimes d-flex align-items-center gap-1">
                          <wa-time-input v-model="slot.from"></wa-time-input>
                          <div class="mt-2 m-0">-</div>
                          <wa-time-input v-model="slot.to"></wa-time-input>
                        </div>

                        <div
                          class="deleteBtn"
                          @click.prevent="deleteSlot(slot)"
                        >
                          <button class="btn btn-outline-danger">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="addTimeSlot mx-auto mx-xxl-start"
                      v-if="selectedDays.includes(day.value)"
                      style="width: 22%"
                    >
                      <button
                        class="btn btn-outline-primary btn-sm px-3 d-flex align-items-center gap-2"
                        @click.prevent="addTimeSlot(day.value)"
                      >
                        <div class="icon"><i class="bi bi-plus-lg"></i></div>
                        <div class="text">Add Time Slot</div>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-5">
            <div
              class="serviceImage p-3 rounded border"
              style="background-color: #f8fbfe"
            >
              <div class="header d-flex gap-2 mb-3">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #daedfd;
                    color: #0765fc;
                    flex-shrink: 0;
                    margin-top: 4px;
                  "
                >
                  <i class="bi bi-file-earmark-medical fs-4"></i>
                </div>
                <div class="title">
                  <div class="fw-bold" style="color: var(--main-color)">
                    Service Image
                  </div>
                  <div class="small text-muted">
                    Upload a high-quality image for the service.
                  </div>
                </div>
              </div>
              <input
                type="file"
                style="display: none"
                ref="uploadImageElement"
                @change="handleImageChange"
              />
              <div class="row">
                <div class="col-xl-6">
                  <div
                    class="uploadImageArea p-2 py-3 rounded-3 mb-3 mb-xl-0"
                    @click="handleWithUploadImageBox"
                    style="border: 2px dashed #93a2b6; cursor: pointer"
                  >
                    <div class="icon text-center">
                      <i
                        class="bi bi-cloud-arrow-up fs-3"
                        style="color: #0b75fc"
                      ></i>
                    </div>
                    <div class="describe text-center">
                      <div class="fw-bold">Click to upload an image</div>
                      <div class="small" style="color: #7c89a2">
                        or drag and drop <br />
                        PNG, JPG, or WebP (Max 2MB)<br />
                        Recommended size: 1200 x 800
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="image mb-2">
                    <img
                      :src="
                        previewUrl ||
                        (service.image
                          ? `${apiUrlImage}${service.image}`
                          : defaultImage)
                      "
                      class="rounded border"
                      style="height: 111px; width: 100%"
                      :style="{
                        'object-fit': previewUrl !== null ? 'cover' : 'contain',
                      }"
                      alt=""
                    />
                  </div>
                  <div class="changeImage text-center w-100">
                    <button
                      class="btn d-flex align-items-center justify-content-center gap-2 w-100"
                      @click.prevent="removeImage"
                    >
                      <div class="icon"><i class="bi bi-trash"></i></div>
                      <div class="text">Remove Image</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="serviceStatus p-3 rounded my-3 border"
              style="background-color: #f8fbfe"
            >
              <div class="header d-flex align-items-center gap-2 mb-3">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #daedfd;
                    color: #0765fc;
                    flex-shrink: 0;
                    margin-top: 4px;
                  "
                >
                  <i class="bi bi-shield-lock fs-4"></i>
                </div>
                <div class="title">
                  <div class="fw-bold" style="color: var(--main-color)">
                    Service Status
                  </div>
                </div>
              </div>

              <div class="activate d-flex gap-2">
                <div class="wrap">
                  <input type="checkbox" id="s1" checked v-model="isActive" />
                  <label class="slider-v1" for="s1"></label>
                </div>

                <div class="text">
                  <div class="fw-bold" style="color: var(--main-color)">
                    {{ isActive ? "Active" : "Not Active" }}
                  </div>
                  <p class="small text-muted m-0">
                    {{
                      isActive
                        ? "This service will be available for booking"
                        : "This service will be not available for booking"
                    }}
                  </p>
                </div>
              </div>
            </div>
            <div class="tips p-3 rounded" style="background-color: #f8fbfe">
              <div class="header d-flex gap-2 mb-3">
                <div
                  class="icon d-flex align-items-center justify-content-center rounded"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #daedfd;
                    color: #0765fc;
                    flex-shrink: 0;
                  "
                >
                  <i class="bi bi-lightbulb fs-4"></i>
                </div>
                <div class="title">
                  <div class="fw-bold" style="color: var(--main-color)">
                    Tips for a Great Service
                  </div>
                </div>
              </div>

              <div
                class="tipsMenue p-2 rounded"
                style="background-color: #e1f0ff"
              >
                <div class="tip d-flex align-items-center gap-2 mb-3">
                  <div class="icon" style="color: #005dfe">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <div class="content" style="color: #5f6e95 !important">
                    Use a clear and des criptive name.
                  </div>
                </div>
                <div class="tip d-flex align-items-center gap-2 mb-3">
                  <div class="icon" style="color: #005dfe">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <div class="content" style="color: #5f6e95 !important">
                    Write a detailed description of what the service includes.
                  </div>
                </div>
                <div class="tip d-flex align-items-center gap-2 mb-3">
                  <div class="icon" style="color: #005dfe">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <div class="content" style="color: #5f6e95 !important">
                    Upload a high-quali ty image.
                  </div>
                </div>
                <div class="tip d-flex align-items-center gap-2 mb-3">
                  <div class="icon" style="color: #005dfe">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <div class="content" style="color: #5f6e95 !important">
                    Set a responsable p rice and duration.
                  </div>
                </div>
                <div class="tip d-flex align-items-center gap-2">
                  <div class="icon" style="color: #005dfe">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <div class="content" style="color: #5f6e95 !important">
                    Add accurate availability to avoid booking issues.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="createOrCancle p-2 bg-white rounded mt-3 d-flex align-items-center justify-content-between border"
        >
          <div class="cancleBtn">
            <button
              class="btn btn-outline-secondary px-3 d-flex align-items-center gap-2"
              @click="cancleService"
            >
              <div class="icon"><i class="bi bi-arrow-left"></i></div>
              <div class="text">Cancel</div>
            </button>
          </div>
          <div class="createBtn">
            <button
              class="btn btn-primary px-3 d-flex align-items-center gap-2"
              :disabled="loading"
              @click.prevent="handleUpdateService"
            >
              <div class="icon" style="margin-top: 1px">
                <i class="bi bi-check-lg"></i>
              </div>
              <div class="text">Save Changes</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
import { onMounted, ref } from "vue";
import { getService, updateService } from "@/services/servicesService";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRoute, useRouter } from "vue-router";

// Define router obj
const router = useRouter();

// Define route obj
const route = useRoute();

// Define url for image
const apiUrlImage = import.meta.env.VITE_API_URL_IMAGE;

// Define var to sore service
const service = ref({});

// Get Service id
const serviceId = route.params.serviceId;

// Define the default image
import defaultImage from "@/assets/defaultImage.png";

const serviceName = ref("");
const serviceDescription = ref("");
const servicePrice = ref(null);
const serviceDuration = ref(null);
const isActive = ref(false);

const selectedImage = ref(null);
const previewUrl = ref(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }

  selectedImage.value = file;
  previewUrl.value = URL.createObjectURL(file);
};

// Define upload element
const uploadImageElement = ref(null);

// function to open upload file
const handleWithUploadImageBox = () => {
  uploadImageElement.value.showPicker();
};

const removeImage = () => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }

  selectedImage.value = null;
  previewUrl.value = null;

  if (uploadImageElement.value) {
    uploadImageElement.value.value = "";
  }
};

const Days = ref([
  { label: "Sunday", value: "Sun" },
  { label: "Monday", value: "Mon" },
  { label: "Tuesday", value: "Tue" },
  { label: "Wednesday", value: "Wed" },
  { label: "Thursday", value: "Thu" },
  { label: "Friday", value: "Fri" },
  { label: "Saturday", value: "Sat" },
]);
const selectedDays = ref([]);

const availability = ref([]);

const addTimeSlot = (day) => {
  const timeObj = {};
  timeObj.day = day;
  timeObj.from = "09:00";
  timeObj.to = "17:00";

  availability.value.push(timeObj);
};

const getDaySlots = (day) => {
  const resultDaySlots = availability.value.filter(
    (available) => available.day === day
  );

  return resultDaySlots;
};

const handleDayChange = (day) => {
  if (selectedDays.value.includes(day)) return;
  availability.value = availability.value.filter(
    (available) => available.day !== day
  );
};

const deleteSlot = (slot) => {
  availability.value = availability.value.filter(
    (available) => available !== slot
  );
};

const loading = ref(false);

// Function to handle with create service
const handleUpdateService = async () => {
  let hasChanges = false;
  if (
    service.value.name !== serviceName.value ||
    service.value.description !== serviceDescription.value ||
    service.value.price !== servicePrice.value ||
    service.value.durationMinutes !== serviceDuration.value ||
    service.value.isActive !== isActive.value ||
    JSON.stringify(
      service.value.availability.map((slot) => ({
        day: slot.day,
        from: slot.from,
        to: slot.to,
      }))
    ) !== JSON.stringify(availability.value) ||
    selectedImage.value !== null
  ) {
    hasChanges = true;
  }

  if (!hasChanges) {
    toast.info("No changes detected. Please modify at least one field.");
    return;
  }

  const formData = new FormData();

  formData.append("name", serviceName.value);
  formData.append("description", serviceDescription.value);
  formData.append("price", servicePrice.value);
  formData.append("durationMinutes", serviceDuration.value);
  formData.append("isActive", isActive.value);
  formData.append("availability", JSON.stringify(availability.value));

  if (selectedImage.value !== null) {
    formData.append("image", selectedImage.value);
  }

  try {
    loading.value = true;
    const data = await updateService(serviceId, formData);

    toast.success("Service Updated Successfully.");

    router.push({ name: "manageServices" });
  } catch (error) {
    const errors = error?.response?.data?.errors;

    const message =
      Object.values(errors ?? {})[0]?.msg ||
      error?.response?.data?.message ||
      "Failed to update service. Please try again.";

    toast.error(message);
  } finally {
    loading.value = false;
  }
};

const cancleService = () => {
  serviceName.value = "";
  serviceDescription.value = "";
  servicePrice.value = null;
  serviceDuration.value = null;
  isActive.value = false;
  availability.value = [];
  selectedDays.value = [];
  removeImage();

  router.push({ name: "manageServices" });
};

onMounted(async () => {
  const data = await getService(serviceId);

  service.value = data.service;

  console.log(service.value);

  serviceName.value = service.value.name;
  serviceDescription.value = service.value.description;
  servicePrice.value = service.value.price;
  serviceDuration.value = service.value.durationMinutes;
  isActive.value = service.value.isActive;
  availability.value = service.value.availability.map((slot) => ({
    day: slot.day,
    from: slot.from,
    to: slot.to,
  }));

  selectedDays.value = [...new Set(availability.value.map((slot) => slot.day))];
});
</script>

<style lang="scss" scoped>
.uploadImageArea {
  transition: 0.3s;
  &:hover {
    border-color: #0078fc !important;
    animation: upload 0.8s infinite;
  }
}

.changeImage {
  button {
    background-color: #eff4f8;
    border: 1px solid #d9e2ed;
    color: #213163;
    transition: 0.3s;
    &:hover {
      background-color: #e2eaf1;
    }
    &:focus {
      border: 1px solid #d9e2ed;
    }
  }
}

.wrap {
  display: inline-block;
}

.wrap input {
  display: none;
}

.slider-v1 {
  position: relative;
  display: block;
  width: 55px;
  height: 30px;
  cursor: pointer;
  border-radius: 50px;
  background: #0878f9;
  transition: background 250ms ease;
}

/* الدائرة البيضاء */
.slider-v1::before {
  content: "";
  position: absolute;
  width: 23px;
  height: 23px;
  top: 3.5px;
  left: 4px;
  border-radius: 50%;
  background: #fff;
  transition: left 250ms ease;
}

/* حالة التشغيل ON */
.wrap input:checked + .slider-v1 {
  background: #0878f9;
}

.wrap input:checked + .slider-v1::before {
  left: 28px;
}

/* حالة الإيقاف OFF */
.wrap input:not(:checked) + .slider-v1 {
  background: #d5d5d5;
}

.wrap input:not(:checked) + .slider-v1::before {
  left: 4px;
}

input[type="time"] {
  background-color: #fdfeff !important;
}

.availabilityTimes {
  div:last-child {
    border-bottom: none !important;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }
}

.mx-xxl-start {
  @media (min-width: 1400px) {
    margin-left: 0 !important;
    margin-right: auto !important;
  }
}
.form-check {
  @media (max-width: 1399px) {
    .checkbox {
      text-align: center !important;
    }

    .timeSlots {
      width: 100% !important;
      .slot {
        // border-top: 1px solid #ccc !important;
        border-bottom: 1px solid #ccc !important;
        padding: 8px 0 !important;

        width: 100% !important;
        flex-direction: column;

        .slotTimes {
          flex-direction: column;
        }

        .deleteBtn {
          text-align: center;
          justify-content: center;
        }
      }
    }
    .addTimeSlot {
      width: fit-content !important;
    }
  }
}

@keyframes upload {
  0% {
    border-style: dotted;
  }
  50% {
    border-style: dashed;
  }
  100% {
    border-style: dotted;
  }
}
</style>
