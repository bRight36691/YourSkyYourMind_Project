"use client";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <Link href="/1-9">
      <div className="bg-grayBg flex h-screen w-full items-center overflow-hidden object-none">
        <Image
          src="/img/useLaptop.gif"
          width={200}
          height={200}
          alt="gif of laptop using"
          className="fixed w-full"
        />
      </div>
    </Link>
  );
}
