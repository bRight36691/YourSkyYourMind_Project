"use client";

import ChoicePane2 from "~/component/choicePane2";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [canNext, setCanNext] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("dreem12Q11", answer1);
    localStorage.setItem("dreem12Q12", answer2);
  }, [answer1, answer2]);

  useEffect(() => {
    if (answer1 !== "" && answer2 !== "") {
      setCanNext(true);
    } else {
      setCanNext(false);
    }
  }, [answer1, answer2]);

  return (
    <div className="grid h-screen justify-items-center bg-scene2 text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="mb-[10%] mt-[6%] h-[80%] w-[95%] gap-y-5 rounded-3xl bg-white"
      >
        <div className="grid justify-items-center gap-y-7 pb-[5%] pt-[7%]">
          <ChoicePane2
            question="ที่นี่มีระบบการช่วยเหลือที่ดีสำหรับนักศึกษาที่มีปัญหาเครียด"
            setAnswer={setAnswer1}
          ></ChoicePane2>
          <ChoicePane2
            question="รูปแบบการดำเนินชีวิตทั่วไปของฉันเป็นไปด้วยดี"
            setAnswer={setAnswer2}
          ></ChoicePane2>
        </div>
      </motion.div>

      {canNext && (
        <Link className="fixed bottom-3 left-[36%] z-50" href="/2-16">
          <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
            ถัดไป
          </button>
        </Link>
      )}
    </div>
  );
}
