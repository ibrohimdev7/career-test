import React from "react";
import { Trophy } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Fast Learner",
    description: "Completed 5 courses in one month",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Perfect Score",
    description: "Achieved 100% in final assessment",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "Dedication",
    description: "7-day learning streak",
    date: "2024-03-05",
  },
];

const AchievementsList = () => {
  return (
    <div className="space-y-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="flex items-start gap-4 rounded-lg bg-gray-50 p-4"
        >
          <div className="rounded-lg bg-yellow-100 p-2 text-yellow-600">
            <Trophy size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{achievement.title}</h4>
            <p className="text-sm text-gray-600">{achievement.description}</p>
            <p className="mt-1 text-xs text-gray-500">
              {new Date(achievement.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsList;
