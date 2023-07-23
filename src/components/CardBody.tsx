import React from "react";

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
};

export const CardBody = ({ children, className, align }: CardBodyProps) => {
  return (
    <div
      className={`flex flex-col p-6 ${align ? `items-${align}` : ""} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
