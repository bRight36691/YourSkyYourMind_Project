"use client";
import Link from "next/link";
import { useState } from "react";
import { DropDown } from "~/component/inputs/DropDown";
import { MovingSky } from "~/component/bg/MovingSky";
import { motion } from "framer-motion";

export default function Page() {
  const [mentalDisorder, setMentalDisorder] = useState<string>("");
  const [moreMentalDisorder, setMoreMentalDisorder] = useState<string>("");
  const [financialStatus, setFinancialStatus] = useState<string>("");
  const [sleepHour, setSleepHour] = useState<string>("");
  const [exerciseDay, setExerciseDay] = useState<string>("");
  const [cigarette, setCigarette] = useState<string>("");
  const [alcoholicDrink, setAlcoholicDrink] = useState<string>("");
  const [isSleepHourError, setIsSleepHourError] = useState<boolean>(false);
  const [isExerciseDayError, setIsExerciseDayError] = useState<boolean>(false);

  const mentalDisorders = () => {
    return ["ไม่มี", "ซึมเศร้า", "ภาวะวิตกกังวล", "อื่น ๆ"];
  };

  const financialStatuses = () => {
    return [
      "มีรายได้พอและมีเงินเก็บ",
      "มีรายได้พอแต่ไม่มีเงินเก็บ",
      "มีรายได้ไม่พอรายจ่าย",
    ];
  };

  const cigarettes = () => {
    return ["ไม่เคยสูบ", "เคยสูบ แต่เลิกแล้ว", "สูบบุหรี่"];
  };

  const alcoholicDrinks = () => {
    return ["ไม่ดื่ม", "ดื่ม"];
  };

  const onMentalDisorderChange = (mentalDisorder: string): void => {
    setMentalDisorder(mentalDisorder);
  };

  const onMoreMentalDisorderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMoreMentalDisorder(e.target.value);
  };

  const onFinancialStatusChange = (financialStatus: string): void => {
    setFinancialStatus(financialStatus);
  };

  const onSleepHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9]$|1[0-9]|2[0-4]/gm;
    if (e.target.value === "" || re.test(e.target.value)) {
      setSleepHour(e.target.value);
      setIsSleepHourError(false);
    } else {
      setSleepHour("");
      setIsSleepHourError(true);
    }
  };

  const onExerciseDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /[0-7]/gm;
    if (e.target.value === "" || re.test(e.target.value)) {
      setExerciseDay(e.target.value);
      setIsExerciseDayError(false);
    } else {
      setExerciseDay("");
      setIsExerciseDayError(true);
    }
  };

  const onCigaretteChange = (cigarette: string): void => {
    setCigarette(cigarette);
  };

  const onAlcoholicDrinkChange = (alcoholicDrink: string): void => {
    setAlcoholicDrink(alcoholicDrink);
  };

  const onNextButtonClick = (): void => {
    localStorage.setItem(
      "mentalDisorder",
      String(mentalDisorders().findIndex((e) => e === mentalDisorder) + 1),
    );
    localStorage.setItem("moreMentalDisorder", moreMentalDisorder);
    localStorage.setItem(
      "financialStatus",
      String(financialStatuses().findIndex((e) => e === financialStatus) + 1),
    );
    localStorage.setItem("sleepHour", sleepHour);
    localStorage.setItem("exerciseDay", exerciseDay);
    localStorage.setItem(
      "cigarette",
      String(cigarettes().findIndex((e) => e === cigarette) + 1),
    );
    localStorage.setItem(
      "alcoholicDrink",
      String(alcoholicDrinks().findIndex((e) => e === alcoholicDrink) + 1),
    );
  };

  return (
    <div className="overflow-y-scroll">
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
        <div className="z-10 mt-12 flex w-full flex-col items-center text-black">
          <div className="mt-4 grid w-[85%] gap-3">
            <div className="grid gap-1">
              <p className="text-sm text-grayBlue">
                โรคประจำตัวทางจิตเวช <span className="text-redError">*</span>
              </p>
              <DropDown
                choices={mentalDisorders()}
                choiceSelection={onMentalDisorderChange}
                selectChoice={mentalDisorder}
                isLargeChoice={true}
              />
            </div>
            {mentalDisorder === "อื่น ๆ" && (
              <div className="grid gap-1">
                <p className="text-sm text-grayBlue">อื่น ๆ</p>
                <input
                  placeholder="พิมพ์เพื่อตอบ"
                  id="moreMentalDisorder"
                  type="text"
                  maxLength={80}
                  name="moreMentalDisorder"
                  className="h-12 w-[195px] rounded-xl border-[1.5px] border-solid bg-white p-3 pt-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-textLink focus:outline-none focus:ring-0"
                  onChange={onMoreMentalDisorderChange}
                />
              </div>
            )}
            <div className="grid gap-1">
              <p className="text-sm text-grayBlue">
                ท่านคิดว่าสถานะทางการเงินของท่านเป็นอย่างไร{" "}
                <span className="text-redError">*</span>
              </p>
              <DropDown
                choices={financialStatuses()}
                choiceSelection={onFinancialStatusChange}
                selectChoice={financialStatus}
                isLargeChoice={true}
              />
            </div>
            <div className="grid gap-1">
              <p className="text-sm text-grayBlue">
                ใน 1 เดือนที่ผ่านมา จำนวนชั่วโมงการนอนจริงของท่าน{" "}
                <span className="text-redError">*</span>
              </p>
              <p className="text-sm text-grayBlue">
                เฉลี่ย ..... ชั่วโมงต่อวัน
              </p>
              <input
                placeholder="พิมพ์เพื่อตอบ"
                id="sleepHour"
                type="text"
                maxLength={2}
                name="sleepHour"
                pattern="[0-9]*"
                className="h-12 w-[129px] rounded-xl border-[1.5px] border-solid bg-white p-3 pt-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-textLink focus:outline-none focus:ring-0"
                onChange={onSleepHourChange}
              />
              {isSleepHourError && (
                <div className="pointer-events-none absolute mt-12 h-12 w-[129px] rounded-xl border-[1.5px] border-solid shadow-sm ring-1 ring-inset ring-redError"></div>
              )}
            </div>
            <div className="grid gap-1">
              <p className="text-sm text-grayBlue">
                ท่านออกกำลังกายจนทำให้อัตราหายใจเพิ่มขึ้นต่อเนื่อง{" "}
                <span className="text-redError">*</span>
              </p>
              <p className="text-sm text-grayBlue">
                อย่างน้อย 30 นาที (เช่น การเล่นกีฬา เดินเร็ว ขี่จักรยาน)
              </p>
              <p className="text-sm text-grayBlue">จำนวน ..... วันต่อสัปดาห์</p>
              <input
                placeholder="พิมพ์เพื่อตอบ"
                id="exerciseDay"
                type="text"
                maxLength={1}
                name="exerciseDay"
                pattern="[0-9]*"
                className="h-12 w-[129px] rounded-xl border-[1.5px] border-solid bg-white p-3 pt-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-textLink focus:outline-none focus:ring-0"
                onChange={onExerciseDayChange}
              />
              {isExerciseDayError && (
                <div className="pointer-events-none absolute mt-[72px] h-12 w-[129px] rounded-xl border-[1.5px] border-solid shadow-sm ring-1 ring-inset ring-redError"></div>
              )}
            </div>
            <div className="grid gap-1">
              <p className="text-sm text-grayBlue">
                ท่านสูบบุหรี่หรือไม่ <span className="text-redError">*</span>
              </p>
              <DropDown
                choices={cigarettes()}
                choiceSelection={onCigaretteChange}
                selectChoice={cigarette}
                isLargeChoice={true}
              />
            </div>
            <div className="grid gap-1">
              <p className="text-sm text-grayBlue">
                ในช่วงสัปดาห์ที่ผ่านมา ท่านดื่มเครื่องดื่มที่มีแอลกอฮอล์หรือไม่{" "}
                <span className="text-redError">*</span>
              </p>
              <DropDown
                choices={alcoholicDrinks()}
                choiceSelection={onAlcoholicDrinkChange}
                selectChoice={alcoholicDrink}
                isLargeChoice={true}
              />
            </div>
          </div>

          {mentalDisorder &&
            (mentalDisorder !== "อื่น ๆ" || moreMentalDisorder) &&
            financialStatus &&
            sleepHour &&
            exerciseDay &&
            cigarette &&
            alcoholicDrink && (
              <Link href="/1-5">
                <div className="mb-4 mt-12 flex w-full justify-center">
                  <button
                    className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm"
                    onClick={onNextButtonClick}
                  >
                    ถัดไป
                  </button>
                </div>
              </Link>
            )}
        </div>
      </motion.div>
    </div>
  );
}
