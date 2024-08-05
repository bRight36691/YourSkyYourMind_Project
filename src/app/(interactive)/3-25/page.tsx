"use client";
import { useState, useEffect } from "react";
import ChoicePane3 from "~/component/choicePane3";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("dass21Q17", answer1);
    localStorage.setItem("dass21Q18", answer2);
    localStorage.setItem("dass21Q19", answer3);
    localStorage.setItem("dass21Q20", answer4);
  }, [answer1, answer2, answer3, answer4]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="grid justify-items-center overflow-y-scroll"
    >
      <div className="item-center tex mt-[15%] grid justify-items-center rounded-xl bg-white p-[5%]">
        <h1>ข้อความที่ตรงกับความรู้สึกของท่านมากสุด</h1>
        <h1>ในช่วง 2 สัปดาห์ที่ผ่านมา</h1>
      </div>
      <div className="w-screen">
        <div className="ml-[5%] mt-[7%] h-max min-h-[55%] w-[90%] rounded-[20px] bg-[rgba(255,255,255,0.5)]">
          <div className="mt-[5%] grid justify-items-center gap-y-3 pb-[5%] pt-[7%] opacity-[100%]">
            <ChoicePane3
              question="ฉันรู้สึกเป็นคนไม่มีคุณค่า"
              setAnswer={setAnswer1}
            ></ChoicePane3>
            <ChoicePane3
              question="ฉันรู้สึกค่อนข้างฉุนเฉียวง่าย"
              setAnswer={setAnswer2}
            ></ChoicePane3>
            <ChoicePane3
              question="ฉันรับรู้ถึงการทำงานของหัวใจแม้ในตอนที่ฉันไม่ได้ออกแรง#(เช่นรู้สึกว่าหัวใจเต้นเร็วขึ้นหรือเต้นไม่เป็นจังหวะ)"
              setAnswer={setAnswer3}
            ></ChoicePane3>
            <ChoicePane3
              question="ฉันรู้สึกกลัวโดยไม่มีเหตุผล"
              setAnswer={setAnswer4}
            ></ChoicePane3>
          </div>
        </div>
      </div>
      {answer1 && answer2 && answer3 && answer4 && (
        <Link className="fixed bottom-7 left-[36%] z-50" href="/3-26">
          <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
            ถัดไป
          </button>
        </Link>
      )}
    </motion.div>
  );
}
