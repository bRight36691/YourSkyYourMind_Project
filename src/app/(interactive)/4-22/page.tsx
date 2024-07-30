"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ResultIGTemplate } from "~/component/ResultIGTemplate";

export default function Page() {
  const [depressionScore, setDepressionScore] = useState<number>(0);
  const [anxietyScore, setAnxietyScore] = useState<number>(0);
  const [stressScore, setStressScore] = useState<number>(0);

  const states = [" ปกติ", " ต่ำ", " ปานกลาง", " รุนแรง", " รุนแรงที่สุด"];
  const textColors = [
    "text-noBurnout",
    "text-noBurnout",
    "text-mediumBurnout",
    "text-highBurnout",
    "text-severeBurnout",
  ];

  useEffect(() => {
    // depression
    const depressionSum =
      Number(localStorage.getItem("dass21Q3")) +
      Number(localStorage.getItem("dass21Q5")) +
      Number(localStorage.getItem("dass21Q10")) +
      Number(localStorage.getItem("dass21Q13")) +
      Number(localStorage.getItem("dass21Q16")) +
      Number(localStorage.getItem("dass21Q17")) +
      Number(localStorage.getItem("dass21Q21"));
    if (depressionSum < 5) {
      setDepressionScore(0);
    } else if (depressionSum < 7) {
      setDepressionScore(1);
    } else if (depressionSum < 11) {
      setDepressionScore(2);
    } else if (depressionSum < 14) {
      setDepressionScore(3);
    } else {
      setDepressionScore(4);
    }

    // anxiety
    const anxietySum =
      Number(localStorage.getItem("dass21Q2")) +
      Number(localStorage.getItem("dass21Q4")) +
      Number(localStorage.getItem("dass21Q7")) +
      Number(localStorage.getItem("dass21Q9")) +
      Number(localStorage.getItem("dass21Q15")) +
      Number(localStorage.getItem("dass21Q19")) +
      Number(localStorage.getItem("dass21Q20"));
    if (anxietySum < 4) {
      setAnxietyScore(0);
    } else if (anxietySum < 6) {
      setAnxietyScore(1);
    } else if (anxietySum < 8) {
      setAnxietyScore(2);
    } else if (anxietySum < 10) {
      setAnxietyScore(3);
    } else {
      setAnxietyScore(4);
    }

    // stress
    const stressSum =
      Number(localStorage.getItem("dass21Q1")) +
      Number(localStorage.getItem("dass21Q6")) +
      Number(localStorage.getItem("dass21Q8")) +
      Number(localStorage.getItem("dass21Q11")) +
      Number(localStorage.getItem("dass21Q12")) +
      Number(localStorage.getItem("dass21Q14")) +
      Number(localStorage.getItem("dass21Q18"));
    if (stressSum < 8) {
      setStressScore(0);
    } else if (stressSum < 10) {
      setStressScore(1);
    } else if (stressSum < 13) {
      setStressScore(2);
    } else if (stressSum < 17) {
      setStressScore(3);
    } else {
      setStressScore(4);
    }
  }, []);

  return (
    <div className="bg-result overflow-y-scroll bg-cover bg-top bg-no-repeat object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="mb-20 mt-[200px] flex flex-col items-center gap-4 text-center text-black">
          <div className="text-sm">
            <p>คะแนนต่าง ๆ ในด้านอาการ ซึมเศร้า / วิตกกังวล / เครียด</p>
            <p>โดยอ้างอิงจากแบบทดสอบ DASS-21</p>
          </div>
          <div className="mt-4 flex w-full flex-col items-center gap-2">
            <div className="bg-blueDass21 flex h-12 w-1/3 items-center justify-center rounded-[10px] text-center font-medium">
              <p>อาการซึมเศร้า</p>
            </div>
            {depressionScore === 0 && (
              <p className="text-sm">
                คุณ
                <span className="text-noBurnout font-semibold">
                  ไม่มีภาวะที่เสี่ยงต่ออาการซึมเศร้า
                </span>
              </p>
            )}
            {depressionScore !== 0 && (
              <p className="text-sm">
                คุณมีอาการซึมเศร้า
                <span
                  className={`font-semibold ${textColors[depressionScore]}`}
                >
                  {states[depressionScore]}
                </span>
              </p>
            )}
          </div>
          <div className="mt-4 flex w-full flex-col items-center gap-2">
            <div className="bg-blueDass21 flex h-12 w-1/3 items-center justify-center rounded-[10px] text-center font-medium">
              <p>อาการวิตกกังวล</p>
            </div>
            {anxietyScore === 0 && (
              <p className="text-sm">
                คุณ
                <span className="text-noBurnout font-semibold">
                  ไม่มีภาวะที่เสี่ยงต่ออาการวิตกกังวล
                </span>
              </p>
            )}
            {anxietyScore !== 0 && (
              <p className="text-sm">
                คุณมีอาการวิตกกังวล
                <span className={`font-semibold ${textColors[anxietyScore]}`}>
                  {states[anxietyScore]}
                </span>
              </p>
            )}
          </div>
          <div className="mt-4 flex w-full flex-col items-center gap-2">
            <div className="bg-blueDass21 flex h-12 w-1/3 items-center justify-center rounded-[10px] text-center font-medium">
              <p>อาการเครียด</p>
            </div>
            {stressScore === 0 && (
              <p className="text-sm">
                คุณ
                <span className="text-noBurnout font-semibold">
                  ไม่มีภาวะที่เสี่ยงต่ออาการเครียด
                </span>
              </p>
            )}
            {stressScore !== 0 && (
              <p className="text-sm">
                คุณมีอาการเครียด
                <span className={`font-semibold ${textColors[stressScore]}`}>
                  {states[stressScore]}
                </span>
              </p>
            )}
          </div>
          <p className="mt-6 text-xl">ติดต่อ ig : @yourskyyourmind</p>
          <ResultIGTemplate />
        </div>
        <div className="fixed bottom-[5%] z-20 flex w-screen justify-center">
          <Link href="/4-23">
            <button className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm">
              ถัดไป
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
