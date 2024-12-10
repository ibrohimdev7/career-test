export interface Question {
  id: string;
  text: string;
  type: "multiple-choice" | "slider" | "drag-drop";
  options?: {
    id: string;
    text: string;
  }[];
  explanation?: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
}

export interface TestProgress {
  currentQuestionIndex: number;
  answers: Record<string, string | number>;
  isComplete: boolean;
}

export interface TestState extends TestProgress {
  questions: Question[];
  setAnswer: (questionId: string, answer: string | number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  completeTest: () => void;
}
