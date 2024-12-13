import { create } from "zustand";
import { TestState } from "@/types/career-test";

export const useTestProgress = create<TestState>()((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  isComplete: false,

  setAnswer: (value) =>
    set((state) => {
      const newAnswers = state?.answers?.filter(
        (answer) => answer?.question !== value?.question
      );

      return {
        answers: [...newAnswers, value],
      };
    }),

  nextQuestion: () =>
    set((state) => {
      return {
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          state.questions.length - 1
        ),
      };
    }),

  previousQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
    })),

  completeTest: () =>
    set(() => ({
      isComplete: true,
    })),
  setQuestions: (questions) => set(() => ({ questions })),
}));
