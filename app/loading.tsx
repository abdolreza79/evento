import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 md:w-20 md:h-20 border-4 rounded-full  border-accent border-t-transparent border-b-transparent animate-spin"></div>
    </div>
  );
}
