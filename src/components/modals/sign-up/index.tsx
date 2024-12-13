import React, { useState } from "react";
import { X, User, Mail, Lock, Users } from "lucide-react";
import Modal from "@/components/ui/modal";
import Input from "@/components/ui/input";
import { useAuthStore } from "@/store/useAuthStore";
import { SignupCredentials } from "@/types/auth";
import Button from "@/components/buttons/common-button";
import { apiService } from "@/services/api.services";
import { toast } from "react-toastify";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const initialValues = {
  first_name: "",
  last_name: "",
  birth_date: "",
  email: "",
  password: "",
};

const SignupModal = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}: SignupModalProps) => {
  const { onSignInSuccess } = useAuthStore();

  const [credentials, setCredentials] =
    useState<SignupCredentials>(initialValues);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(
        "/auth/register/",
        credentials
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const responseLogin: any = await apiService.post("/auth/login/", {
        email: response?.data?.email,
        password: credentials?.password,
      });

      const { access, user_data } = responseLogin?.data;

      onSignInSuccess(access, {
        id: user_data?.id,
        first_name: user_data?.first_name,
        last_name: user_data?.last_name,
        birth_date: user_data?.birth_date,
        email: user_data?.email,
      });

      setCredentials(initialValues);

      onClose();

      toast.success("Muvaffaqiyatli, tizimga kirdingiz!");

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
          <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="First Name"
            type="text"
            value={credentials.first_name}
            onChange={(e) =>
              setCredentials({ ...credentials, first_name: e.target.value })
            }
            icon={<User size={20} />}
            required
          />
          <Input
            label="Last Name"
            type="text"
            value={credentials.last_name}
            onChange={(e) =>
              setCredentials({ ...credentials, last_name: e.target.value })
            }
            icon={<Users size={20} />}
            required
          />

          <Input
            label="Birthday Date"
            type="date"
            value={credentials.birth_date}
            onChange={(e) =>
              setCredentials({ ...credentials, birth_date: e.target.value })
            }
            required
          />

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
            icon={<Lock size={20} />}
            required
          />

          <Button type="submit" loading={loading} disabled={loading} fullWidth>
            Sign in
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignupModal;
