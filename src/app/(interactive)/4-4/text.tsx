"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { NextButton } from "~/component/NextButton";

type prop = { state: number; setState: (number: number) => void; name: string };

export default function Text({ state, setState, name }: prop) {
  if (state === 1) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex min-h-screen w-full items-center justify-center"
      >
        <div className="z-20 mb-20 flex flex-col text-center text-xl text-black">
          <h1>...</h1>
          <h1>{name} พยายามอยู่สินะ</h1>
        </div>
        <div className="absolute bottom-[15%] z-30 flex w-full justify-center">
          <button
            className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm"
            onClick={() => setState(2)}
          >
            ถัดไป
          </button>
        </div>
      </motion.div>
    );
  } else if (state === 2) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="z-20 mb-20 flex flex-col text-center text-xl text-black">
          <h1>ขอบคุณมาก ๆ นะ ที่เล่าให้ฟัง</h1>
        </div>
        <Link
          href="/4-6"
          className="absolute bottom-[15%] z-20 flex w-full justify-center"
        >
          <NextButton />
        </Link>
      </div>
    );
  }
}
