import EventList from "@/components/EventList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { uppercaseTitle } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  return {
    title: city !== "all" ? `Events in ${uppercaseTitle(city)}` : "All Events",
    description: "",
  };
}

const pageNumberSchema = z.coerce.number().positive().int().optional();

export default async function EventsPage({
  params,
  searchParams,
}: {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { city } = await params;
  const result = pageNumberSchema.safeParse((await searchParams).page);
  if (!result.success) {
    throw new Error("Page number is not valid !..");
  }
  return (
    <main className="flex flex-col items-center px-5 py-8 min-h-[110vh]">
      <H1 className="mb-16">
        {city === "all" ? "All Events" : `Events in ${uppercaseTitle(city)}`}
      </H1>
      <Suspense key={city + result.data} fallback={<Loading />}>
        <EventList city={city} pageNumber={result.data} />
      </Suspense>
    </main>
  );
}
