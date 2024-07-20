"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MovingSky } from "~/component/bg/MovingSky";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  return (
    <div className="overflow-hidden object-none">
      <MovingSky />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
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
          <div className="fixed bottom-32 z-20 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
