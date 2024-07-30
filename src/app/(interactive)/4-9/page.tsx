"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid h-screen w-screen justify-items-center"
      >
        <div className="fixed top-52 z-10 flex w-screen flex-col items-center justify-center gap-6 text-center text-black">
          <div className="fixed h-[186px] w-[426px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.78)_36%,rgba(255,255,255,0.67)_60%,rgba(255,255,255,0.49)_77%,rgba(255,255,255,0)_100%)]" />
          <div className="z-20 flex flex-col">
            <h1>ไม่เป็นไรแล้วนะ : )</h1>
          </div>
        </div>
        <Link href="/4-10" className="w-full">
          <div className="fixed bottom-[15%] z-20 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
