"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTestProgress } from "@/store/useTestProgress";
import { MultipleChoiceQuestion } from "@/containers/career-test/components/question-types/multiple-choice-question";
import { IAnswerData, Question, TestState } from "@/types/career-test";
import ProgressBar from "@/components/shared/progress-bar";
import NavigationButtons from "@/components/buttons/navigation-button";
import { useAuthStore } from "@/store/useAuthStore";
import { apiService } from "@/services/api.services";
import CommonLoading from "@/components/common/common-loading";
import Container from "@/components/layout/container";
import { TestComplete } from "@/components/cards/test-complete";
import CommonGptLoading from "@/components/common/common-gpt-loading";
import LoginRequired from "./components/login-required";

export const useModalState = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const openSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  return {
    isLoginOpen,
    isSignupOpen,
    openLogin,
    openSignup,
    closeLogin: () => setIsLoginOpen(false),
    closeSignup: () => setIsSignupOpen(false),
  };
};

const QuestionRenderer = ({
  question,
  answer,
  setAnswer,
}: {
  question: Question;
  answer: string;
  setAnswer: TestState["setAnswer"];
}) => {
  return (
    <MultipleChoiceQuestion
      question={question}
      initialValue={answer}
      onAnswer={(value) =>
        setAnswer({
          question: question?.id,
          selected_option: value?.selected_option,
          question_text: value?.question,
        })
      }
    />
  );
};

const CareerTestContainer = () => {
  const signedIn = useAuthStore((state) => state?.session?.signedIn);
  const token = useAuthStore((state) => state?.session?.token);

  const {
    questions,
    currentQuestionIndex,
    answers,
    setAnswer,
    nextQuestion,
    previousQuestion,
    completeTest,
    setQuestions,
    isComplete,
  } = useTestProgress();

  const [loading, setLoading] = useState(true);
  const [renderAnswerLoading, setRenderAnswerLoading] = useState(false);
  const [answerData, setAnswerData] = useState<IAnswerData>({
    id: 0,
    user: 0,
    gemini_response: "",
    best_profession: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await apiService.get("/products/questions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setQuestions(res?.data?.results);
      setLoading(false);
    };

    if (token) {
      fetchQuestions();
    }
  }, [setQuestions, token]);

  useEffect(() => {
    const user = localStorage.getItem("auth");
    setIsLoggedIn(!!user || signedIn);
  }, [signedIn]);

  if (isLoggedIn === null)
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50/90 to-purple-50/90">
        <Container className="flex max-w-2xl flex-col items-center justify-center space-y-8 py-[78px]">
          <CommonLoading />
        </Container>
      </div>
    );

  if (!token && !signedIn && !isLoggedIn) return <LoginRequired />;

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmitAnswers = async () => {
    setRenderAnswerLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await apiService.post(
        "/products/answers/bulk/",
        {
          answers: answers.map((answer) => ({
            question: answer?.question,
            selected_option: answer?.selected_option,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnswerData(res?.data?.saved_answer);

      completeTest();
    } catch (error) {
      console.error(error);
    } finally {
      setRenderAnswerLoading(false);
    }
  };

  if (isComplete) return <TestComplete data={answerData} />;

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50/90 to-purple-50/90">
      <Container className="flex max-w-2xl flex-col items-center justify-center space-y-8 py-[78px]">
        {loading ? (
          <CommonLoading />
        ) : renderAnswerLoading ? (
          <CommonGptLoading />
        ) : (
          <>
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={questions?.length}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion?.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8 rounded-xl bg-white p-6 shadow-lg"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Question {currentQuestionIndex + 1} of {questions?.length}
                  </h2>
                  <p className="text-xl text-foreground/80">
                    {currentQuestion?.text}
                  </p>
                </div>

                <QuestionRenderer
                  question={currentQuestion}
                  answer={answers?.[currentQuestionIndex]?.question_text}
                  setAnswer={setAnswer}
                />
              </motion.div>
            </AnimatePresence>
            <NavigationButtons
              onNext={() => {
                if (currentQuestionIndex === questions.length - 1) {
                  handleSubmitAnswers();
                } else {
                  nextQuestion();
                }
              }}
              onPrevious={previousQuestion}
              canGoBack={currentQuestionIndex > 0}
              canGoForward={
                answers?.[currentQuestionIndex]?.question !== undefined
              }
            />
          </>
        )}
      </Container>
    </section>
  );
};

export default CareerTestContainer;
