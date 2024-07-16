"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden bg-grayBlue object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="flex h-screen w-full items-center justify-center text-center text-[20px] text-black">
          <p className="mb-24">แล้วเรื่องเพื่อน ๆ ล่ะ ?</p>
        </div>

        <Link href="/2-7">
          <div className="fixed bottom-20 flex w-screen justify-center">
            <button className="z-20 bg-white text-black">ถัดไป</button>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
