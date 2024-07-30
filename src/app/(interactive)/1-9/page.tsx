"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden bg-grayBg object-none">
      <div className="flex min-h-screen flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="flex min-h-screen flex-col justify-center"
        >
          <Image
            src="/img/useLaptop.gif"
            width={200}
            height={200}
            alt="gif of laptop using"
            className="fixed w-full"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2.5,
        }}
        className="flex min-h-screen flex-col justify-center"
      >
        <div className="fixed top-52 z-20 flex w-full flex-col items-center gap-10 text-center text-black">
          <div>
            <p>นึกออกแต่</p>
            <p>ตอนที่ก้มหน้าทำงาน</p>
            <p>ใช้ชีวิตโดยผ่านไปแล้วอีกวัน</p>
          </div>
          <div>
            <p>เราทำได้ดีพอไหมนะ</p>
          </div>
          <div>
            <p>ที่เราทำอยู่...</p>
            <p>เรามีความสุขไหมนะ?</p>
          </div>
        </div>

        <Link href="/1-11">
          <div className="fixed bottom-[15%] flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
