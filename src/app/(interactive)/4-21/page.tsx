"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ResultIGTemplate } from "~/component/ResultIGTemplate";
import { FormServices } from "~/service/FormServices";

export default function Page() {
  const [isMedStudent, setIsMedStudent] = useState<string>();
  const [burnoutScore, setBurnoutScore] = useState<string>();
  const burnoutLevel = Math.min(
    Math.max(Math.floor(Number(burnoutScore) / 25) - 1, 0),
    3,
  );
  const [avgBurnoutScore, setAvgBurnoutScore] = useState<string>();

  const burnoutStates = [
    "ไม่มีภาวะหมดไฟ",
    "มีภาวะหมดไฟระดับปานกลาง",
    "มีภาวะหมดไฟสูง",
    "มีภาวะหมดไฟอย่างรุนแรง",
  ];
  const burnoutBorderColors = [
    "border-noBurnout",
    "border-mediumBurnout",
    "border-highBurnout",
    "border-severeBurnout",
  ];
  const burnoutTextColors = [
    "text-noBurnout",
    "text-mediumBurnout",
    "text-highBurnout",
    "text-severeBurnout",
  ];
  const burnoutRecommends = [
    "คุณดูแลจิตใจได้ดีระดับนึงเลย คุณเองก็สามารถเป็นหนึ่งในคนที่ช่วยรับฟังและบรรเทาอาการหมดไฟของผู้อื่นได้ และเพื่อป้องกันภาวะหมดไฟที่อาจเกิดขึ้นในอนาคต นอนหลับพักผ่อนให้เป็นเวลา รับประทานอาหารให้ครบ 5 หมู่ กินอาหารที่มีประโยชน์ ดื่มน้ำเปล่าเยอะ ๆ คิดบวก ฝึกทักษะการแก้ไขปัญหา เรียนรู้ที่จะยืดหยุ่นในสถานการณ์ต่าง ๆ รวมทั้งเปิดใจรับฟังความคิดเห็นของผู้อื่น และหากิจกรรมที่ผ่อนคลายทำในยามว่าง",
    "นอนหลับพักผ่อนให้เป็นเวลา อย่าเสียเวลาไปกับความกังวลในเรื่องงานของคุณ และพยายามพัฒนาทักษะในการจัดการปัญหา รับประทานอาหารให้ครบ 5 หมู่ กินอาหารที่มีประโยชน์ ดื่มน้ำเปล่าเยอะ ๆ ลดความเครียดลง โดยการหากิจกรรมทำนอกเวลา ฟังเพลง ดูหนัง ออกกำลังกาย เป็นไปได้ลาพักร้อนเป็นระยะเวลาสั้น ๆ",
    "คุณเริ่มมีอาการ เหนื่อยล้า อ่อนเพลีย มองโลกในแง่ลบ เบื่องาน ขาดแรงบันดาลใจในการทำงาน หรือประสิทธิภาพในการทำงานลดลง การรักษาด้วยการปรับพฤติกรรม คือ ออกกำลังกาย 150 นาที / สัปดาห์ ปรับพฤติกรรมการนอน ไม่นอนดึกจนเกินไป ให้ความสำคัญทั้งในแง่ปริมาณและคุณภาพของการนอน คิดบวก ลดความคาดหวังลง ทำกิจกรรมที่ชอบ ปรับสภาพแวดล้อมในการทำงาน และมองหาแรงบันดาลใจ ที่สำคัญ ขอความช่วยเหลือจากเพื่อนร่วมงานหรือคนรอบข้าง หากรู้สึกไม่ไหวหรือเหนื่อยเกินไป",
    "หากรู้สึกหมดไฟในการทำงาน เครียด หรือหดหู่มาก ๆ การขอความช่วยเหลือจากคนรอบข้างที่ไว้ใจและเข้าใจ เพื่อพูดคุย ระบายความเครียด จะช่วยบรรเทาอาการของภาวะ Burnout Syndrome ได้ แต่หากรู้สึกว่าอาการมีความรุนแรง และไม่สามารถรับมือได้ ควรรีบปรึกษาแพทย์หรือผู้เชี่ยวชาญ",
    "ทุกปัญหามีทางออกเสมอ และสิ่งสำคัญที่สุดของหลาย ๆ ปัญหา เพียงเราพยายามเริ่มต้นแก้ไขจากตัวเอง ก็จะทำให้ปัญหาต่าง ๆ คลี่คลายไปได้อย่างดี",
  ];

  useEffect(() => {
    const fetchAvgBurnoutScore = async () => {
      const response = (await FormServices.getAvgBurnoutScore()) ?? "0";
      setAvgBurnoutScore(Math.round(Number(response)).toFixed(0));
    };
    void fetchAvgBurnoutScore();
    setIsMedStudent(localStorage.getItem("isMedStudent") ?? "");
    setBurnoutScore(localStorage.getItem("burnoutScore") ?? "0");
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
        <div className="mb-20 mt-[190px] flex flex-col items-center gap-6 text-center text-black">
          <p>ผลคะแนนวัดระดับความ Burnout ของคุณ</p>
          <div
            className={`mt-2 flex w-4/5 flex-col items-center rounded-[20px] border-2 ${burnoutBorderColors[burnoutLevel]} noBurnout py-5 text-xl leading-loose`}
          >
            <p className="font-medium">คุณเสี่ยงอยู่ในเกณฑ์</p>
            <p className={`font-semibold ${burnoutTextColors[burnoutLevel]}`}>
              {burnoutStates[burnoutLevel]}
            </p>
          </div>
          <div className="w-[85%] text-sm leading-relaxed">
            <p className="font-semibold">คำแนะนำ</p>
            <p>{burnoutRecommends[burnoutLevel]}</p>
            {burnoutLevel === 3 && (
              <p className="mt-4">{burnoutRecommends[4]}</p>
            )}
          </div>
          <div className="bg-resultLine my-2 h-[1px] w-full" />
          <div className="text-xs font-medium leading-relaxed">
            <p className="text-pinkResult">
              ค่าเฉลี่ยของผู้เล่นทั้งหมด : {avgBurnoutScore}
            </p>
            <p className="text-blueResult">
              คะแนน Burnout ของคุณ : {burnoutScore}
            </p>
            <p>ติดต่อ ig : @yourskyyourmind</p>
            <p>หรือ สายด่วนสุขภาพจิต 1323</p>
          </div>
          <ResultIGTemplate />
        </div>
        <div className="fixed bottom-[5%] z-20 flex w-screen justify-center">
          {isMedStudent === "medStudent" && (
            <Link href="/4-22">
              <button className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm">
                ถัดไป
              </button>
            </Link>
          )}
          {isMedStudent !== "medStudent" && (
            <Link href="/1-1">
              <button className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm">
                เสร็จสิ้น
              </button>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
