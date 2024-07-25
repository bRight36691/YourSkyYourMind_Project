"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NextButton } from "~/component/NextButton";
import { RI9Choices } from "~/component/inputs/RI9Choices";
import { useState } from "react";

export default function Page() {
  const [ri9Q7, setRi9Q7] = useState<string>("");

  const onRi9Q7Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRi9Q7(e.target.value);
    localStorage.setItem("ri9Q7", e.target.value);
  };

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
          <p className="mt-[166px]">ฉันคิดว่าฉันเอาชนะปัญหาได้แน่</p>
          <p className="mt-1">เพราะฉันก็เป็นคนมีความสามารถคนหนึ่ง</p>
        </div>

        <div className="fixed top-[272px] w-full items-center justify-center">
          <RI9Choices choiceSelection={onRi9Q7Change} />
        </div>

        {ri9Q7 && (
          <Link href="/3-13">
            <div className="fixed bottom-[10%] flex w-screen justify-center">
              <NextButton />
            </div>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
