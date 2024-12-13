import { API_CONFIG } from "@/configs/api.configs";

export function buildUrl(
  endpoint: string,
  params?: Record<string, string>
): string {
  const url = new URL(`${API_CONFIG.baseURL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url.toString();
}

export function buildHeaders(customHeaders?: Record<string, string>): Headers {
  const headers = new Headers(API_CONFIG.headers);

  // Add auth token if exists
  const token = localStorage.getItem("authToken");
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  // Add custom headers
  if (customHeaders) {
    Object.entries(customHeaders).forEach(([key, value]) => {
      headers.append(key, value);
    });
  }

  return headers;
}
