"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, BarChart } from "lucide-react";
import { useTestProgress } from "@/store/useTestProgress";
import Container from "@/components/layout/container";
import TabLayout from "@/containers/career-test/components/tab-layout";
import { IAnswerData } from "@/types/career-test";
import TextRenderer from "./text-render";

export const TestComplete = ({ data }: { data: IAnswerData }) => {
  const { answers, questions } = useTestProgress();
  const answeredQuestions = Object.keys(answers).length;

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Container className="py-[78px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            </motion.div>

            <h2 className="mt-6 text-2xl font-bold text-gray-800">
              Test Completed!
            </h2>

            <p className="mt-2 text-gray-600">
              You have answered {answeredQuestions} out of {questions?.length}{" "}
              questions.
            </p>
          </div>

          <div className="mt-8 rounded-lg bg-indigo-50 p-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-mainColors-blue">
                <BarChart className="h-5 w-5" />
                <h3 className="font-semibold">Your Results Summary</h3>
              </div>
              <p>
                Best profession is{" "}
                <span className="text-mainColors-blue underline">
                  {data?.best_profession} Developer
                </span>{" "}
                for your career
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {/* Add result visualization here */}
              <TextRenderer text={data?.gemini_response} />
            </div>
          </div>

          <TabLayout />

          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-mainColors-blue px-6 py-3 text-white transition-colors duration-200 hover:bg-mainColors-blue/80"
              onClick={() => window.location.reload()}
            >
              Start New Test
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
