"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="grid h-screen w-full justify-items-center bg-[#fbfbfb]"
    >
      <div className="pt-[45%] text-center text-[20px]">
        <h1>อาจารย์ ผู้ที่สอนฉัน</h1>
        <h1 className="pt-[15%]">เขาโอเคกับเราไหมนะ...?</h1>
      </div>
      <img src="/img/teacher.GIF" className="absolute"></img>
      <Link className="fixed bottom-8 left-[36%] z-50" href="/2-10">
        <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
          ถัดไป
        </button>
      </Link>
    </motion.div>
  );
}
