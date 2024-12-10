import React, { useState } from "react";
import { User, Mail, Lock, Bell } from "lucide-react";
import Input from "@/components/ui/input";

const UserSettings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle settings update
    console.log("Settings updated:", { name, email, notifications });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">Account Settings</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            icon={<User size={20} />}
          />

          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail size={20} />}
          />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Security</h3>
            <button
              type="button"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Lock size={20} />
              Change Password
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Notifications</h3>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <div className="flex items-center gap-2">
                <Bell size={20} className="text-gray-500" />
                <span>Receive email notifications</span>
              </div>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition duration-150 hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
