"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MovingSky2 } from "~/component/bg/MovingSky2";

export default function Page() {
  return (
    <div className="overflow-hidden object-none">
      <MovingSky2 />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="fixed top-24 z-10 flex w-screen flex-col items-center text-center text-black">
          <div className="fixed h-[540px] w-[458px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.78)_36%,rgba(255,255,255,0.67)_60%,rgba(255,255,255,0.49)_77%,rgba(255,255,255,0)_100%)]" />
          <div className="fixed z-20 mt-40 flex flex-col gap-2">
            <p>ชีวิตมีการเปลี่ยนแปลงตลอด</p>
            <p>เหมือนกันกับท้องฟ้า</p>
            <p>แต่ในทุก ๆ ช่วงเวลา</p>
            <p>ก็มีความงดงามในตัวของมัน</p>
            <p>ลองหยุดสักพัก ใช้เวลากับปัจจุบัน</p>
            <p>มองท้องฟ้า</p>
            <p>ให้เวลากับหัวใจของคุณ..</p>
          </div>
        </div>
        <div className="fixed bottom-[10%] z-20 flex w-screen justify-center">
          <Link href="/4-19">
            <button className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm">
              ถัดไป
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
