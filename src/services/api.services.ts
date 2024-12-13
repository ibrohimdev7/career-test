import { buildHeaders, buildUrl } from "@/lib/api.lib";
import { ApiResponse, RequestConfig } from "@/types";

class ApiService {
  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const { method = "GET", body, params, headers: customHeaders } = config;

    try {
      const controller = new AbortController();

      const response = await fetch(buildUrl(endpoint, params), {
        method,
        headers: buildHeaders(customHeaders),
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      const data = await response.json();

      if (!response.ok) {
        throw {
          message: data.message || "An error occurred",
          status: response.status,
          code: data.code,
        };
      }

      return {
        data,
        status: response.status,
        headers: response.headers,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.name === "AbortError") {
        throw {
          message: "Request timeout",
          code: "TIMEOUT",
        };
      }
      throw error;
    }
  }

  async get<T>(
    endpoint: string,
    config: Omit<RequestConfig, "method" | "body"> = {}
  ) {
    return this.request<T>(endpoint, { ...config, method: "GET" });
  }

  async post<T>(
    endpoint: string,
    data: unknown,
    config: Omit<RequestConfig, "method"> = {}
  ) {
    return this.request<T>(endpoint, { ...config, method: "POST", body: data });
  }

  async put<T>(
    endpoint: string,
    data: unknown,
    config: Omit<RequestConfig, "method"> = {}
  ) {
    return this.request<T>(endpoint, { ...config, method: "PUT", body: data });
  }

  async patch<T>(
    endpoint: string,
    data: unknown,
    config: Omit<RequestConfig, "method"> = {}
  ) {
    return this.request<T>(endpoint, {
      ...config,
      method: "PATCH",
      body: data,
    });
  }

  async delete<T>(
    endpoint: string,
    config: Omit<RequestConfig, "method"> = {}
  ) {
    return this.request<T>(endpoint, { ...config, method: "DELETE" });
  }
}

export const apiService = new ApiService();
