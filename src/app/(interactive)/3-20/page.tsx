"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FormMappers } from "~/service/FormMappers";
import { FormServices } from "~/service/FormServices";

export default function Page() {
  const [isMedStudent, setIsMedStudent] = useState<string>();
  useEffect(() => {
    setIsMedStudent(localStorage.getItem("isMedStudent") ?? "");
  }, []);

  const submitNonMedForm = async () => {
    void FormServices.createForm(await FormMappers.mapForm());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="grid place-items-center items-center"
    >
      <div className="absolute left-[10%] top-[26%] -z-[50] h-[25%] w-[90%] rounded-[80%] bg-white opacity-[70%] blur-[20px]"></div>
      <div className="pt-[70%] text-center text-[20px] drop-shadow-lg">
        <h1>แต่ถ้ามีอะไรก็มาเล่าให้ฟังได้เสมอนะ</h1>
      </div>

      {isMedStudent === "medStudent" && (
        <Link className="fixed bottom-10 left-[36%] z-50" href="/3-21">
          <button className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl">
            ถัดไป
          </button>
        </Link>
      )}

      {isMedStudent !== "medStudent" && (
        <Link className="fixed bottom-10 left-[36%] z-50" href="/4-1">
          <button
            className="h-8 w-28 rounded-2xl bg-white text-lg shadow-xl"
            onClick={submitNonMedForm}
          >
            ถัดไป
          </button>
        </Link>
      )}
    </motion.div>
  );
}
