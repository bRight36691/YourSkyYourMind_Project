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
        transition={{ duration: 1, delay: 2 }}
        className="grid h-screen w-screen justify-items-center"
      >
        <div className="fixed top-40 z-10 flex w-screen flex-col items-center justify-center gap-6 text-center text-black">
          <div className="fixed h-[160px] w-[426px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.78)_36%,rgba(255,255,255,0.67)_60%,rgba(255,255,255,0.49)_77%,rgba(255,255,255,0)_100%)]" />
          <div className="z-20 flex flex-col">
            <h1>...</h1>
            <h1>{name} พยายามอยู่สินะ</h1>
          </div>
        </div>
        <div className="fixed bottom-[15%] z-20 flex w-screen justify-center">
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
      <>
        <div className="fixed top-52 z-10 flex w-screen flex-col items-center justify-center gap-6 text-center text-black">
          <div className="fixed h-[208px] w-[426px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.78)_36%,rgba(255,255,255,0.67)_60%,rgba(255,255,255,0.49)_77%,rgba(255,255,255,0)_100%)]" />
          <div className="z-20 flex flex-col">
            <h1>ขอบคุณมาก ๆ นะ ที่เล่าให้ฟัง</h1>
          </div>
        </div>
        <Link href="/4-6">
          <div className="fixed bottom-[15%] z-20 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </>
    );
  }
}
