"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NextButton } from "~/component/NextButton";
import { useEffect, useState } from "react";

export default function Page() {
  const [age, setAge] = useState<string>();
  useEffect(() => {
    const getName = localStorage.getItem("age");
    setAge(getName ?? "");
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="fixed z-20 flex min-h-screen flex-col"
      >
        <div className="fixed flex w-full flex-col justify-center text-center text-[20px] text-black">
          <p className="mt-[143px]">เผลอแปปเดียว ก็ {age} ปีแล้ว</p>
          <p className="mt-1">ตัวฉันเอง ก็เติบโตขึ้นในทุกวัน</p>
          <p className="mt-12">เวลาผ่านไปไว แต่กลับไม่ค่อยมีเวลา</p>
          <p className="mt-1">สำรวจภายในหัวใจของเราเลย</p>
          <p className="mt-1">...</p>
          <p className="mt-1">ช่วงนี้เป็นอย่างไรบ้างนะ ?</p>
        </div>

        <Link href="/3-6">
          <div className="fixed bottom-24 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
