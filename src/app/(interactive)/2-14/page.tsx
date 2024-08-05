"use client";

import ChoicePane2 from "~/component/choicePane2";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [answer5, setAnswer5] = useState<string>("");
  const [canNext, setCanNext] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("dreem12Q6", answer1);
    localStorage.setItem("dreem12Q7", answer2);
    localStorage.setItem("dreem12Q8", answer3);
    localStorage.setItem("dreem12Q9", answer4);
    localStorage.setItem("dreem12Q10", answer5);
  }, [answer1, answer2, answer3, answer4, answer5]);

  useEffect(() => {
    if (
      answer1 !== "" &&
      answer2 !== "" &&
      answer3 !== "" &&
      answer4 !== "" &&
      answer5 !== ""
    ) {
      setCanNext(true);
    } else {
      setCanNext(false);
    }
  }, [answer1, answer2, answer3, answer4, answer5]);

  return (
    <div className="grid h-screen justify-items-center overflow-y-scroll bg-scene2 text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="mb-[10%] mt-[6%] h-max min-h-[80%] w-[95%] gap-y-5 rounded-3xl bg-white"
      >
        <div className="grid justify-items-center gap-y-5 pb-[5%] pt-[7%]">
          <ChoicePane2
            question="ฉันรู้สึกว่าฉันได้รับการเตรียมตัวอย่างดีสำหรับวิชาชีพ"
            setAnswer={setAnswer1}
          ></ChoicePane2>
          <ChoicePane2
            question="ทักษะการแก้ไขปัญหาของฉันได้รับการพัฒนา"
            setAnswer={setAnswer2}
          ></ChoicePane2>
          <ChoicePane2
            question="สิ่งที่ฉันต้องเรียนส่วนมากเกี่ยวข้องกับวิชาชีพ"
            setAnswer={setAnswer3}
          ></ChoicePane2>
          <ChoicePane2
            question="ฉันมีสมาธิในการเรียนอย่างดี"
            setAnswer={setAnswer4}
          ></ChoicePane2>
          <ChoicePane2
            question="บรรยากาศการเรียนที่นี่กระตุ้นให้ฉันได้เรียนรู้"
            setAnswer={setAnswer5}
          ></ChoicePane2>
        </div>
      </motion.div>

      {canNext && (
        <Link className="fixed bottom-3 left-[36%] z-50" href="/2-15">
          <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
            ถัดไป
          </button>
        </Link>
      )}
    </div>
  );
}
