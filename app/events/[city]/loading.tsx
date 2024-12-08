import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center px-5 py-8 min-h-[110vh]">
      <section className="max-w-[1100px] flex flex-wrap gap-10 items-center justify-center">
        {Array.from({ length: 12 }, (_, i) => (
          <SkeletonCard key={i} />
        ))}
      </section>
    </div>
  );
}
