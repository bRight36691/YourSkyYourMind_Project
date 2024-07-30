"use client";

import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [backgroundName, setBackgroundName] = useState<string>("");
  const controls = useAnimationControls();
  const [isButtonClicked, setButtonClicked] = useState<boolean>(false);
  const [isBgChanged, setBgChanged] = useState<boolean>(false);

  const wrapperVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
    exit: {
      opacity: 1,
    },
  };

  const onNextButton = () => {
    setButtonClicked(true);
    void controls.start("visible");
  };

  useEffect(() => {
    if (isButtonClicked) {
      const timer = setTimeout(() => {
        setBgChanged(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isButtonClicked]);

  useEffect(() => {
    if (isBgChanged) {
      const timer = setTimeout(() => {
        router.push("/2-2");
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isBgChanged, router]);

  useEffect(() => {
    const userChoice = localStorage.getItem("selectedPlace");
    if (userChoice === "ใต้ร่มไม้ ที่คุ้นเคย") {
      setBackgroundName("/img/ใต้ร่มไม้ ที่คุ้นเคย.GIF");
    } else if (userChoice === "พระจันทร์และดาว ยามค่ำคืน") {
      setBackgroundName("/img/พระจันทร์และดาว ยามค่ำคืน.GIF");
    } else if (userChoice === "วิวภูเขา กว้างขวางท้าทาย") {
      setBackgroundName("/img/วิวภูเขา กว้างขวางท้าทาย.GIF");
    } else if (userChoice === "ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น") {
      setBackgroundName("/img/ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น.GIF");
    } else if (userChoice === "ในเมืองใหญ่ กับผู้คนที่รู้จัก") {
      setBackgroundName("/img/ในเมืองใหญ่ กับผู้คนที่รู้จัก.GIF");
    }
  }, []);

  return (
    <div className="overflow-hidden object-none">
      {isBgChanged && (
        <div className="pointer-events-none">
          <div className="fixed z-20 min-h-screen w-full bg-white" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // className="grid justify-items-center"
      >
        <img src={backgroundName} className="fixed min-h-screen" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="fixed ml-[14%] mt-[55%] text-center"
        >
          {!isButtonClicked && (
            <>
              <div className="fixed ml-[5%] mt-[15%] h-[15%] w-[70%] rounded-full bg-white opacity-100 blur-xl"></div>
              <div className="fixed ml-[12%] mt-[25%] text-[16px] text-black">
                <h1>ฉันเหนื่อยขนาดไหนกันแน่นะ...</h1>
              </div>
            </>
          )}
        </motion.div>

        {!isButtonClicked && (
          <div className="fixed bottom-[10%] left-[38%]">
            <button
              className="h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm"
              onClick={onNextButton}
            >
              ถัดไป
            </button>
          </div>
        )}
      </motion.div>
      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        animate={controls}
        exit="exit"
        className="pointer-events-none"
      >
        <div className="min-h-screen w-full bg-white" />
      </motion.div>
    </div>
  );
}
