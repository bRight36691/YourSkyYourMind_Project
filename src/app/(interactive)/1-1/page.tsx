"use client";
import Image from "next/image";
import Link from "next/link";
import { MovingSky } from "~/component/bg/MovingSky";

export default function Page() {
  return (
    <div className="overflow-hidden object-none">
      <MovingSky />
      <div className="fixed z-10 flex items-center justify-center">
        <Image
          src="/img/ysym_logo.webp"
          alt="yourskyyourmind logo"
          width={1080}
          height={1920}
          className="h-auto w-screen overflow-hidden"
        />
      </div>

      <Link href="/1-2">
        <div className="fixed bottom-32 flex w-screen justify-center">
          <button className="z-20 bg-white text-black">ถัดไป</button>
        </div>
      </Link>
    </div>
  );
}
