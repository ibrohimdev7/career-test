import { Plus, Minus } from "lucide-react";
import { FAQItem } from "@/types/faq";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordion = ({ faq, isOpen, onToggle }: FAQAccordionProps) => {
  return (
    <div className="border-b border-gray-200 py-10 last:border-none">
      <button
        onClick={onToggle}
        className={cn(
          "group flex w-full items-center justify-between text-left"
        )}
        aria-expanded={isOpen}
      >
        <div className={cn("items-center gap-20 md:flex")}>
          <span className="text-[44px] font-bold leading-[50px] text-mainColors-blue transition-colors group-hover:text-mainColors-blue/80">
            {faq.id}
          </span>
          <div className={isOpen ? "space-y-14" : "space-y-0"}>
            <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-700 md:text-[28px] md:leading-[38px]">
              {faq.question}
            </h3>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 overflow-hidden opacity-0"
              }`}
            >
              <p className="leading-relaxed text-mainColors-gray">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
        <span className="ml-6 text-gray-500 transition-colors group-hover:text-gray-700">
          {isOpen ? (
            <Minus className="h-[38px] w-[38px]" strokeWidth={1} />
          ) : (
            <Plus className="h-[38px] w-[38px]" strokeWidth={1} />
          )}
        </span>
      </button>
    </div>
  );
};

export default FAQAccordion;
