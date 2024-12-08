import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <main>
      <section className="z-0 relative h-[400px] overflow-hidden py-2">
        <Image
          src="/image-2.jpg"
          alt="Event background image"
          fill
          className="object-cover blur-2xl"
          sizes="(max-width:1280px) 100vw,1280px"
          priority
        />
        <div className="z-1 absolute flex flex-wrap  items-center justify-center gap-x-6 lg:gap-x-16 h-full w-full">
          <Image
            src="/placeholder-image.png"
            alt="placeholder"
            className="object-cover rounded-lg border-2 border-white/50 animate-pulse"
            width={200}
            height={200}
          />
          <div className="flex flex-col  items-center justify-center gap-y-4">
            <p className="text-white/75 text-sm md:text-base w-52 h-2 rounded-md animate-pulse"></p>
            <h1 className="text-2xl md:text-5xl bg-white/70  mt-4 w-52 h-2 rounded-md animate-pulse"></h1>
            <h1 className="text-2xl md:text-5xl bg-white/70  mt-4 w-52 h-2 rounded-md animate-pulse"></h1>
            <h1 className="text-2xl md:text-5xl bg-white/70  mt-4 w-52 h-2 rounded-md animate-pulse mb-28"></h1>
            <button className="w-[95vw] md:w-full bg-white/25 uppercase text-white py-2 mb-3 border-2 border-white/20  text-sm md:text-base state-effects rounded-md ">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="px-5 py-16 space-y-5">
        <section className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl ">About this event</h2>
          <p className="text-center leading-10 text-white/75 bg-white/70 text-sm mt-4 w-72 h-2 rounded-md animate-pulse"></p>
          <p className="text-center leading-10 text-white/75 bg-white/70 text-sm mt-4 w-72 h-2 rounded-md animate-pulse"></p>
          <p className="text-center leading-10 text-white/75 bg-white/70 text-sm mt-4 w-72 h-2 rounded-md animate-pulse"></p>
          <p className="text-center leading-10 text-white/75 bg-white/70 text-sm mt-4 w-72 h-2 rounded-md animate-pulse"></p>
          <p className="text-center leading-10 text-white/75 bg-white/70 text-sm mt-4 w-72 h-2 rounded-md animate-pulse"></p>
        </section>
        <section className="max-w-4xl mx-auto  flex flex-col items-center justify-center gap-5">
          <h3 className="text-xl">Location</h3>
          <p className="italic text-white/75 bg-white/70 text-sm mt-4 w-72 h-2 rounded-md animate-pulse"></p>
        </section>
      </div>
    </main>
  );
}
