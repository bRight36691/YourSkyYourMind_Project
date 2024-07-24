"use client";

import ChoicePane1 from "~/component/choicePane1";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ChoicePane3 from "~/component/choicePane3";

export default function Page() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [answer5, setAnswer5] = useState<string>("");
  const [canNext, setCanNext] = useState<boolean>(false);

  const submit = () => {
    localStorage.setItem("cbissQ7", answer1);
    localStorage.setItem("cbissQ8", answer2);
    localStorage.setItem("cbissQ9", answer3);
    localStorage.setItem("cbissQ10", answer4);
    localStorage.setItem("cbissQ11", answer5);
  };

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
    <div className="grid h-screen justify-items-center bg-scene2 text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="mb-[10%] mt-[6%] h-[80%] w-[95%] rounded-3xl bg-white"
      >
        <div className="grid justify-items-center gap-y-10 pb-[5%] pt-[7%]">
          <ChoicePane1
            question="คุณรู้สึกหมดเรี่ยวแรงในวันทำงานใช่หรือไม่"
            setAnswer={setAnswer1}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณรู้สึกเหนื่อยในตอนเช้าเมื่อคิดถึงงานที่ต้องทำในวันใหม่หรือไม่"
            setAnswer={setAnswer2}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณรู้สึกว่าทุกชั่วโมงในการทำงานเป็นเรื่องน่าเหน็ดเหนื่อยหรือไม่"
            setAnswer={setAnswer3}
          ></ChoicePane1>
          <ChoicePane3
            question="คุณมีพลังเหลือพอสำหรับครอบครัวและเพื่อนๆ ในช่วงเวลาพักผ่อนหรือไม่"
            setAnswer={setAnswer4}
          ></ChoicePane3>
          <ChoicePane1
            question="การเรียนทำให้คุณรู้สึกเหนื่อยใจหรือไม่"
            setAnswer={setAnswer5}
          ></ChoicePane1>
        </div>
      </motion.div>

      {canNext && (
        <Link className="fixed bottom-2 left-[36%] z-50" href="/2-5">
          <button
            className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl"
            onClick={submit}
          >
            ถัดไป
          </button>
        </Link>
      )}
    </div>
  );
}
