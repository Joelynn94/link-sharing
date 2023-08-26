import Image from "next/image";
import React from "react";

type Props = {};

export const GithubLink = (props: Props) => {
  return (
    <div
      className="flex items-center px-4 py-2 gap-2 w-full rounded-lg"
      style={{ color: "#fff", backgroundColor: "#1A1A1A" }}
    >
      <Image
        src="/social/icon-github.svg"
        alt="github icon"
        width={16}
        height={16}
      />
      <p>Github</p>
      <div className="ml-auto">
        <Image
          src="/icon-arrow-right.svg"
          alt="arrow right"
          width={16}
          height={16}
          className="self-end"
        />
      </div>
    </div>
  );
};
