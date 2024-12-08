"use client";
import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function EventCard({ event }: { event: EventoEvent }) {
  const ref = useRef(null);
  const MotionLink = motion.create(Link);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 max-w-[500px] h-[380px]"
      style={{
        scale: scrollProgress,
        opacity: opacityProgress,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
    >
      <div className="relative w-full h-full flex flex-col flex-1 bg-white/[3%] rounded-lg overflow-hidden state-effects">
        <Image
          src="/image-2.jpg"
          alt={event.name}
          width={500}
          height={280}
          className="object-cover h-[60%]"
        />
        <div className="flex flex-col  flex-1 items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="text-white/75 italic">{event.organizerName}</p>
          <p className="text-white/50 text-sm mt-4">{event.location}</p>
        </div>
        <div className="absolute flex flex-col items-center justify-center w-[45px] h-[45px] left-2 top-2 bg-black/30 rounded-md">
          <p className="text-xl font-bold">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent -mt-1">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </div>
      </div>
    </MotionLink>
  );
}
