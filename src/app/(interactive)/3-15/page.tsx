"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="fixed z-20 flex min-h-screen flex-col"
      >
        <div className="fixed flex w-full flex-col justify-center text-center text-[20px] text-black">
          <p className="mt-[221px]">พอมาคิดทบทวน...</p>
          <p className="mt-1">ตัวฉันตอนเด็ก ๆ</p>
          <p className="mt-1">คงจะตอบง่าย ๆ</p>
          <p className="mt-1">โดยแทบจะไม่ต้องคิดเลยล่ะ</p>
        </div>

        <Link href="/3-16">
          <div className="fixed bottom-24 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
