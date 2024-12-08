import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        // src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        src="/logo.png"
        alt="EVENTO logo"
        width={53}
        height={16}
        // className="w-[53px] h-[16px]"
        className="object-cover"
      />
    </Link>
  );
}
