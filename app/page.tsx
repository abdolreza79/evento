import H1 from "@/components/H1";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center pt-36 px-3">
      <H1>Find events around you</H1>
      <p className="mt-7 mb-12 text-xl text-center lg:text-3xl  opacity-75">
        Browse more than
        <span className="text-accent font-bold underline italic mx-2">
          10,000 events
        </span>
        around you
      </p>
      <SearchForm />
      <section className="m-4 flex items-center gap-x-4 text-sm text-white/50">
        <p>Popular :</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
