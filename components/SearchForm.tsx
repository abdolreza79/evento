"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  }

  return (
    <form action="" className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full h-10 md:h-16 rounded-lg text-sm md:text-base bg-white/[7%] px-2 md:px-6 italic outline-none transition ring-accent/50 focus:ring-2 focus:bg-white/10"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search events in any city ..."
        spellCheck={false}
      />
    </form>
  );
}
