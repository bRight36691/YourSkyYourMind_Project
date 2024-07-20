"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [backgroundName, setBackgroundName] = useState<string>("");
  const router = useRouter();

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

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/2-2");
    }, 2750);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen w-full overflow-hidden bg-white object-none">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col justify-center overflow-hidden"
      >
        <Image
          src={backgroundName}
          alt="selected background"
          width={1080}
          height={1920}
          className="fixed min-h-screen object-cover"
        />
      </motion.div>
    </div>
  );
}
