import Button from "@/components/buttons/common-button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
  advantages: {
    title: string;
  }[];
  type: string;
  title: string;
  text: string;
  className?: string;
  listClassName?: string;
  isBlue?: boolean;
}

const PricingCard = ({
  advantages,
  title,
  text,
  type,
  className,
  listClassName,
  isBlue = false,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-mainColors-gray p-10",
        isBlue ? "bg-mainColors-blue" : "",
        className
      )}
    >
      <span
        className={cn(
          "mb-10 ml-auto block w-fit rounded-full border border-mainColors-gray px-6 py-[18px] font-bold",
          isBlue ? "bg-white" : ""
        )}
      >
        {type}
      </span>

      <div className="mb-6 space-y-2.5 text-white lg:h-[120px]">
        <h2
          className={cn(
            "text-4xl font-bold lg:text-[44px] lg:leading-[50px]",
            isBlue ? "text-white" : "text-mainColors-light_black"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "text-lg",
            isBlue ? "text-white" : "text-mainColors-gray"
          )}
        >
          {text}
        </p>
      </div>

      <ul className={cn("mb-10", listClassName)}>
        {advantages?.map((item) => {
          return (
            <li
              key={item?.title}
              className={cn(
                "flex items-center gap-3.5 text-base font-bold md:text-lg",
                isBlue ? "text-white" : ""
              )}
            >
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full",
                  isBlue
                    ? "bg-white text-mainColors-blue"
                    : "bg-mainColors-blue text-white"
                )}
              >
                <Check size={16} strokeWidth={3} />
              </span>
              {item?.title}
            </li>
          );
        })}
      </ul>

      <Button label="Get started" variant={isBlue ? "light" : "secondary"} />
    </div>
  );
};

export default PricingCard;
