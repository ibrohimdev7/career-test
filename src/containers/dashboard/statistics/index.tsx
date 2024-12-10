import React from "react";
import { Award, BookOpen, Clock, Target } from "lucide-react";
import StatCard from "./components/stat-card";
import ProgressChart from "./components/progress-chart";
import AchievementsList from "./components/achievements-list";

const Statistics = () => {
  const stats = [
    { label: "Completed Courses", value: "12", icon: BookOpen, color: "blue" },
    { label: "Learning Hours", value: "156", icon: Clock, color: "green" },
    { label: "Current Streak", value: "7 days", icon: Target, color: "purple" },
    { label: "Achievements", value: "8", icon: Award, color: "yellow" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Learning Progress</h3>
          <ProgressChart />
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Recent Achievements</h3>
          <AchievementsList />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
