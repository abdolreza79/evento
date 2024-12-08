import H1 from "@/components/H1";
import { EventoEvent } from "@prisma/client";
import { getEvent, getEvents } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { events }: { events: EventoEvent[] } = await getEvents("all");
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = (await getEvent(slug)) as EventoEvent;
  return {
    title: event.name,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event: EventoEvent = (await getEvent(slug)) as EventoEvent;
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
            src="/image-2.jpg"
            alt={event.name}
            className="object-cover rounded-lg border-2 border-white/50"
            width={300}
            height={280}
          />
          <div className="flex flex-col  items-center justify-center gap-y-4">
            <p className="text-white/75 text-sm md:text-base">
              {new Date(event.date).toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "2-digit",
              })}
            </p>
            <H1 className="text-2xl md:text-5xl">{event.name}</H1>
            <p className="text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="w-[95vw] md:w-full bg-white/25 uppercase text-white py-2 mb-3 border-2 border-white/20 mt-auto text-sm md:text-base state-effects rounded-md">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="px-5 py-16 space-y-5">
        <section className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl ">About this event</h2>
          <p className="text-center leading-10 text-white/75">
            {event.description}
          </p>
        </section>
        <section className="max-w-4xl mx-auto  flex flex-col items-center justify-center gap-5">
          <h3 className="text-xl">Location</h3>
          <p className="italic text-white/75">{event.location}</p>
        </section>
      </div>
    </main>
  );
}
