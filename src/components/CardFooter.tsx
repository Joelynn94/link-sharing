import React from "react";

type Props = {
  children: React.ReactNode;
};

export const CardFooter = (props: Props) => {
  return (
    <div className="p-8 rounded-b-md border-t-2 border-gray-100">
      {props.children}
    </div>
  );
};
