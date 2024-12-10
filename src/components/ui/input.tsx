import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

const Input = ({ label, icon, ...props }: InputProps) => {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={`block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-700 focus:border-blue-500 focus:ring-blue-500 ${
            icon ? "pl-10" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Input;
