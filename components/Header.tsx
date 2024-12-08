"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

export default function Header() {
  const activePathname = usePathname();
  return (
    <header className="flex items-center justify-between h-14 border-b border-white/10 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex items-center gap-x-6 text-sm h-full">
          {links.map(({ name, path }) => (
            <li
              key={name}
              className={cn(
                "hover:text-white transition relative  h-full flex items-center",
                {
                  "text-white": activePathname === path,
                  "text-white/50": activePathname !== path,
                }
              )}
            >
              <Link href={path}>{name}</Link>
              {activePathname === path && (
                <motion.div
                  layoutId="header-active-link"
                  className="w-full h-1 bg-accent absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
