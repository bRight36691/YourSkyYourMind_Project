"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MovingSky2 } from "~/component/bg/MovingSky2";
import Image from "next/image";

export default function Page() {
  return (
    <Link href="/4-20">
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
          <div className="fixed top-40 z-10 flex w-screen flex-col text-center text-black">
            <div className="flex items-center justify-center">
              <div className="fixed h-[128px] w-[426px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.78)_36%,rgba(255,255,255,0.67)_60%,rgba(255,255,255,0.49)_77%,rgba(255,255,255,0)_100%)]" />
              <p className="z-20 text-xl">ท้องฟ้าประจำหัวใจ... ของคุณ</p>
            </div>
            <div className="mt-44 flex flex-col items-center justify-center">
              <div className="fixed h-[527px] w-[455px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.78)_36%,rgba(255,255,255,0.67)_60%,rgba(255,255,255,0.49)_77%,rgba(255,255,255,0)_100%)]" />
              <p className="z-20 text-2xl">Tap to review Your sky :)</p>
              <Image
                src="/img/phone-4-19.webp"
                alt="SKY"
                width={3000}
                height={2000}
                className="z-20 h-auto w-1/2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
