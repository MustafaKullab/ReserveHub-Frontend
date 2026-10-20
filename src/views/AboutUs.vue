<template>
  <div class="AboutUs min-vh-100" style="background-color: var(--main-background)">
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

            <li class="breadcrumb-item m-0 active text-muted" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>

      <div class="content">
        <div class="EasierBookings rounded p-3">
          <span style="font-size: 10px; letter-spacing: 5px">ABOUT RESERVEHUB </span>

          <div class="mainTitle my-2">
            <h1
              class="display-4 fw-bold m-0"
              style="color: var(--main-color); line-height: 1.1 !important"
            >
              Making Bookings <br />Easier for <span style="color: #045cf4">Everyone</span>
            </h1>
          </div>
          <div class="description my-2">
            <p class="m-0 text-muted">
              At ReserveHub, we believe that booking services should be<br />
              simple, fast, and stress-free. Our platform helps you find and <br />
              reserve the services you need, all in one place.
            </p>
          </div>
          <div class="explore mt-2">
            <router-link
              :to="{ name: 'services' }"
              class="text-decoration-none d-flex align-items-center gap-2 btn btn-primary"
              style="width: fit-content"
            >
              <div class="text">Explore Services</div>
              <div class="icon" style="margin-top: 1px"><i class="bi bi-arrow-right"></i></div>
            </router-link>
          </div>
        </div>

        <div class="boxes row align-items-center py-3">
          <div class="col-lg-4">
            <div class="box bg-white p-3 rounded d-flex align-items-center gap-3 mb-3 mb-lg-0">
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill border"
                style="
                  width: 60px;
                  height: 60px;
                  background-color: #e8f2fd;
                  color: #0f66f1;
                  border-color: #d3e6fd;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-lightning-charge fs-2"></i>
              </div>
              <div class="text">
                <div class="fw-bold">Easy booking</div>
                <p class="m-0 text-muted">
                  Find and book the services you need in just a few clicks.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="box bg-white p-3 rounded d-flex align-items-center gap-3 mb-3 mb-lg-0">
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill border"
                style="
                  width: 60px;
                  height: 60px;
                  background-color: #e8f2fd;
                  color: #0f66f1;
                  border-color: #d3e6fd;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-calendar fs-2"></i>
              </div>
              <div class="text">
                <div class="fw-bold">Flexible Scheduling</div>
                <p class="m-0 text-muted">Choose the date and time that works best for you.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="box bg-white p-3 rounded d-flex align-items-center gap-3 mb-3 mb-lg-0">
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill border"
                style="
                  width: 60px;
                  height: 60px;
                  background-color: #e8f2fd;
                  color: #0f66f1;
                  border-color: #d3e6fd;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-shield-check fs-2"></i>
              </div>
              <div class="text">
                <div class="fw-bold">Secure & Reliable</div>
                <p class="m-0 text-muted">
                  Your information is safe with us, and we work with trusted providers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="ourStory row align-items-center rounded my-3 mx-0"
          style="background-color: #fbfcfe"
        >
          <div class="col-lg-6 p-0">
            <div class="image">
              <img
                src="@/assets/AboutSecondSection.png"
                class="rounded"
                style="
                  height: 330px;
                  width: 100%;
                  background-size: cover;
                  background-position: center;
                  object-fit: cover;
                "
                alt="About img"
              />
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-start">
            <div class="p-2">
              <span style="font-size: 10px; letter-spacing: 5px; color: var(--main-color)">{{
                "our story".toUpperCase()
              }}</span>
              <div class="title my-2">
                <h1 class="fw-bold m-0">
                  Built for a Simpler,<br />
                  <span style="color: #045cf4">More Convenient Life</span>
                </h1>
              </div>
              <div class="paragraphs">
                <p class="text-muted">
                  ReserveHub was created with a simple idea: to make it easier for people to find
                  and book the services they need without the hassle.
                </p>
                <p class="text-muted">
                  We bring together trusted service providers and customers on one platform, saving
                  you time and effort. Whether you need a home service, an event booking, or any
                  other service, ReserveHub is here to make the process smooth and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="WhatDrivesUs row border rounded p-3 mx-0" style="background-color: #f9fbfd">
          <div class="col-lg-3 text-center text-lg-start mb-4 mb-lg-0">
            <div class="box">
              <span style="font-size: 10px; letter-spacing: 5px; color: var(--main-color)">{{
                "our values".toUpperCase()
              }}</span>
            </div>
            <h4 class="fw-bold m-0 my-2">What <span style="color: #045cf4">Drives Us</span></h4>

            <p class="text-muted small m-0">
              We are committed to providing a better booking experience for our users and service
              providers.
            </p>
          </div>
          <div class="col-lg-3 text-center text-lg-start mb-4 mb-lg-0">
            <div class="box">
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill mb-1 mx-auto mx-lg-0"
                style="width: 40px; height: 40px; background-color: #e9f3fe; color: #065dec"
              >
                <i class="bi bi-people"></i>
              </div>
              <div class="text">
                <h6 class="fw-bold m-0 mb-1">Customer First</h6>
                <p class="text-muted small">
                  Your convenience and satisfaction are our top priority.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-center text-lg-start mb-4 mb-lg-0">
            <div
              class="icon d-flex align-items-center justify-content-center rounded-pill mb-1 mx-auto mx-lg-0"
              style="width: 40px; height: 40px; background-color: #e9f3fe; color: #065dec"
            >
              <i class="bi bi-star-fill"></i>
            </div>
            <div class="text">
              <h6 class="fw-bold m-0 mb-1">Trust & Quality</h6>
              <p class="text-muted small">We work with trusted and verified service providers.</p>
            </div>
          </div>
          <div class="col-lg-3 text-center text-lg-start justify-content-center mb-4 mb-lg-0">
            <div
              class="icon d-flex align-items-center justify-content-center rounded-pill mb-1 mx-auto mx-lg-0"
              style="width: 40px; height: 40px; background-color: #e9f3fe; color: #065dec"
            >
              <i class="bi bi-graph-up-arrow"></i>
            </div>
            <div class="text">
              <h6 class="fw-bold m-0 mb-1">Continuous Improvement</h6>
              <p class="text-muted small">
                We are always looking for ways to<br />
                make your experience better.
              </p>
            </div>
          </div>
        </div>

        <div
          class="exploreServices p-3 d-flex align-items-center justify-content-between rounded my-3 text-light"
        >
          <div class="text">
            <span style="font-size: 10px; letter-spacing: 5px; color: var(--main-color)">{{
              "ready to get started?".toUpperCase()
            }}</span>

            <h4 class="fw-bold title m-0 my-1">Explore Our Services Today</h4>
            <p class="m-0">Find the perfect service for your needs and book it in minutes.</p>
          </div>
          <div class="button">
            <router-link
              :to="{ name: 'services' }"
              class="btn btn-primary d-flex align-items-center gap-2"
            >
              <div class="text">Browse Services</div>
              <div class="icon" style="margin-top: 1px"><i class="bi bi-arrow-right"></i></div>
            </router-link>
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  </div>
</template>

<script setup>
import FooterComp from "@/components/FooterComp.vue";
import TopBar from "@/components/TopBar.vue";
</script>

<style lang="scss" scoped>
.EasierBookings {
  background-image: url("@/assets/AboutMainSection.png");
  background-size: cover;
  background-position: right;

  @media (max-width: 767px) {
    background-image:
      linear-gradient(
        110deg,
        rgba(237, 246, 255, 0.726) 0%,
        rgba(213, 232, 255, 0.621) 50%,
        rgba(167, 207, 255, 0.74) 100%
      ),
      url("@/assets/AboutMainSection.png");

    .description {
      p {
        font-size: 13px !important;
      }
    }
  }
}

@media (max-width: 767px) {
  p {
    font-size: 13px !important;
  }
}

.exploreServices {
  background-image: url("@/assets/ExploreServices.png");
  background-size: cover;
  background-position: center;
}
</style>
