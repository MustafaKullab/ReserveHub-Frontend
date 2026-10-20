import { login, logout } from "@/services/authServices";
import { getMe } from "@/services/userServices";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    initialized: false,
    errors: null,
  }),
  getters: {
    isAuthenticated(state) {
      return state.user !== null;
    },

    isAdmin(state) {
      return state.user?.role === "admin";
    },
  },
  actions: {
    async loadCurrentUser() {
      try {
        this.loading = true;

        const data = await getMe();

        this.user = data.user;

        return data;
      } catch {
        this.user = null;
      } finally {
        this.loading = false;
        this.initialized = true;
      }
    },

    async loginUser(dataObj) {
      try {
        this.loading = true;
        this.errors = null;

        const data = await login(dataObj);

        await this.loadCurrentUser();

        return data;
      } catch (error) {
        this.errors = error.response?.data || {
          message: "Something went wrong. Please try again.",
        };
      } finally {
        this.loading = false;
      }
    },

    async logoutUser() {
      try {
        this.loading = true;

        const data = await logout();

        this.user = null;

        return data;
      } catch (error) {
        this.errors = error.response.data;
      } finally {
        this.loading = false;
      }
    },
  },
});
