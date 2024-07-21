"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="grid h-screen w-screen justify-items-center"
    >
      <div className="fixed -z-[10] ml-[13%] mt-[40%] h-[45%] w-[75%] rounded-full bg-white opacity-100 blur-2xl"></div>
      <div className="pt-[63%] text-center text-[20px]">
        <h1>ผ่านอะไรมาเยอะเลยแฮะ</h1>
        <h1 className="pt-[15%]">มีทั้งเรื่องที่ยินดี</h1>
        <h1 className="pt-[15%]">และน่าเหนื่อยใจ</h1>
      </div>
      <Link className="fixed bottom-8 left-[36%] z-50" href="/3-1">
        <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
          ถัดไป
        </button>
      </Link>
    </motion.div>
  );
}
