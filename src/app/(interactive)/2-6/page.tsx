"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="grid h-screen w-screen justify-items-center bg-[#fbfbfb]"
    >
      <div className="pt-[60%] text-center text-[20px]">
        <h1>แล้วเรื่องเพื่อน ๆ ล่ะ ?</h1>
      </div>
      <img src="/img/friends.GIF" className="fixed"></img>
      <Link className="fixed bottom-8 left-[36%] z-50" href="/2-7">
        <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
          ถัดไป
        </button>
      </Link>
    </motion.div>
  );
}
