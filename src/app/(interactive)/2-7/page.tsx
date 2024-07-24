"use client";

import ChoicePane1 from "~/component/choicePane1";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [canNext, setCanNext] = useState<boolean>(false);

  const submit = () => {
    localStorage.setItem("cbissQ14", answer1);
    localStorage.setItem("cbissQ15", answer2);
    localStorage.setItem("cbissQ16", answer3);
    localStorage.setItem("cbissQ17", answer4);
  };

  useEffect(() => {
    if (answer1 !== "" && answer2 !== "" && answer3 !== "" && answer4 !== "") {
      setCanNext(true);
    } else {
      setCanNext(false);
    }
  }, [answer1, answer2, answer3, answer4]);

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
            question="คุณรู้สึกว่าทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานได้ยากหรือไม่"
            setAnswer={setAnswer1}
          ></ChoicePane1>
          <ChoicePane1
            question="การทำงานกับเพื่อนร่วมงานทำให้คุณหมดพลังหรือไม่"
            setAnswer={setAnswer2}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณรู้สึกอึดอัดคับข้องใจเมื่อต้องทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานหรือไม่"
            setAnswer={setAnswer3}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณรู้สึกว่าคุณต้องเป็นฝ่ายให้มากกว่ารับเมื่อทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานหรือไม่"
            setAnswer={setAnswer4}
          ></ChoicePane1>
        </div>
      </motion.div>

      {canNext && (
        <Link className="fixed bottom-2 left-[36%] z-50" href="/2-8">
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
