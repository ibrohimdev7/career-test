"use client";

import NumberTicker from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import {
  Image as ImageIcon,
  Users,
  TrendingUp,
  DollarSign,
  Building,
} from "lucide-react";

interface ResultCardProps {
  title: string;
  value: string;
  unit?: string;
  isLarge?: boolean;
  icon: "image" | "users" | "trending" | "dollar" | "building";
  className?: string;
  isTextWhite?: boolean;
}

const iconMap = {
  image: ImageIcon,
  users: Users,
  trending: TrendingUp,
  dollar: DollarSign,
  building: Building,
};

export const ResultCard = ({
  title,
  value,
  unit = "",
  isLarge = false,
  icon,
  className,
  isTextWhite = false,
}: ResultCardProps) => {
  const Icon = iconMap[icon];

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-mainColors-blue bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-slate-900",
        "hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn(
          "absolute -right-6 -top-6 rounded-full transition-all duration-300 group-hover:scale-150",
          isTextWhite ? "bg-[#248af8b4]" : "bg-mainColors-blue/5",
          isLarge
            ? "group-hover:h-40 group-hover:w-40"
            : "group-hover:h-24 group-hover:w-24"
        )}
      />

      <div className="relative">
        <div
          className={cn(
            "flex items-center justify-center rounded-[20px]",
            isTextWhite ? "bg-white" : "bg-mainColors-blue/5",
            isLarge ? "mb-10 h-[108px] w-[108px]" : "mb-7 h-[72px] w-[72px]"
          )}
        >
          <Icon className="h-8 w-8 text-blue-500" />
        </div>

        <h3
          className={cn(
            "font-bold",
            isLarge ? "mb-3 text-4xl" : "mb-2 text-xl",
            isTextWhite ? "text-white" : "text-mainColors-blue"
          )}
        >
          {title}
        </h3>

        <div className="flex items-baseline gap-1">
          <NumberTicker
            value={+value}
            className={cn(
              "font-bold tracking-tight",
              isLarge ? "text-7xl" : "text-[44px] leading-[50px]",
              !isTextWhite
                ? "bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
                : "text-white"
            )}
            delay={2}
          />
          {unit && (
            <span
              className={cn(
                "font-semibold",
                isLarge ? "text-7xl" : "text-[44px] leading-[50px]",
                isTextWhite ? "text-white" : "text-mainColors-blue/30"
              )}
            >
              {unit}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
