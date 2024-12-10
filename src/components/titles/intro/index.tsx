import { cn } from "@/lib/utils";
import React from "react";

interface IntroProps {
  unsualTitle: string;
  title: string;
  text: string;
  className?: string;
}

const Intro = ({ unsualTitle, title, text, className }: IntroProps) => {
  return (
    <div className={cn("mb-20 space-y-4 text-center", className)}>
      <h2 className="text-3xl font-bold md:text-[40px] md:leading-[46px]">
        <span className="text-mainColors-blue">{unsualTitle}</span> {title}
      </h2>
      <p className="text-lg text-mainColors-gray">{text}</p>
    </div>
  );
};

export default Intro;
