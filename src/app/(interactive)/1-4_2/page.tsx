"use client";
import Link from "next/link";
import { useState } from "react";
import { DropDown } from "~/component/inputs/DropDown";
import { MovingSky } from "~/component/bg/MovingSky";
import { motion } from "framer-motion";

export default function Page() {
  const [age, setAge] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");

  const occupations = () => {
    return [
      "นักเรียนประถม",
      "นักเรียนมัธยมต้น",
      "นักเรียนมัธยมปลาย",
      "นิสิตนักศึกษา",
      "วัยทำงาน",
      "ว่างงาน/เกษียณ",
      "อื่นๆ",
    ];
  };

  const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const onOccupationChange = (occupation: string): void => {
    setOccupation(occupation);
  };

  const onNextButtonClick = (): void => {
    const generalInformation = {
      age,
      occupation,
    };
    localStorage.setItem(
      "generalInformation",
      JSON.stringify(generalInformation),
    );
    localStorage.setItem("age", age);
  };

  return (
    <div className="overflow-hidden object-none">
      <MovingSky />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="fixed top-60 z-10 flex w-full flex-col items-center gap-6 text-black">
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-grayBlue">
              อายุ <span className="text-redError">*</span>
            </p>
            <input
              placeholder="พิมพ์เพื่อตอบ"
              id="age"
              type="number"
              name="age"
              className="h-12 w-[192px] rounded-xl border-[1.5px] border-solid bg-white p-3 pt-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-textLink focus:outline-none focus:ring-0"
              onChange={onAgeChange}
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-grayBlue">
              เลือกประเภทของผู้เล่น <span className="text-redError">*</span>
            </p>
            <DropDown
              choices={occupations()}
              choiceSelection={onOccupationChange}
              selectChoice={occupation}
              isLargeChoice={true}
              isMed={false}
            />
          </div>
        </div>

        {age && occupation && (
          <Link href="/1-5">
            <div className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm">
              <button
                className="z-20 bg-white text-black"
                onClick={onNextButtonClick}
              >
                ถัดไป
              </button>
            </div>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
