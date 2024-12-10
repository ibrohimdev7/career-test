import React from "react";
import { motion } from "framer-motion";

interface SliderQuestionProps {
  value?: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

export const SliderQuestion: React.FC<SliderQuestionProps> = ({
  value = 5,
  min,
  max,
  step,
  onChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Not comfortable</span>
        <span>Very comfortable</span>
      </div>

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        />

        <motion.div
          initial={false}
          animate={{
            left: `${((value - min) / (max - min)) * 100}%`,
          }}
          className="absolute -top-8 -translate-x-1/2 transform"
        >
          <div className="rounded bg-mainColors-blue px-2 py-1 text-sm text-white">
            {value}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
