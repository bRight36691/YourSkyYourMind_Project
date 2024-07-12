"use client";
import Link from "next/link";
import { useState } from "react";
import { MovingSky } from "~/component/bg/MovingSky";

export default function Page() {
  const [isMedStudent, setIsMedStudent] = useState<string>("");

  const onIsMedStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMedStudent(e.target.value);
  };

  return (
    <div className="overflow-hidden object-none">
      <MovingSky />

      <div className="fixed top-60 z-10 flex w-screen justify-center">
        <div className="flex w-[90%] flex-col items-center gap-2 rounded-xl bg-white p-4 text-center text-black">
          <div>
            <p>คุณเป็นนิสิตนักศึกษาแพทย์</p>
            <p>และนักเรียนแพทย์ทหาร ใช่หรือไม่ ?</p>
          </div>
          <div className="flex w-20 justify-start gap-2">
            <input
              type="radio"
              name="isMedStudent"
              value="medStudent"
              id="medStudent"
              onChange={onIsMedStudentChange}
            />
            <label htmlFor="medStudent">ใช่</label>
          </div>
          <div className="flex w-20 justify-start gap-2">
            <input
              type="radio"
              name="isMedStudent"
              value="nonMedStudent"
              id="nonMedStudent"
              onChange={onIsMedStudentChange}
            />
            <label htmlFor="nonMedStudent">ไม่ใช่</label>
          </div>
        </div>
      </div>

      {isMedStudent === "medStudent" && (
        <Link href="/1-4_1">
          <div className="fixed bottom-32 flex w-screen justify-center">
            <button className="z-20 bg-white text-black">ถัดไป</button>
          </div>
        </Link>
      )}

      {isMedStudent === "nonMedStudent" && (
        <Link href="/1-4_2">
          <div className="fixed bottom-32 flex w-screen justify-center">
            <button className="z-20 bg-white text-black">ถัดไป</button>
          </div>
        </Link>
      )}
    </div>
  );
}
