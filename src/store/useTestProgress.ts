import { create } from "zustand";
import { TestState } from "@/types/career-test";
import { sampleQuestions } from "@/containers/career-test/constants";

export const useTestProgress = create<TestState>()((set) => ({
  questions: sampleQuestions,
  currentQuestionIndex: 0,
  answers: {},
  isComplete: false,

  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),

  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.min(
        state.currentQuestionIndex + 1,
        state.questions.length - 1
      ),
    })),

  previousQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
    })),

  completeTest: () =>
    set(() => ({
      isComplete: true,
    })),
}));
