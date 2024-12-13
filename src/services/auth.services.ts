import { LoginCredentials, SignupCredentials, User } from "@/types/auth";
import { apiService } from "./api.services";

export class AuthService {
  private readonly BASE_PATH = "/auth";

  async login(credentials: LoginCredentials): Promise<User> {
    const { data } = await apiService.post<User>(
      `${this.BASE_PATH}/login`,
      credentials
    );
    return data;
  }

  async signup(credentials: SignupCredentials): Promise<User> {
    const { data } = await apiService.post<User>(
      `${this.BASE_PATH}/signup`,
      credentials
    );
    return data;
  }

  async logout(): Promise<void> {
    await apiService.post(`${this.BASE_PATH}/logout`, {});
    localStorage.removeItem("authToken");
  }
}

export const authService = new AuthService();
