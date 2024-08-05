"use client";

import ChoicePane1 from "~/component/choicePane1";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [canNext, setCanNext] = useState<boolean>(false);

  const submit = () => {
    localStorage.setItem("cbissQ18", answer1);
    localStorage.setItem("cbissQ19", answer2);
  };

  useEffect(() => {
    if (answer1 !== "" && answer2 !== "") {
      setCanNext(true);
    } else {
      setCanNext(false);
    }
  }, [answer1, answer2]);

  return (
    <div className="grid h-screen justify-items-center overflow-y-scroll bg-scene2 text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="mb-[10%] mt-[6%] h-max min-h-[80%] w-[95%] rounded-3xl bg-white"
      >
        <div className="grid justify-items-center gap-y-10 pb-[5%] pt-[7%]">
          <ChoicePane1
            question="คุณเบื่อที่จะทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานหรือไม่"
            setAnswer={setAnswer1}
          ></ChoicePane1>
          <ChoicePane1
            question="บางครั้งคุณก็สงสัยว่าคุณจะสามารถทำงานกับเพื่อนร่วมชั้นเรียน / เพื่อนที่ทำงานต่อไปไหวหรือไม่"
            setAnswer={setAnswer2}
          ></ChoicePane1>
        </div>
      </motion.div>

      {canNext && (
        <Link className="fixed bottom-2 left-[36%] z-50" href="/2-9">
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
