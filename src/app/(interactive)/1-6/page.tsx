"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MovingSky } from "~/component/bg/MovingSky";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  return (
    <div className="overflow-hidden object-none">
      <MovingSky />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="fixed top-24 z-10 flex w-screen flex-col items-center gap-6 text-center text-black">
          <div className="fixed h-[637px] w-[449px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,1)_0%,rgba(255,255,255,0.98)_36%,rgba(255,255,255,0.84)_60%,rgba(255,255,255,0.56)_77%,rgba(255,255,255,0)_100%)]" />
          <div className="fixed z-20 mt-40 flex flex-col gap-16">
            <div>
              <p>ครั้งล่าสุดที่คุณมองท้องฟ้า</p>
              <p>ปล่อยใจสบาย ๆ ได้</p>
              <p>โดยไม่มีเรื่อง...มากวนใจ</p>
              <p>โดยไม่ต้องคิดเรื่องงาน</p>
              <p>ไม่ต้องกังวล</p>
              <p>ไม่ต้องคิดเรื่องคนรอบตัว</p>
            </div>
            <div>
              <p>... มันนานเท่าไหร่แล้วนะ</p>
            </div>
          </div>
        </div>

        <Link href="/1-7">
          <div className="fixed bottom-32 z-20 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
