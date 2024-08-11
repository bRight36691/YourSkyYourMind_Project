"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden object-none">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="absolute flex min-h-screen flex-col"
      >
        <div className="absolute h-screen w-full bg-white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="absolute z-20 flex min-h-screen w-full flex-col"
      >
        <div className="absolute flex w-full flex-col justify-center text-center text-[20px] text-black">
          <p className="mt-[224px]">คุณมองขึ้นไปบนท้องฟ้า</p>
          <p className="mt-10">“อ้ะ ! ตกเย็นแล้วสิ”</p>
        </div>

        <Link href="/3-4">
          <div className="absolute bottom-24 flex w-full justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
