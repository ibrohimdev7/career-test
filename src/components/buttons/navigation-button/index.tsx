"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "../common-button";
import { Button } from "@/components/ui/button";

interface NavigationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

const NavigationButtons = ({
  onNext,
  onPrevious,
  canGoBack,
  canGoForward,
}: NavigationButtonsProps) => {
  return (
    <div className="mx-auto mt-8 flex w-full items-center justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: canGoBack ? 1 : 0.5 }}
      >
        <Button
          variant="link"
          onClick={onPrevious}
          disabled={!canGoBack}
          className="flex items-center gap-2 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: canGoForward ? 1 : 0.5 }}
      >
        <CustomButton
          onClick={onNext}
          disabled={!canGoForward}
          className="bg-mainColors-blue hover:bg-mainColors-blue/80 disabled:cursor-not-allowed"
          endIcon={<ArrowRight className="h-4 w-4" />}
        >
          Next
        </CustomButton>
      </motion.div>
    </div>
  );
};

export default NavigationButtons;
