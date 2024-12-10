"use client";

import React, { useState } from "react";
import { LayoutDashboard, Settings, Menu, X } from "lucide-react";
import Statistics from "./statistics";
import UserSettings from "./settings";
import Sidebar from "@/components/layout/sidebar";

const DashboardLayout = () => {
  const [currentPage, setCurrentPage] = useState("statistics");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const pages = [
    { id: "statistics", label: "Dashboard", icon: LayoutDashboard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg lg:hidden"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <Sidebar
        pages={pages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        {currentPage === "statistics" ? <Statistics /> : <UserSettings />}
      </main>
    </div>
  );
};

export default DashboardLayout;
