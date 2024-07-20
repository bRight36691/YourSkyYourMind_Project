"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden bg-grayBg object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col justify-center"
      >
        <Image
          src="/img/friends.gif"
          width={200}
          height={200}
          alt="gif of friends"
          className="fixed w-full"
        />
        <div className="flex h-screen w-full items-center justify-center text-center text-[20px] text-black">
          <p className="mb-24">แล้วเรื่องเพื่อน ๆ ล่ะ ?</p>
        </div>

        <Link href="/2-7">
          <div className="fixed bottom-16 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
