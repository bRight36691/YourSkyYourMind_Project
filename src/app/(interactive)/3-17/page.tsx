"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [importantPerson, setImportantPerson] = useState<string>("");
  useEffect(() => {
    const getName = localStorage.getItem("importantPerson");
    setImportantPerson(getName ?? "");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="grid place-items-center items-center"
    >
      <div className="absolute left-[17%] top-[26%] -z-[50] h-[25%] w-[70%] rounded-[80%] bg-white opacity-[70%] blur-[20px]"></div>
      <div className="pt-[70%] text-center text-[20px] drop-shadow-lg">
        <h1>
          <span className="text-red-500">{importantPerson}</span> เดินมานั่งข้าง
          ๆ คุณ
        </h1>
      </div>

      <Link className="fixed bottom-10 left-[36%] z-50" href="/3-18">
        <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
          ถัดไป
        </button>
      </Link>
    </motion.div>
  );
}
