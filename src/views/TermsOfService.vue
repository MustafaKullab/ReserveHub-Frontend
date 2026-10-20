<template>
  <div class="TermsOfService" style="background-color: var(--main-background)">
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

            <li class="breadcrumb-item m-0 active text-muted" aria-current="page">
              Terms Of Service
            </li>
          </ol>
        </nav>
      </div>

      <div
        class="privacy-hero p-3 rounded-3 border d-flex flex-column flex-lg-row align-items-center justify-content-between my-3"
        style="background-color: #f6fbfe"
      >
        <div class="textSide mb-3 mb-md-0">
          <span style="font-size: 10px; letter-spacing: 5px; color: var(--main-color)">{{
            "TERMS OF SERVICE".toUpperCase()
          }}</span>
          <div class="title">
            <h1 class="main display-4 fw-bold" style="color: var(--main-color); line-height: 1">
              Let’s Keep Things Clear
              <br />
              <span style="color: #036ffa">and Fair</span>
            </h1>
            <p class="description text-muted m-0" style="width: 430px">
              These Terms of Service outline the rules and guidelines for using ReserveHub, so you
              know what to expect and what is expected when you create an account or make a booking.
            </p>
          </div>
        </div>
        <div class="imageSide">
          <img
            src="@/assets/termsOfService.png"
            style="width: 320px; max-width: 100%"
            alt="Terms of Service"
          />
        </div>
      </div>

      <div class="privacy-info-section my-3">
        <div class="row align-items-stretch g-3">
          <div class="col-lg-4 d-flex">
            <div
              class="privacy-card p-3 bg-white rounded d-flex gap-3 flex-fill flex-column flex-md-row align-items-center align-items-md-start"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 40px;
                  height: 40px;
                  background-color: #e4f2fe;
                  color: #0b5afa;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-person fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">01</div>
                <div class="title fw-bold" style="color: var(--main-color)">
                  Account Responsibility
                </div>
                <p class="desc m-0" style="color: #626875">
                  You are responsible for keeping your account information accurate and secure, and
                  for all activity that occurs under your account.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex">
            <div
              class="privacy-card p-3 bg-white rounded d-flex gap-3 flex-fill flex-column flex-md-row align-items-center align-items-md-start"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 40px;
                  height: 40px;
                  background-color: #e4f2fe;
                  color: #0b5afa;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-calendar3 fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">02</div>
                <div class="title fw-bold" style="color: var(--main-color)">Making a Booking</div>
                <p class="desc m-0" style="color: #626875">
                  Bookings can be made for active services during available dates and times. Each
                  appointment must be scheduled in the future and must not conflict with another
                  active booking.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex">
            <div
              class="privacy-card p-3 bg-white rounded d-flex gap-3 flex-fill flex-column flex-md-row align-items-center align-items-md-start"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 40px;
                  height: 40px;
                  background-color: #e4f2fe;
                  color: #0b5afa;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-shield fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">03</div>
                <div class="title fw-bold" style="color: var(--main-color)">
                  Cancellations and Booking Status
                </div>
                <p class="desc m-0" style="color: #626875">
                  Users can cancel pending or confirmed bookings. Administrators can confirm or
                  cancel bookings and mark confirmed bookings as completed once the appointment has
                  ended.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex">
            <div
              class="privacy-card p-3 bg-white rounded d-flex gap-3 flex-fill flex-column flex-md-row align-items-center align-items-md-start"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 40px;
                  height: 40px;
                  background-color: #e4f2fe;
                  color: #0b5afa;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-people fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">04</div>
                <div class="title fw-bold" style="color: var(--main-color)">User Conduct</div>
                <p class="desc m-0" style="color: #626875">
                  You agree to use ReserveHub in a lawful and respectful way and not to misuse the
                  platform or interfere with the experience of other users.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex">
            <div
              class="privacy-card p-3 bg-white rounded d-flex gap-3 flex-fill flex-column flex-md-row align-items-center align-items-md-start"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 40px;
                  height: 40px;
                  background-color: #e4f2fe;
                  color: #0b5afa;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-ban fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">05</div>
                <div class="title fw-bold" style="color: var(--main-color)">
                  Intellectual Property
                </div>
                <p class="desc m-0" style="color: #626875">
                  All content on ReserveHub, including logos, text, and design, is owned by
                  ReserveHub and may not be used without permission.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex">
            <div
              class="privacy-card p-3 bg-white rounded d-flex gap-3 flex-fill flex-column flex-md-row align-items-center align-items-md-start"
            >
              <div
                class="icon d-flex align-items-center justify-content-center rounded-pill"
                style="
                  width: 40px;
                  height: 40px;
                  background-color: #e4f2fe;
                  color: #0b5afa;
                  flex-shrink: 0;
                "
              >
                <i class="bi bi-file-earmark-text fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">06</div>
                <div class="title fw-bold" style="color: var(--main-color)">
                  Changes to These Terms
                </div>
                <p class="desc m-0" style="color: #626875">
                  We may update these Terms of Service from time to time. Any changes will be posted
                  on this page with an updated effective date.
                </p>
              </div>
            </div>
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

<style lang="scss">
@media (max-width: 767px) {
  p {
    font-size: 13px !important;
    width: 100% !important;
  }
}
</style>
