"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { QuestionRadio } from "~/component/inputs/QuestionRadio";

export default function Page() {
  const [cbissQ1, setCbissQ1] = useState<string>("");
  const [cbissQ2, setCbissQ2] = useState<string>("");
  const [cbissQ3, setCbissQ3] = useState<string>("");
  const [cbissQ4, setCbissQ4] = useState<string>("");
  const [cbissQ5, setCbissQ5] = useState<string>("");
  const [cbissQ6, setCbissQ6] = useState<string>("");
  const isMedStudent = localStorage.getItem("isMedStudent");

  const onCbissQ1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ1(e.target.value);
    localStorage.setItem("cbissQ1", e.target.value);
  };

  const onCbissQ2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ2(e.target.value);
    localStorage.setItem("cbissQ2", e.target.value);
  };

  const onCbissQ3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ3(e.target.value);
    localStorage.setItem("cbissQ3", e.target.value);
  };

  const onCbissQ4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ4(e.target.value);
    localStorage.setItem("cbissQ4", e.target.value);
  };

  const onCbissQ5Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ5(e.target.value);
    localStorage.setItem("cbissQ5", e.target.value);
  };

  const onCbissQ6Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCbissQ6(e.target.value);
    localStorage.setItem("cbissQ6", e.target.value);
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
              question="คุณรู้สึกเหนื่อยบ่อยแค่ไหน"
              onChange={onCbissQ1Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกว่าร่างกายเหน็ดเหนื่อยอ่อนล้าบ่อยแค่ไหน"
              onChange={onCbissQ2Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกว่าเหนื่อยใจบ่อยแค่ไหน"
              onChange={onCbissQ3Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณคิดว่า “ทนไม่ไหวอีก” แล้วบ่อยแค่ไหน"
              onChange={onCbissQ4Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกเหนื่อยล้าหมดแรงบ่อยแค่ไหน"
              onChange={onCbissQ5Change}
              values={["0", "25", "50", "75", "100"]}
            />
            <QuestionRadio
              question="คุณรู้สึกอ่อนแอและเจ็บป่วยได้ง่ายบ่อยแค่ไหน"
              onChange={onCbissQ6Change}
              values={["0", "25", "50", "75", "100"]}
            />
          </div>
        </div>

        {cbissQ1 &&
          cbissQ2 &&
          cbissQ3 &&
          cbissQ4 &&
          cbissQ5 &&
          cbissQ6 &&
          (isMedStudent === "medStudent" ? (
            <Link href="/2-4">
              <div className="fixed bottom-16 flex w-screen justify-center">
                <button className="z-20 bg-white text-black">ถัดไป</button>
              </div>
            </Link>
          ) : (
            <Link href="/2-16">
              <div className="fixed bottom-16 flex w-screen justify-center">
                <button className="z-20 bg-white text-black">ถัดไป</button>
              </div>
            </Link>
          ))}
      </motion.div>
    </div>
  );
}
