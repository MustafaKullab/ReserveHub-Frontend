<template>
  <div class="ServicesPage" style="background-color: var(--main-background)">
    <TopBar actionRoute="login" actionText="Log in" />
    <div class="container">
      <div class="content">
        <div
          class="heroSection p-4 my-3 rounded-4 d-flex flex-column justify-content-center align-items-center align-items-md-start text-light"
          style="min-height: 400px"
        >
          <h1 class="display-4">Explore Our Services</h1>
          <p class="fs-5 text-center text-md-start">
            Premium experiences and services, all in one place. <br />
            Relax, enjoy, and let us take care of the rest.
          </p>
        </div>

        <div class="Filter p-3 my-3 rounded-4" style="background-color: #f4f9fd">
          <form
            class="d-flex flex-column flex-md-row align-items-center gap-3"
            @submit.prevent="searchServices"
          >
            <div class="input-group">
              <span class="input-group-text" id="search"><i class="bi bi-search"></i></span>
              <input
                type="text"
                class="form-control rounded-end-4"
                placeholder="Search for a service.."
                aria-label="search"
                aria-describedby="search"
                style="box-shadow: none"
                v-model="queries.search"
              />
            </div>

            <div class="availability" style="width: 330px">
              <select
                class="form-select"
                aria-label="Availability"
                style="box-shadow: none"
                v-model="queries.day"
              >
                <option disabled selected>Available day</option>
                <option value="">All Days</option>
                <option :value="day" v-for="day of days" :key="day">{{ day }}</option>
              </select>
            </div>
            <div class="duration" style="width: 280px">
              <select
                class="form-select"
                aria-label="duration"
                style="box-shadow: none"
                v-model="queries.duration"
              >
                <option disabled selected>Duration</option>
                <option value="">All durations</option>
                <option value="under60">60 min or less</option>
                <option value="above60">More than 60 min</option>
              </select>
            </div>

            <div class="sortBy" style="width: 280px">
              <select
                class="form-select"
                aria-label="sort"
                style="box-shadow: none"
                v-model="queries.sort"
              >
                <option disabled selected>Sort by</option>
                <option value="">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>

            <div class="searchButton" style="width: 400px">
              <button
                class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2"
                style="
                  background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                  color: white;
                "
                type="submit"
              >
                <div class="text flex-grow-1 ms-1">Search</div>
                <div class="icon me-1"><i class="bi bi-arrow-right"></i></div>
              </button>
            </div>
          </form>
        </div>

        <ServicesComp :services="services" :loading="loading" />

        <div
          class="customExperience d-flex flex-column flex-md-row align-items-center justify-content-between my-3 p-3 rounded"
        >
          <div class="describe text-center text-md-start" style="color: #032162">
            <h3>Looking for something special?</h3>
            <p class="m-0">Contact us to create a custom experienc tailored to your needs.</p>
          </div>

          <div class="link" style="width: 180px">
            <router-link
              class="btn rounded-pill w-100 d-flex align-items-center justify-content-center p-2 my-3"
              style="
                background-image: linear-gradient(to right, #182363, #0d4cb5, #0962f0);
                color: white;
              "
              type="submit"
            >
              <div class="text flex-grow-1 ms-1">Get in touch</div>
              <div class="icon me-1"><i class="bi bi-arrow-right"></i></div>
            </router-link>
          </div>
        </div>
        <FooterComp />
      </div>
    </div>
  </div>
</template>

<script setup>
import ServicesComp from "@/components/ServicesComp.vue";
import TopBar from "@/components/TopBar.vue";
import { onMounted, ref } from "vue";
import FooterComp from "@/components/FooterComp.vue";
import { getServices } from "@/services/servicesService";

const days = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

const queries = ref({
  isActive: true,
  search: "",
  day: "",
  duration: "",
  sort: "",
  limit: 8,
});

const services = ref([]);
const loading = ref(false);

// Function to get services
const searchServices = async () => {
  try {
    loading.value = true;
    const data = await getServices(queries.value);

    services.value = data.services;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  const data = await getServices(queries.value);
  services.value = data.services;
});
</script>

<style lang="scss" scoped>
.heroSection {
  background-image: url(../assets/heroImage.png);
  background-size: cover;
}

.customExperience {
  background:
    linear-gradient(
      to right,
      rgba(235, 244, 255, 0.82) 0%,
      rgba(235, 244, 255, 0.45) 38%,
      rgba(235, 244, 255, 0) 65%
    ),
    url("../assets/customExperience.png");

  background-size: cover;
  background-position: center;
}

.Filter {
  form {
    > div {
      @media (max-width: 768px) {
        width: 100% !important;
      }
    }
  }
}
</style>
