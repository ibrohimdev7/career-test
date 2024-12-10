"use client";

import { motion } from "framer-motion";
import { Question } from "@/types/career-test";
import { Check } from "lucide-react";

interface MultipleChoiceQuestionProps {
  question: Question;
  initialValue?: string | number;
  onAnswer: (value: string) => void;
}

export const MultipleChoiceQuestion = ({
  question,
  initialValue,
  onAnswer,
}: MultipleChoiceQuestionProps) => {
  return (
    <div className="space-y-3">
      {question?.options?.map((option) => (
        <motion.button
          key={option?.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAnswer(option?.text)}
          className={`flex w-full items-center justify-between rounded-lg border-2 p-4 transition-all duration-200 ${
            initialValue === option?.text
              ? "border-mainColors-blue bg-indigo-50 text-mainColors-blue"
              : "border-gray-200 text-gray-700 hover:border-indigo-200"
          }`}
        >
          <span className="text-left">{option?.text}</span>
          {initialValue === option?.text && (
            <Check className="h-5 w-5 text-indigo-500" />
          )}
        </motion.button>
      ))}
    </div>
  );
};
