import { cn } from "@/lib/utils";
import React from "react";

export default function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn("font-bold text-2xl lg:text-6xl tracking-tight", className)}
    >
      {children}
    </h1>
  );
}
