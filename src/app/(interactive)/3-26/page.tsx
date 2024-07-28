"use client";
import { useState, useEffect } from "react";
import ChoicePane3 from "~/component/choicePane3";
import { motion } from "framer-motion";
import Link from "next/link";
import { FormMappers } from "~/service/FormMappers";
import { FormServices } from "~/service/FormServices";

export default function Page() {
  const [answer1, setAnswer1] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("dass21Q21", answer1);
  }, [answer1]);

  const submitMedForm = async () => {
    void FormServices.createForm(await FormMappers.mapForm());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="grid justify-items-center"
    >
      <div className="item-center tex mt-[15%] grid justify-items-center rounded-xl bg-white p-[5%]">
        <h1>ข้อความที่ตรงกับความรู้สึกของท่านมากสุด</h1>
        <h1>ในช่วง 2 สัปดาห์ที่ผ่านมา</h1>
      </div>
      <div className="w-screen">
        <div className="absolute -z-[50] ml-[5%] mt-[7%] min-h-[55%] min-w-[90%] rounded-[20px] bg-white opacity-[50%]"></div>
        <div className="z-[50] mt-[5%] grid justify-items-center gap-y-3 pb-[5%] pt-[17%] opacity-[100%]">
          <ChoicePane3
            question="ฉันรู้สึกว่าชีวิตไม่มีความหมาย"
            setAnswer={setAnswer1}
          ></ChoicePane3>
        </div>
      </div>

      <img src="/img/3-26.webp" className="absolute bottom-[15%] -z-[50]"></img>
      {answer1 && (
        <Link className="fixed bottom-7 left-[36%] z-50" href="/4-1">
          <button
            className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl"
            onClick={submitMedForm}
          >
            ถัดไป
          </button>
        </Link>
      )}
    </motion.div>
  );
}
