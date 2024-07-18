"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MovingSky } from "~/component/bg/MovingSky";
import { RadioButton } from "~/component/inputs/RadioButton";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  const [isMedStudent, setIsMedStudent] = useState<string>("");

  const onIsMedStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMedStudent(e.target.value);
    localStorage.setItem("isMedStudent", e.target.value);
  };

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
    </div>
  );
}
