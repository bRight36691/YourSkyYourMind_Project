"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { QuestionRadio } from "~/component/inputs/QuestionRadio";
import { NextButton } from "~/component/NextButton";

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
    <div className="h-screen w-full overflow-y-scroll bg-scene2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="flex w-full flex-col items-center">
          <div className="z-20 mt-20 flex h-[635px] w-[95%] flex-col items-center gap-[30px] rounded-[20px] bg-white/80 px-1 py-4 text-center text-black">
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

          {cbissQ12 && cbissQ13 && (
            <Link href="/2-6">
              <div className="mt-4 flex w-screen justify-center">
                <NextButton />
              </div>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
