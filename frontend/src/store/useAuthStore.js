import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningIn: false,
  isLoggingIng: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
}));
