import "server-only";
import prisma from "@/prisma/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { uppercaseTitle } from "./utils";

const PER_PAGE = 6;
export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const pageNumber = page;
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : uppercaseTitle(city) },
    orderBy: {
      date: "desc",
    },
    skip: (pageNumber - 1) * PER_PAGE,
    take: PER_PAGE,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: { city: city === "all" ? undefined : uppercaseTitle(city) },
  });

  if (events.length === 0) {
    notFound();
  }
  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });
  if (!event) {
    notFound();
  }
  return event;
});
