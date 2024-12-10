import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container max-w-[1298px] mx-auto px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
