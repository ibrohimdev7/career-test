import React from "react";
import { LucideIcon } from "lucide-react";

interface SidebarLinkProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarLink = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}: SidebarLinkProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
        isActive
          ? "bg-blue-50 text-blue-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default SidebarLink;
