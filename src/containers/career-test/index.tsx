"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTestProgress } from "@/store/useTestProgress";
import { SliderQuestion } from "@/containers/career-test/components/question-types/slider-question";
import { MultipleChoiceQuestion } from "@/containers/career-test/components/question-types/multiple-choice-question";
import { TestComplete } from "@/components/cards/test-complete";
import Container from "@/components/layout/container";
import LoginModal from "@/components/modals/login";
import SignupModal from "@/components/modals/sign-up";
import { Question, TestState } from "@/types/career-test";
import ProgressBar from "@/components/shared/progress-bar";
import NavigationButtons from "@/components/buttons/navigation-button";

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
  answer: TestState["answers"][string];
  setAnswer: TestState["setAnswer"];
}) => {
  switch (question?.type) {
    case "slider":
      return (
        <SliderQuestion
          value={(answer || 5) as number}
          min={question.minValue || 0}
          max={question.maxValue || 10}
          step={question.step || 1}
          onChange={(value) => setAnswer(question.id, value)}
        />
      );
    case "multiple-choice":
      return (
        <MultipleChoiceQuestion
          question={question}
          initialValue={answer}
          onAnswer={(value) => setAnswer(question?.id, value)}
        />
      );
    default:
      return null;
  }
};

const CareerTestContainer = () => {
  const {
    questions,
    currentQuestionIndex,
    isComplete,
    answers,
    setAnswer,
    nextQuestion,
    previousQuestion,
    completeTest,
  } = useTestProgress();

  const {
    isLoginOpen,
    isSignupOpen,
    openLogin,
    openSignup,
    closeLogin,
    closeSignup,
  } = useModalState();

  const currentQuestion = questions[currentQuestionIndex];

  if (isComplete) return <TestComplete />;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    completeTest();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50/90 to-purple-50/90">
      <Container className="max-w-2xl space-y-8 py-[78px]">
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
              {currentQuestion?.explanation && (
                <p className="text-sm text-muted-foreground">
                  {currentQuestion?.explanation}
                </p>
              )}
            </div>

            <QuestionRenderer
              question={currentQuestion}
              answer={answers[currentQuestion?.id]}
              setAnswer={setAnswer}
            />
          </motion.div>
        </AnimatePresence>

        <NavigationButtons
          onNext={() => {
            if (currentQuestionIndex === questions.length - 1) {
              openLogin();
            } else {
              nextQuestion();
            }
          }}
          onPrevious={previousQuestion}
          canGoBack={currentQuestionIndex > 0}
          canGoForward={answers[currentQuestion?.id] !== undefined}
        />

        <LoginModal
          isOpen={isLoginOpen}
          onClose={closeLogin}
          onSwitchToSignup={openSignup}
          onSubmit={handleLogin}
        />

        <SignupModal
          isOpen={isSignupOpen}
          onClose={closeSignup}
          onSwitchToLogin={openLogin}
          onSubmit={handleLogin}
        />
      </Container>
    </section>
  );
};

export default CareerTestContainer;
