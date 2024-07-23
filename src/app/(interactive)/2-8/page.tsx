"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { QuestionRadio } from "~/component/inputs/QuestionRadio";
import { NextButton } from "~/component/NextButton";

export default function Page() {
  const [cbissQ18, setCbissQ18] = useState<string>("");
  const [cbissQ19, setCbissQ19] = useState<string>("");

  const onCbissQ18Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ18(e.target.value);
    localStorage.setItem("cbissQ18", e.target.value);
  };

  const onCbissQ19Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ19(e.target.value);
    localStorage.setItem("cbissQ19", e.target.value);
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
              question="คุณเบื่อที่จะทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานหรือไม่"
              onChange={onCbissQ18Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="บางครั้งคุณก็สงสัยว่าคุณจะสามารถทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานต่อไปไหวหรือไม่"
              onChange={onCbissQ19Change}
              values={["0", "25", "50", "75", "100"]}
            />
          </div>

          {cbissQ18 && cbissQ19 && (
            <Link href="/2-9">
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
