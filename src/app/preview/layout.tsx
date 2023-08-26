"use client";

import Link from "next/link";
import { Button } from "@/components/Button";

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="md:p-5">
      <div
        className="w-full bg-primary-500 rounded-b-3xl absolute top-0 left-0 right-0"
        style={{ height: "360px" }}
      ></div>
      <nav className="bg-white rounded-md p-4 mb-4 relative z-10">
        <div className="flex flex-wrap items-center justify-between grow">
          <div className="flex">
            <Link href="/dashboard/links" className="flex items-center">
              <Button variant="outline">Back to Editor</Button>
            </Link>
          </div>
          <div className="flex">
            <Button variant="primary">Share Link</Button>
          </div>
        </div>
      </nav>
      {children}
    </section>
  );
}
