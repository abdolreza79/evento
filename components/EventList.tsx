import EventCard from "./EventCard";
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "./PaginationControls";

export default async function EventList({
  city,
  pageNumber = 1,
}: {
  city: string;
  pageNumber?: number;
}) {
  const { events, totalCount } = await getEvents(city, pageNumber);
  const totalPage = Math.ceil(totalCount / 6);
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 items-center justify-center">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls page={pageNumber} city={city} totalPage={totalPage} />
    </section>
  );
}
