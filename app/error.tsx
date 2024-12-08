"use client";
import H1 from "@/components/H1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error.message);
  }, [error]);
  return (
    <div className="text-center py-24">
      <H1 className="text-red-400">Something went wrong ..!</H1>
      {/* <H1 className="text-red-400">{error.message}</H1> */}
      <button onClick={reset} className="mt-16">
        Try again
      </button>
    </div>
  );
}
