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
  const [answer5, setAnswer5] = useState<string>("");
  const [answer6, setAnswer6] = useState<string>("");
  const [canNext, setCanNext] = useState<boolean>(false);
  const isMedStudent = localStorage.getItem("isMedStudent");

  const calculateBrunoutScore = (): string => {
    return Math.round(
      (Number(answer1) +
        Number(answer2) +
        Number(answer3) +
        Number(answer4) +
        Number(answer5) +
        Number(answer6)) /
        6,
    ).toFixed(0);
  };

  const submit = () => {
    localStorage.setItem("cbissQ1", answer1);
    localStorage.setItem("cbissQ2", answer2);
    localStorage.setItem("cbissQ3", answer3);
    localStorage.setItem("cbissQ4", answer4);
    localStorage.setItem("cbissQ5", answer5);
    localStorage.setItem("cbissQ6", answer6);
    localStorage.setItem("burnoutScore", calculateBrunoutScore());
  };

  useEffect(() => {
    if (
      answer1 !== "" &&
      answer2 !== "" &&
      answer3 !== "" &&
      answer4 !== "" &&
      answer5 !== "" &&
      answer6 !== ""
    ) {
      setCanNext(true);
    } else {
      setCanNext(false);
    }
  }, [answer1, answer2, answer3, answer4, answer5, answer6]);

  return (
    <div className="grid h-screen justify-items-center overflow-y-scroll bg-scene2 text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="mb-[10%] mt-[6%] h-max min-h-[83%] w-[95%] rounded-3xl bg-white"
      >
        <div className="grid justify-items-center gap-y-10 pb-[5%] pt-[7%]">
          <ChoicePane1
            question="คุณรู้สึกเหนื่อยบ่อยแค่ไหน"
            setAnswer={setAnswer1}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณรู้สึกว่าร่างกายเหน็ดเหนื่อยอ่อนล้าบ่อยแค่ไหน"
            setAnswer={setAnswer2}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณรู้สึกว่าเหนื่อยใจบ่อยแค่ไหน"
            setAnswer={setAnswer3}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณคิดว่า “ทนไม่ไหวอีก” แล้วบ่อยแค่ไหน"
            setAnswer={setAnswer4}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณรู้สึกเหนื่อยล้าหมดแรงบ่อยแค่ไหน"
            setAnswer={setAnswer5}
          ></ChoicePane1>
          <ChoicePane1
            question="คุณรู้สึกอ่อนแอและเจ็บป่วยได้ง่ายบ่อยแค่ไหน"
            setAnswer={setAnswer6}
          ></ChoicePane1>
        </div>
      </motion.div>

      {canNext && isMedStudent === "medStudent" && (
        <Link className="fixed bottom-2 left-[36%] z-50" href="/2-4">
          <button
            className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl"
            onClick={submit}
          >
            ถัดไป
          </button>
        </Link>
      )}
      {canNext && isMedStudent !== "medStudent" && (
        <Link className="fixed bottom-2 left-[36%] z-50" href="/2-16">
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
