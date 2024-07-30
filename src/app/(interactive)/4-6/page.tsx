"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="fixed h-screen w-screen"
      >
        <div className="fixed z-20 h-screen w-full bg-scene2" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="grid h-screen w-screen justify-items-center"
      >
        <div className="fixed top-52 z-10 flex w-screen flex-col items-center justify-center gap-6 text-center text-black">
          <div className="fixed h-[246px] w-[426px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.78)_36%,rgba(255,255,255,0.67)_60%,rgba(255,255,255,0.49)_77%,rgba(255,255,255,0)_100%)]" />
          <div className="z-20 flex flex-col gap-2">
            <h1>พระอาทิตย์ลับขอบฟ้า</h1>
            <h1>บนท้องฟ้ามีดาวมากมาย</h1>
            <h1>งดงาม สว่างไสว</h1>
          </div>
        </div>
        <Link href="/4-7" className="w-full">
          <div className="fixed bottom-[15%] z-20 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
