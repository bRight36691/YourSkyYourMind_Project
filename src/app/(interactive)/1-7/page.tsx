"use client";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <Link href="/1-8">
      <div className="h-screen w-full overflow-hidden bg-white object-none">
        <Image
          src="/img/eyeOpen.gif"
          width={200}
          height={200}
          alt="eye open"
          className="fixed h-screen w-[300%]"
        />
      </div>
    </Link>
  );
}
