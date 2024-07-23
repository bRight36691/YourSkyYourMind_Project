"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { QuestionRadio } from "~/component/inputs/QuestionRadio";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  const [cbissQ14, setCbissQ14] = useState<string>("");
  const [cbissQ15, setCbissQ15] = useState<string>("");
  const [cbissQ16, setCbissQ16] = useState<string>("");
  const [cbissQ17, setCbissQ17] = useState<string>("");

  const onCbissQ14Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ14(e.target.value);
    localStorage.setItem("cbissQ14", e.target.value);
  };

  const onCbissQ15Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ15(e.target.value);
    localStorage.setItem("cbissQ15", e.target.value);
  };

  const onCbissQ16Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ16(e.target.value);
    localStorage.setItem("cbissQ16", e.target.value);
  };

  const onCbissQ17Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ17(e.target.value);
    localStorage.setItem("cbissQ17", e.target.value);
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
              question="คุณรู้สึกว่าทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานได้ยากหรือไม่"
              onChange={onCbissQ14Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="การทำงานกับเพื่อนร่วมงานทำให้คุณหมดพลังหรือไม่"
              onChange={onCbissQ15Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกอึดอัดคับข้องใจเมื่อต้องทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานหรือไม่"
              onChange={onCbissQ16Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกว่าคุณต้องเป็นฝ่ายให้มากกว่ารับเมื่อทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานหรือไม่"
              onChange={onCbissQ17Change}
              values={["0", "25", "50", "75", "100"]}
            />
          </div>

          {cbissQ14 && cbissQ15 && cbissQ16 && cbissQ17 && (
            <Link href="/2-8">
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
