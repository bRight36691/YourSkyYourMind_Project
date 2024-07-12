"use client";
import Link from "next/link";
import { useState } from "react";
import { DropDown } from "~/component/inputs/DropDown";
import { MovingSky } from "~/component/bg/MovingSky";

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
  };

  return (
    <div className="overflow-hidden object-none">
      <MovingSky />

      <div className="fixed top-72 z-10 flex w-screen flex-col items-center gap-6 text-black">
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-grayBlue">
            อายุ <span className="text-redError">*</span>
          </p>
          <input
            placeholder="พิมพ์เพื่อตอบ"
            id="age"
            type="number"
            name="age"
            className="h-12 w-[129px] rounded-xl bg-white p-3 pt-4 shadow-sm ring-1 ring-inset ring-gray-300"
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
          />
        </div>
      </div>

      {age && occupation && (
        <Link href="/1-5">
          <div className="fixed bottom-32 flex w-screen justify-center">
            <button
              className="z-20 bg-white text-black"
              onClick={onNextButtonClick}
            >
              ถัดไป
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}
