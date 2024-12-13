import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

export interface User {
  id: string | number;
  first_name: string;
  last_name: string;
  birth_date: string;
  email: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  email: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  password: string;
}

export type AuthStoreType = {
  session: {
    token: string;
    signedIn: boolean;
  };
  user: User;
  setUser: (value: User) => void;
  onSignInSuccess: (value: string, user: User) => void;
  onSignOutSuccess: () => void;
  setToken: (value: string) => void;
};

export type AuthPersistType = (
  config: StateCreator<AuthStoreType>,
  options: PersistOptions<AuthStoreType>
) => StateCreator<AuthStoreType>;
