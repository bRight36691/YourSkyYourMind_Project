"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NextButton } from "~/component/NextButton";
import { RadioButton } from "~/component/inputs/RadioButton";

type prop = { state: number; setState: (number: number) => void };

export default function Text({ state, setState }: prop) {
  const [isMedStudent, setIsMedStudent] = useState<string>("");

  const onIsMedStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMedStudent(e.target.value);
    localStorage.setItem("isMedStudent", e.target.value);
  };

  if (state === 1) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        className="flex min-h-screen flex-col"
      >
        <div className="z-10 flex items-center justify-center">
          <Image
            src="/img/ysym_logo.webp"
            alt="yourskyyourmind logo"
            width={1080}
            height={1920}
            className="h-auto w-screen overflow-hidden"
          />
        </div>
        <div className="mb-16 flex w-screen justify-center">
          <button
            className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm"
            onClick={() => setState(2)}
          >
            ถัดไป
          </button>
        </div>
      </motion.div>
    );
  } else if (state === 2) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
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

        <div className="mt-[756px] flex w-screen justify-center">
          <button
            className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm"
            onClick={() => setState(3)}
          >
            ถัดไป
          </button>
        </div>
      </motion.div>
    );
  } else if (state === 3) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        className="flex min-h-screen flex-col"
      >
        <div className="fixed top-60 z-10 flex w-screen justify-center">
          <div className="flex w-[90%] flex-col items-center gap-2 rounded-xl bg-white p-4 text-center text-black">
            <div>
              <p>คุณเป็นนิสิตนักศึกษาแพทย์</p>
              <p>และนักเรียนแพทย์ทหาร ใช่หรือไม่ ?</p>
            </div>
            <div className="flex w-[76px] items-start justify-start gap-2">
              <RadioButton
                name="isMedStudent"
                value="medStudent"
                onChange={onIsMedStudentChange}
              />
              <label htmlFor="medStudent">ใช่</label>
            </div>
            <div className="flex w-[76px] items-start justify-start gap-2">
              <RadioButton
                name="isMedStudent"
                value="nonMedStudent"
                onChange={onIsMedStudentChange}
              />
              <label htmlFor="nonMedStudent">ไม่ใช่</label>
            </div>
          </div>
        </div>

        {isMedStudent === "medStudent" && (
          <Link href="/1-4_1">
            <div className="fixed bottom-32 flex w-screen justify-center">
              <NextButton />
            </div>
          </Link>
        )}

        {isMedStudent === "nonMedStudent" && (
          <Link href="/1-4_2">
            <div className="fixed bottom-32 flex w-screen justify-center">
              <NextButton />
            </div>
          </Link>
        )}
      </motion.div>
    );
  }
}
