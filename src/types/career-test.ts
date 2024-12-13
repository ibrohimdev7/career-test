export interface Question {
  id: string;
  text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
}

export interface TestProgress {
  currentQuestionIndex: number;
  answers: {
    question: string;
    selected_option: string | number;
    question_text: string;
  }[];
  isComplete: boolean;
}

export interface IAnswerData {
  id: number;
  user: number;
  gemini_response: string;
  best_profession: string;
}

export interface TestState extends TestProgress {
  questions: Question[];
  setAnswer: (values: {
    question: string;
    selected_option: string | number;
    question_text: string;
  }) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  completeTest: () => void;
  setQuestions: (questions: Question[]) => void;
}
