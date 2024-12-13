import React from "react";

interface TextRendererProps {
  text: string;
}

const TextRenderer: React.FC<TextRendererProps> = ({ text }) => {
  const paragraphs = text.split("\n");

  return (
    <div className="mx-auto max-w-3xl space-y-4 rounded-lg bg-white p-6 shadow-md">
      {paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith("#")) {
          return (
            <h1 key={index} className="text-xl lg:text-2xl font-bold text-gray-900">
              {paragraph.replace(/\#/g, "").trim()}
            </h1>
          );
        } else if (paragraph.startsWith("*")) {
          return (
            <p
              key={index}
              className="text-sm sm:text-base italic leading-relaxed text-gray-800"
            >
              {paragraph.replace(/\*/g, "").trim()}
            </p>
          );
        } else {
          return (
            <p key={index} className="text-base leading-relaxed text-gray-800">
              {paragraph.trim()}
            </p>
          );
        }
      })}
    </div>
  );
};

export default TextRenderer;
