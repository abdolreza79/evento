import Link from "next/link";
import React from "react";

const links = [
  { name: "terms & conditions", path: "/terms-conditions" },
  { name: "Privay policy", path: "/privacy-policy" },
];
export default function Footer() {
  return (
    <footer className="h-14 mt-auto flex flex-wrap-reverse items-center justify-between border-t border-white/10 px-3 sm:px-9 text-white/25 text-xs">
      <small className="text-xs grow text-center md:grow-0 md:text-start">
        &copy; 2050 Bytegrad. All rights reserved
      </small>
      <ul className="flex grow md:grow-0 items-center gap-x-3 sm:gap-x-9 justify-between md:justify-start">
        {links.map(({ name, path }) => (
          <li key={name}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
