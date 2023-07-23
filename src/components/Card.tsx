import React from "react";

type CardProps = {
  children: React.ReactNode;
  bg?: string;
  className?: string;
};

export const Card = ({ children, bg = "white", className }: CardProps) => {
  return (
    <div
      className={`relative bg-${bg} rounded-md ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
