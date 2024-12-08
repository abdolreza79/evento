import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const btnStyles =
  "flex items-center gap-x-2 opacity-75 hover:placeholder-opacity-100 transition text-sm px-5 py-3 bg-white/5 text-white rounded-md";

export default function PaginationControls({
  page,
  city,
  totalPage,
}: {
  page: number;
  city: string;
  totalPage: number;
}) {
  return (
    <section className="flex justify-between w-full">
      {page > 1 && (
        <Link href={`/events/${city}?page=${page - 1}`} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      )}
      {page < totalPage && (
        <Link
          href={`/events/${city}?page=${page + 1}`}
          className={`ml-auto ${btnStyles}`}
        >
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
