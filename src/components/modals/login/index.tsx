import React, { useState } from "react";
import { X, Mail, Lock } from "lucide-react";
import Modal from "@/components/ui/modal";
import Input from "@/components/ui/input";
import { LoginCredentials } from "@/types/auth";
import { apiService } from "@/services/api.services";
import { toast } from "react-toastify";
import { useAuthStore } from "@/store/useAuthStore";
import Button from "@/components/buttons/common-button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginModal = ({
  isOpen,
  onClose,
  onSwitchToSignup,
}: LoginModalProps) => {
  const { onSignInSuccess } = useAuthStore();

  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post("/auth/login/", credentials);

      const { access, user_data } = response?.data;

      onSignInSuccess(access, {
        id: user_data?.id,
        first_name: user_data?.first_name,
        last_name: user_data?.last_name,
        birth_date: user_data?.birth_date,
        email: user_data?.email,
      });

      onClose();

      toast.success("Muvaffaqiyatli, tizimga kirdingiz!");

      setCredentials({ email: "", password: "" });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Login</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email"
            type="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            icon={<Mail size={20} />}
            required
          />
          <Input
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
            icon={<Lock size={20} />}
          />
          {/* <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </button>
          </div> */}
          <Button type="submit" loading={loading} disabled={loading} fullWidth>
            Sign in
          </Button>
          <div className="text-center text-sm text-gray-600">
            Don{"'"}t have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
