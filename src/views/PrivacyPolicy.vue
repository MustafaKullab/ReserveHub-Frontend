<template>
  <div class="PrivacyPolicy" style="background-color: var(--main-background)">
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
              Privacy Policy
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
            "Privacy Policy".toUpperCase()
          }}</span>
          <div class="title">
            <h1 class="main display-4 fw-bold" style="color: var(--main-color); line-height: 1">
              Your Privacy Matters <br />
              <span style="color: #036ffa">to Us</span>
            </h1>
            <p class="description text-muted m-0" style="width: 430px">
              Learn what information ReserveHub collects, how we use it to manage your account and
              bookings, and how we work to keep your data protected.
            </p>
          </div>
        </div>
        <div class="imageSide">
          <img
            src="@/assets/privacyPolicy.png"
            style="width: 430px; max-width: 100%"
            alt="Privacy Policy"
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
                  Information We Collect
                </div>
                <p class="desc m-0" style="color: #626875">
                  When you create an account or book a service, we collect information such as your
                  name, email address, profile photo, and booking details, including your selected
                  service and appointment time.
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
                <i class="bi bi-gear fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">02</div>
                <div class="title fw-bold" style="color: var(--main-color)">
                  How We Use Your Information
                </div>
                <p class="desc m-0" style="color: #626875">
                  We use your information to manage user accounts, verify email addresses, process
                  reservations, display booking details, and send account verification or
                  password-reset emails.
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
                <div class="title fw-bold" style="color: var(--main-color)">Data Security</div>
                <p class="desc m-0" style="color: #626875">
                  We use authentication and role-based access controls to help protect account and
                  booking information. However, no online system can guarantee absolute security.
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
                <i class="bi bi-share fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">04</div>
                <div class="title fw-bold" style="color: var(--main-color)">
                  Sharing Your Information
                </div>
                <p class="desc m-0" style="color: #626875">
                  Authorized administrators can access relevant account and booking information to
                  manage the platform. We also use an email delivery service to send verification
                  and password-reset messages.
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
                <i class="bi bi-database fs-4"></i>
              </div>
              <div class="details text-center text-md-start">
                <div class="number" style="color: #626875">05</div>
                <div class="title fw-bold" style="color: var(--main-color)">Your Rights</div>
                <p class="desc m-0" style="color: #626875">
                  You can update your name and profile photo through your account settings and
                  review your booking information. Account deletion is not currently available as a
                  self-service feature.
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
                  Changes to This Policy
                </div>
                <p class="desc m-0" style="color: #626875">
                  We may update this Privacy Policy as our platform evolves. Any changes will be
                  published on this page with an updated effective date.
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
.textSide {
  .description {
    @media (max-width: 767px) {
      font-size: 13px !important;
      width: 100% !important;
    }
  }
}
@media (max-width: 767px) {
  p {
    font-size: 13px !important;
    width: 100% !important;
  }
}
</style>
