"use client";

import { motion } from "framer-motion";
import { Question } from "@/types/career-test";
import { Check } from "lucide-react";

interface MultipleChoiceQuestionProps {
  question: Question;
  initialValue?: string | number;
  onAnswer: (value: {
    selected_option: string | number;
    question: string;
  }) => void;
}

export const MultipleChoiceQuestion = ({
  question,
  initialValue,
  onAnswer,
}: MultipleChoiceQuestionProps) => {
  return (
    <div className="space-y-3">
      {[
        {
          variant: "a",
          value: question?.option_a,
        },
        {
          variant: "b",
          value: question?.option_b,
        },
        {
          variant: "c",
          value: question?.option_c,
        },
        {
          variant: "d",
          value: question?.option_d,
        },
      ]?.map(({ value, variant }, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            onAnswer({
              selected_option: variant,
              question: value,
            })
          }
          className={`flex w-full items-center justify-between rounded-lg border-2 p-4 transition-all duration-200 ${
            initialValue === value
              ? "border-mainColors-blue bg-indigo-50 text-mainColors-blue"
              : "border-gray-200 text-gray-700 hover:border-indigo-200"
          }`}
        >
          <span className="text-left">{value}</span>
          {initialValue === value && (
            <Check className="h-5 w-5 text-indigo-500" />
          )}
        </motion.button>
      ))}
    </div>
  );
};
