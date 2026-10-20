<template>
  <div
    class="SideBar border-end p-3"
    style="
      min-width: 250px;
      background-color: #f2f9ff;
      box-shadow: rgba(0, 0, 0, 0.075) 1px 0px 0.25rem;
    "
  >
    <div class="header small" style="color: #415a82">ADMIN PANEL</div>

    <div class="links my-3 pb-3 border-bottom">
      <router-link
        class="text-decoration-none d-flex align-items-center gap-2 rounded mb-2"
        :to="{ name: 'dashboardPage' }"
        ><div class="icon"><i class="bi bi-grid"></i></div>
        <div class="text">Dashboard</div></router-link
      >
      <router-link
        class="text-decoration-none d-flex align-items-center gap-2 rounded mb-2"
        :to="{ name: 'manageServices' }"
        ><div class="icon"><i class="bi bi-suitcase-lg"></i></div>
        <div class="text">Manage Services</div></router-link
      >
      <router-link
        class="text-decoration-none d-flex align-items-center gap-2 rounded mb-2"
        :to="{ name: 'bookingsPage' }"
        ><div class="icon"><i class="bi bi-calendar-range"></i></div>
        <div class="text">Manage Bookings</div></router-link
      >
      <router-link
        class="text-decoration-none d-flex align-items-center gap-2 rounded"
        :to="{ name: 'manageUsers' }"
        ><div class="icon"><i class="bi bi-people"></i></div>
        <div class="text">Manage Users</div></router-link
      >
    </div>

    <div class="backToHome">
      <router-link
        class="text-decoration-none d-flex align-items-center gap-2 rounded mb-2"
        :to="{ name: 'homePage' }"
        ><div class="icon"><i class="bi bi-house"></i></div>
        <div class="text">Back To Website</div></router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.SideBar {
  position: sticky;
  top: 73px; // ارتفاع الـ TopBar بالظبط
  align-self: flex-start;
  height: calc(100vh - 73px);
  @media (max-width: 767px) {
    .header {
      display: none;
    }
    min-width: 65px !important;
    padding: 10px !important;
  }
  a {
    padding: 10px;
    color: #000449;
    transition: 0.3s;
    border-left: 2px solid transparent;

    @media (max-width: 767px) {
      & {
        width: 40px !important;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .text {
        display: none;
      }
    }

    &.router-link-active,
    &:hover {
      background-color: #d5ecfd;
      color: #0176f9;
      border-left: 2px solid #0a61fd;
    }
  }
}
</style>
