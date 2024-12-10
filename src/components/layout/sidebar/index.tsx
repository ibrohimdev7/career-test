import React from "react";
import { LucideIcon, GraduationCap } from "lucide-react";
import SidebarLink from "./sidebar-items";

interface NavPage {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarProps {
  pages: NavPage[];
  currentPage: string;
  isOpen: boolean;
  onPageChange: (pageId: string) => void;
  onClose: () => void;
}

const Sidebar = ({
  pages,
  currentPage,
  onPageChange,
  isOpen,
  onClose,
}: SidebarProps) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out lg:static ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 border-b p-6">
          <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Learning Hub</h1>
            <p className="text-sm text-gray-500">Student Dashboard</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2 p-4">
          {pages.map((page) => (
            <SidebarLink
              key={page.id}
              icon={page.icon}
              label={page.label}
              isActive={currentPage === page.id}
              onClick={() => {
                onPageChange(page.id);
                onClose();
              }}
            />
          ))}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 border-t p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600">
              JD
            </div>
            <div>
              <p className="font-medium text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
