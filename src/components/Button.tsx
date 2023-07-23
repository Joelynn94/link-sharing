import { type } from "os";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "primary" | "outline" | "transparent";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  className = "",
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-primary-500 hover:bg-primary-50 text-white hover:text-primary-500";
      case "outline":
        return "border border-primary-500 hover:bg-primary-50 text-primary-500";
      case "transparent":
        return "bg-transparent";
      default:
        return "bg-white hover:bg-gray-50 text-gray-700";
    }
  };

  const getFullWidth = () => {
    if (fullWidth) {
      return "w-full";
    } else {
      return "";
    }
  };

  const getDisabled = () => {
    if (disabled) {
      return "opacity-50 disabled:pointer-events-none";
    } else {
      return "";
    }
  };

  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md font-bold focus:ring-2 focus:ring-primary-300 ${getVariant()} ${getFullWidth()} ${getDisabled()} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
