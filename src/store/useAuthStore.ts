import { create } from "zustand";
import { AuthPersistType, AuthStoreType } from "@/types/auth";
import { persist } from "zustand/middleware";

const userInitialState = {
  id: "",
  first_name: "",
  last_name: "",
  birth_date: "",
  email: "",
};

export const useAuthStore = create<AuthStoreType>(
  (persist as AuthPersistType)(
    (set) => ({
      session: {
        token: "",
        signedIn: false,
      },
      user: userInitialState,
      setUser: (value) => set(() => ({ user: value })),
      onSignInSuccess: (value, user) =>
        set(() => ({
          user: user,
          session: {
            token: value,
            signedIn: true,
          },
        })),
      onSignOutSuccess: () =>
        set(() => ({
          user: userInitialState,
          session: {
            token: "",
            signedIn: false,
          },
        })),
      setToken: (value) =>
        set((state) => ({
          session: {
            token: value,
            signedIn: state.session.signedIn,
          },
        })),
    }),
    {
      name: "auth",
    }
  )
);

export default userInitialState;
