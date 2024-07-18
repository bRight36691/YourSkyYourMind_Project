"use client";
import Link from "next/link";
import { useState } from "react";
import { DropDown } from "~/component/inputs/DropDown";
import { MovingSky } from "~/component/bg/MovingSky";
import { motion } from "framer-motion";

export default function Page() {
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [mentalDisorder, setMentalDisorder] = useState<string>("");
  const [gpax, setGpax] = useState<string>("");
  const [gpaxSatisfaction, setGpaxSatisfaction] = useState<string>("");
  const [university, setUniversity] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const sexes = () => {
    return ["ชาย", "หญิง"];
  };

  const mentalDisorders = () => {
    return ["ซึมเศร้า", "ภาวะวิตกกังวล", "ไม่มี"];
  };

  const gpaxSatisfactions = () => {
    return [
      "ไม่พึงพอใจอย่างมาก",
      "ไม่พึงพอใจ",
      "เฉย",
      "พึงพอใจ",
      "พึงพอใจอย่างมาก",
    ];
  };

  const universities = () => {
    return [
      "คณะแพทยศาสตร์ ศิริราชพยาบาล มหาวิทยาลัยมหิดล",
      "คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
      "คณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่",
      "คณะแพทยศาสตร์ โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล",
      "คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์",
      "คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น",
      "วิทยาลัยแพทยศาสตร์พระมงกุฎเกล้า",
      "คณะแพทยศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ",
      "คณะแพทยศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
      "คณะแพทยศาสตร์วชิรพยาบาล มหาวิทยาลัยนวมินทราธิราช",
      "คณะแพทยศาสตร์ มหาวิทยาลัยนเรศวร",
      "คณะแพทยศาสตร์ มหาวิทยาลัยมหาสารคาม",
      "สำนักวิชาแพทยศาสตร์ มหาวิทยาลัยเทคโนโลยีสุรนารี",
      "วิทยาลัยแพทยศาสตร์และการสาธารณสุข มหาวิทยาลัยอุบลราชธานี",
      "คณะแพทยศาสตร์ มหาวิทยาลัยบูรพา",
      "สำนักวิชาแพทยศาสตร์ มหาวิทยาลัยวลัยลักษณ์",
      "คณะแพทยศาสตร์ มหาวิทยาลัยนราธิวาสราชนครินทร์",
      "คณะแพทยศาสตร์ มหาวิทยาลัยพะเยา",
      "สำนักวิชาแพทยศาสตร์ มหาวิทยาลัยแม่ฟ้าหลวง",
      "คณะแพทยศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
      "วิทยาลัยแพทยศาสตร์ศรีสวางควัฒน ราชวิทยาลัยจุฬาภรณ์ (หลักสูตร 7 ปี)",
      "คณะแพทยศาสตร์ มหาวิทยาลัยเกษตรศาสตร์",
      "คณะแพทยศาสตร์ สถาบันพระบนมราชชนก",
      "วิทยาลัยแพทยศาสตร์ มหาวิทยาลัยรังสิต",
      "คณะแพทยศาสตร์ มหาวิทยาลัยสยาม",
      "คณะแพทยศาสตร์ มหาวิทยาลัยกรุงเทพธนบุรี ",
      "คณะแพทย์ศาสตร์มหาวิทยาลัยเวสเทิร์น",
      "วิทยาลัยแพทยศาสตร์นานาชาติจุฬาภรณ์ มหาวิทยาลัยธรรมศาสตร์",
    ];
  };

  const years = () => {
    return [
      "ชั้นปีที่ 1",
      "ชั้นปีที่ 2",
      "ชั้นปีที่ 3",
      "ชั้นปีที่ 4",
      "ชั้นปีที่ 5 ",
      "ชั้นปีที่ 6",
    ];
  };

  const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const onSexChange = (sex: string): void => {
    setSex(sex);
  };

  const onMentalDisorderChange = (mentalDisorder: string): void => {
    setMentalDisorder(mentalDisorder);
  };

  const onGpaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGpax(e.target.value);
  };

  const onGpaxSatisfactionChange = (gpaxSatisfactions: string): void => {
    setGpaxSatisfaction(gpaxSatisfactions);
  };

  const onUniversityChange = (university: string): void => {
    setUniversity(university);
  };

  const onYearChange = (year: string): void => {
    setYear(year);
  };

  const onNextButtonClick = (): void => {
    const generalInformation = {
      age,
      sex: sexes().findIndex((e) => e === sex),
      mentalDisorder: mentalDisorders().findIndex((e) => e === mentalDisorder),
    };
    const educationInformation = {
      gpax,
      gpaxSatisfaction:
        gpaxSatisfactions().findIndex((e) => e === gpaxSatisfaction) + 1,
      university: universities().findIndex((e) => e === university) + 1,
      year: years().findIndex((e) => e === year) + 1,
    };
    localStorage.setItem(
      "generalInformation",
      JSON.stringify(generalInformation),
    );
    localStorage.setItem(
      "educationInformation",
      JSON.stringify(educationInformation),
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
        <div className="fixed top-16 z-10 flex w-screen flex-col items-center text-black">
          <p className="text-xs font-bold">
            สำหรับนิสิตนักศึกษาแพทย์และนักเรียนแพทย์ทหาร
          </p>
          <div className="mt-3 flex flex-col gap-0.5 text-center text-[9px]">
            <p>
              เนื้อหาในเว็บนี้เป็นผลงานเพื่อประกอบงานวิจัยความชุกและปัจจัยที่เกี่ยวข้อง
            </p>
            <p>
              กับการเกิดภาวะหมดไฟในกลุ่มนักศึกษาแพทย์ในประเทศไทย (Prevalence and
              Factors Associated
            </p>
            <p>
              with Burnout Among Thai Medical Students)
              โดยเป็นออกแบบการสื่อสารเพื่อเล่าเรื่องราว
            </p>
            <p>ผ่านการให้ผู้เล่นมีส่วนร่วมด้วยทางทีมผู้วิจัย</p>
            <p>ขอให้อ่านข้อตกลงและยินยอมที่จะเข้าร่วมแบบทดสอบนี้</p>
          </div>
          <div className="mt-2 text-[13px] text-textLink underline">
            ข้อตกลงการเข้าร่วมตอบแบบสอบถาม
          </div>
          <div className="mt-4 grid w-[85%] grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-grayBlue">
                อายุ <span className="text-redError">*</span>
              </p>
              <input
                placeholder="พิมพ์เพื่อตอบ"
                id="age"
                type="number"
                name="age"
                className="h-12 w-[129px] rounded-xl border-[1.5px] border-solid bg-white p-3 pt-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-textLink focus:outline-none focus:ring-0"
                onChange={onAgeChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-grayBlue">
                เพศ <span className="text-redError">*</span>
              </p>
              <DropDown
                choices={sexes()}
                choiceSelection={onSexChange}
                selectChoice={sex}
                isLargeChoice={false}
              />
            </div>
            <div className="col-span-2 grid gap-1">
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
            <div className="col-span-2 grid gap-1">
              <p className="text-sm text-grayBlue">
                เกรดเฉลี่ยสะสม <span className="text-redError">*</span>
              </p>
              <input
                placeholder="พิมพ์เพื่อตอบ (เช่น 3.xx)"
                id="gpax"
                type="number"
                name="gpax"
                className="h-12 w-[195px] rounded-xl border-[1.5px] border-solid bg-white p-3 pt-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-textLink focus:outline-none focus:ring-0"
                onChange={onGpaxChange}
              />
            </div>
            <div className="col-span-2 grid gap-1">
              <p className="text-sm text-grayBlue">
                ความพึงพอใจในเกรดเฉลี่ยสะสม
                <span className="text-redError">*</span>
              </p>
              <DropDown
                choices={gpaxSatisfactions()}
                choiceSelection={onGpaxSatisfactionChange}
                selectChoice={gpaxSatisfaction}
                isLargeChoice={true}
              />
            </div>
            <div className="col-span-2 grid gap-1">
              <p className="text-sm text-grayBlue">
                สถาบันการศึกษา <span className="text-redError">*</span>
              </p>
              <DropDown
                choices={universities()}
                choiceSelection={onUniversityChange}
                selectChoice={university}
                isLargeChoice={true}
              />
            </div>
            <div className="col-span-2 grid gap-1">
              <p className="text-sm text-grayBlue">
                ชั้นปีที่ศึกษาอยู่ (ปีการศึกษา 2567){" "}
                <span className="text-redError">*</span>
              </p>
              <DropDown
                choices={years()}
                choiceSelection={onYearChange}
                selectChoice={year}
                isLargeChoice={true}
              />
            </div>
          </div>
        </div>

        {age &&
          sex &&
          mentalDisorder &&
          gpax &&
          gpaxSatisfaction &&
          university &&
          year && (
            <Link href="/1-5">
              <div className="fixed bottom-16 flex w-screen justify-center">
                <button
                  className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm"
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
