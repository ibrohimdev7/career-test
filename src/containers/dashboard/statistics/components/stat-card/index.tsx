import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const colorClasses = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
  yellow: "bg-yellow-50 text-yellow-600",
};

const StatCard = ({ label, value, icon: Icon, color }: StatCardProps) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`rounded-lg p-3 ${colorClasses[color as keyof typeof colorClasses]}`}
        >
          <Icon size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
