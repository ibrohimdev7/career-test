import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "light";
  label?: string;
  fullWidth?: boolean;
  size?: "normal" | "large";
  bordered?: boolean;
  disabled?: boolean;

  onClick?: () => void;
}

const Button = ({
  children,
  label,
  type = "button",
  size = "normal",
  startIcon,
  endIcon,
  className,
  variant = "secondary",
  fullWidth = false,
  bordered = false,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "rounded-[36px] transition-all duration-300 ease-in-out",
        {
          "px-6 py-[18px] text-base": size === "normal",
          "px-9 py-6 text-lg": size === "large",
          "flex items-center justify-center gap-2": startIcon || endIcon,
          "border border-mainColors-blue bg-white font-semibold text-mainColors-blue hover:bg-mainColors-blue hover:text-white active:bg-mainColors-blue/80":
            variant === "default",
          "bg-mainColors-blue font-bold text-white hover:bg-mainColors-blue/80 active:bg-mainColors-blue/70":
            variant === "secondary",
          "bg-white font-bold text-mainColors-light_black hover:bg-gray-200 active:bg-gray-300":
            variant === "light",
          "border border-[#D4D2E3]": bordered,
        },
        fullWidth ? "w-full" : "w-full base:w-fit",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon}
      {children || label}
      {endIcon}
    </button>
  );
};

export default Button;
