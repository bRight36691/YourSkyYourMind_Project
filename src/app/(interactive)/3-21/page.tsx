"use client";
import { useState, useEffect } from "react";
import ChoicePane3 from "~/component/choicePane3";
import { motion } from "framer-motion";
import Link from "next/link";
import { RadioButton } from "~/component/inputs/RadioButton";

export default function Page() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("dass21Q1", answer1);
    localStorage.setItem("dass21Q2", answer2);
    localStorage.setItem("dass21Q3", answer3);
    localStorage.setItem("dass21Q4", answer4);
  }, [answer1, answer2, answer3, answer4]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="grid justify-items-center"
    >
      <div className="item-center tex mt-[15%] grid justify-items-center rounded-xl bg-white p-[5%]">
        <h1>ข้อความที่ตรงกับความรู้สึกของท่านมากสุด</h1>
        <h1>ในช่วง 2 สัปดาห์ที่ผ่านมา</h1>
      </div>
      <div className="w-screen">
        <div className="absolute -z-[50] ml-[5%] mt-[7%] min-h-[55%] min-w-[90%] rounded-[20px] bg-white opacity-[50%]"></div>
        <div className="mt-[5%] grid justify-items-center gap-y-3 pb-[5%] pt-[7%] opacity-[100%]">
          <ChoicePane3
            question="ฉันรู้สึกยากที่จะสงบจิตใจลง"
            setAnswer={setAnswer1}
          ></ChoicePane3>
          <ChoicePane3
            question="ฉันรู้สึกปากแห้งคอแห้ง"
            setAnswer={setAnswer2}
          ></ChoicePane3>
          <ChoicePane3
            question="ฉันแทบไม่รู้สึกอะไรดี ๆ เลย"
            setAnswer={setAnswer3}
          ></ChoicePane3>
          <ChoicePane3
            question="ฉันมีอาการหายใจผิดปกติ"
            setAnswer={setAnswer4}
          ></ChoicePane3>
        </div>
      </div>
      {answer1 && answer2 && answer3 && answer4 && (
        <Link className="fixed bottom-7 left-[36%] z-50" href="/3-22">
          <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
            ถัดไป
          </button>
        </Link>
      )}
    </motion.div>
  );
}
