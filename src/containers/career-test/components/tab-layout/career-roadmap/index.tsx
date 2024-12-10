import { ArrowRight } from "lucide-react";
import React from "react";

const steps = [
  {
    id: 1,
    title: "Gain foundational knowledge",
    description:
      "Start with beginner courses in technology, design, or data analysis.",
  },
  {
    id: 2,
    title: "Develop practical skills",
    description: "Work on projects, take workshops, and apply your learning.",
  },
  {
    id: 3,
    title: "Earn certifications",
    description: "Obtain certificates to validate your skills.",
  },
];

const CareerRoadmap = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-8 left-[2rem] top-11 w-0.5 bg-blue-200" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <div className="absolute left-8 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
              {step.id}
            </div>

            {/* Arrow to next step */}
            {index < steps.length - 1 && (
              <div className="absolute left-8 top-[calc(100%+1rem)] z-0 flex h-4 items-center justify-center">
                <ArrowRight className="text-blue-300" size={20} />
              </div>
            )}
            {/* Step Content */}
            <div className="ml-16 rounded-lg border border-gray-200 bg-white shadow-sm">
              <button className="flex w-full items-center justify-between px-6 py-4 text-left">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{step.description}</p>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerRoadmap;
