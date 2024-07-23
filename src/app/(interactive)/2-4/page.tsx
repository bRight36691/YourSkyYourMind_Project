"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { QuestionRadio } from "~/component/inputs/QuestionRadio";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  const [cbissQ7, setCbissQ7] = useState<string>("");
  const [cbissQ8, setCbissQ8] = useState<string>("");
  const [cbissQ9, setCbissQ9] = useState<string>("");
  const [cbissQ10, setCbissQ10] = useState<string>("");
  const [cbissQ11, setCbissQ11] = useState<string>("");

  const onCbissQ7Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ7(e.target.value);
    localStorage.setItem("cbissQ7", e.target.value);
  };

  const onCbissQ8Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ8(e.target.value);
    localStorage.setItem("cbissQ8", e.target.value);
  };

  const onCbissQ9Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ9(e.target.value);
    localStorage.setItem("cbissQ9", e.target.value);
  };

  const onCbissQ10Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ10(e.target.value);
    localStorage.setItem("cbissQ10", e.target.value);
  };

  const onCbissQ11Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ11(e.target.value);
    localStorage.setItem("cbissQ11", e.target.value);
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
              question="คุณรู้สึกหมดเรี่ยวแรงในวันทำงานใช่หรือไม่"
              onChange={onCbissQ7Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกเหนื่อยในตอนเช้าเมื่อคิดถึงงานที่ต้องทำในวันใหม่หรือไม่"
              onChange={onCbissQ8Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกว่าทุกชั่วโมงในการทำงานเป็นเรื่องน่าเหน็ดเหนื่อยหรือไม่"
              onChange={onCbissQ9Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณมีพลังเหลือพอสำหรับครอบครัวและเพื่อนๆ ในช่วงเวลาพักผ่อนหรือไม่"
              onChange={onCbissQ10Change}
              values={["100", "75", "50", "25", "0"]}
            />
            <QuestionRadio
              question="การเรียนทำให้คุณรู้สึกเหนื่อยใจหรือไม่"
              onChange={onCbissQ11Change}
              values={["0", "25", "50", "75", "100"]}
            />
          </div>

          {cbissQ7 && cbissQ8 && cbissQ9 && cbissQ10 && cbissQ11 && (
            <Link href="/2-5">
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
