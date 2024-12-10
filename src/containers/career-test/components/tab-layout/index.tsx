import { useState } from "react";
import LearningCenters from "./learning-center";
import CareerRoadmap from "./career-roadmap";

const tabs = [
  { id: "learning", label: "Learning Centers", component: LearningCenters },
  { id: "career", label: "Career Roadmap", component: CareerRoadmap },
];

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState("learning");

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || LearningCenters;

  return (
    <div className="overflow-hidden rounded-lg">
      <div className="border-b">
        <nav className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-6 py-4 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-6">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default TabLayout;
