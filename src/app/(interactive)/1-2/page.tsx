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
        <div className="fixed top-40 z-10 flex w-screen flex-col items-center gap-6 text-center text-black">
          <p className="font-bold">คำเตือน</p>
          <div>
            <p>เว็บนี้มีเนื้อหาเกี่ยวกับความรู้สึก</p>
            <p>และการย้อนนึกถึงเรื่องราวต่าง ๆ ในอดีต</p>
            <p>หากคุณมีสภาวะจิตใจที่ไม่มั่นคง</p>
            <p>ยังรับมือกับสภาวะทางอารมณ์ลบ ของตนเองได้ไม่ดี</p>
            <p>หรือมีความทรงจำเกี่ยวกับการเติบโต</p>
            <p>หรือเผชิญหน้ากับเรื่องราวหนัก ๆ มา</p>
          </div>
          <div>
            <p>หากคุณรู้สึกไม่สบายใจระหว่างการเล่น</p>
            <p>สามารถหยุดเล่นได้</p>
            <p>การดูแลใจตัวเองสำคัญกว่าอะไรทั้งสิ้น</p>
          </div>
          <div>
            <p>เว็บนี้สำหรับสำรวจจิตใจของตนเอง และภาวะหมดไฟ</p>
            <p>ในนิสิตนักศึกษาแพทย์และนักเรียนแพทย์ทหาร</p>
            <p>และบุคคลที่สนใจ</p>
          </div>
        </div>

        <Link href="/1-3">
          <div className="fixed bottom-32 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
