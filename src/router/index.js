import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import("@/views/HomePage.vue"),
      meta: {
        title: "Home Page",
      },
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      component: () => import("@/views/AboutUs.vue"),
      meta: {
        title: "About Us",
      },
    },
    {
      path: "/privacyPolicy",
      name: "privacyPolicy",
      component: () => import("@/views/PrivacyPolicy.vue"),
      meta: {
        title: "Privacy Policy",
      },
    },
    {
      path: "/termsOfService",
      name: "termsOfService",
      component: () => import("@/views/TermsOfService.vue"),
      meta: {
        title: "Terms Of Service",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LogIn.vue"),
      meta: {
        title: "Login",
      },
    },
    {
      path: "/forgotPassword",
      name: "forgotPassword",
      component: () => import("@/views/forgotPassword.vue"),
      meta: {
        title: "Forgot Password",
      },
    },
    {
      path: "/resetPassword",
      name: "resetPassword",
      component: () => import("@/views/ResetPassword.vue"),
      meta: {
        title: "Reset Password",
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignUp.vue"),
      meta: {
        title: "Sign Up",
      },
    },
    {
      path: "/verify/:userId",
      name: "verify",
      component: () => import("@/views/VerifyPage.vue"),
      meta: {
        title: "Verify Account",
      },
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/ServicesPage.vue"),
      meta: {
        title: "Services",
      },
    },
    {
      path: "/BookingService/:serviceId",
      name: "BookingService",
      component: () => import("@/views/BookingService.vue"),
      meta: {
        title: "Booking Service",
      },
    },
    {
      path: "/BookingsPage",
      name: "BookingsPage",
      component: () => import("@/views/MyBookings.vue"),
      meta: {
        title: "My Bookings",
      },
    },
    {
      path: "/MyBooking/:bookingId",
      name: "MyBooking",
      component: () => import("@/views/MyBooking.vue"),
      meta: {
        title: "My Booking",
      },
    },
    {
      path: `/serviceDetails/:serviceId`,
      name: "serviceDetails",
      component: () => import("@/views/ServiceDetails.vue"),
      meta: {
        title: "Service Details",
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfilePage.vue"),
      meta: {
        title: "Profile",
        requiresAuth: true,
      },
    },

    {
      path: "/admin/dashboardPage",
      name: "dashboardPage",
      component: () => import("@/views/DashboardAdmin.vue"),
      meta: {
        title: "Dashboard Page",
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/admin/manageServices",
      name: "manageServices",
      component: () => import("@/views/ManageServices.vue"),
      meta: {
        title: "Manage Services",
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/admin/createService",
      name: "createService",
      component: () => import("@/views/CreateService.vue"),
      meta: {
        title: "Create Service",
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/admin/editService/:serviceId",
      name: "editService",
      component: () => import("@/views/EditService.vue"),
      meta: {
        title: "Edit Service",
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/admin/bookingsPage",
      name: "bookingsPage",
      component: () => import("@/views/BookingsAdmin.vue"),
      meta: {
        title: "Bookings Page",
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/admin/bookingDetails/:bookingId",
      name: "bookingDetails",
      component: () => import("@/views/BookingDetails.vue"),
      meta: {
        title: "Booking Details",
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/admin/manageUsers",
      name: "manageUsers",
      component: () => import("@/views/ManageUsers.vue"),
      meta: {
        title: "Manage Users",
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
  ],
});

router.beforeEach(async (to) => {
  document.title = to.meta.title;
  const authStore = useAuthStore();

  if (!authStore.initialized) {
    await authStore.loadCurrentUser();
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: "login" };
  }

  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    return { name: "homePage" };
  }

  return;
});

router.afterEach(() => {
  return window.scrollTo({ top: 0, behavior: "smooth" });
});
export default router;
