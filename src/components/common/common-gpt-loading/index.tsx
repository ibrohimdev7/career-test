import React from "react";

const CommonGptLoading: React.FC = () => {
  return (
    <div className="text-center">
      <div className="mb-4 flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-t-2 border-blue-500"></div>
      </div>
      <p className="text-lg font-medium text-gray-700">
        ChatGPT is rendering...
      </p>
    </div>
  );
};

export default CommonGptLoading;
