"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { QuestionRadio } from "~/component/inputs/QuestionRadio";

export default function Page() {
  const [cbissQ12, setCbissQ12] = useState<string>("");
  const [cbissQ13, setCbissQ13] = useState<string>("");

  const onCbissQ12Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ12(e.target.value);
    localStorage.setItem("cbissQ12", e.target.value);
  };

  const onCbissQ13Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ13(e.target.value);
    localStorage.setItem("cbissQ13", e.target.value);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-grayBlue object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="flex w-full justify-center">
          <div className="fixed top-20 z-20 flex h-[635px] w-[95%] flex-col items-center gap-[30px] rounded-[20px] bg-white/80 px-1 py-4 text-center text-black">
            <QuestionRadio
              question="การเรียนทำให้คุณรู้สึกอึดอัดคับข้องใจหรือไม่"
              onChange={onCbissQ12Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกหมดไฟเพราะการเรียนรู้ของคุณหรือไม่"
              onChange={onCbissQ13Change}
              values={["0", "25", "50", "75", "100"]}
            />
          </div>
        </div>

        {cbissQ12 && cbissQ13 && (
          <Link href="/2-6">
            <div className="fixed bottom-16 flex w-screen justify-center">
              <button className="z-20 bg-white text-black">ถัดไป</button>
            </div>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
