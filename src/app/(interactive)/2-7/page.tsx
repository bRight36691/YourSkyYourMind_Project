"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden bg-grayBlue object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="flex w-full flex-col justify-center text-center text-black">
          <p className="mt-72 text-[20px]">อาจารย์ ผู้ที่สอนฉัน</p>
          <p className="mt-2">(หากเรียนจบแล้วให้ถือเป็นหัวหน้างาน)</p>
          <p className="mt-8 text-[20px]">เค้าโอเคกับเรามั้ยนะ...?</p>
        </div>

        <Link href="/2-8">
          <div className="fixed bottom-20 flex w-screen justify-center">
            <button className="z-20 bg-white text-black">ถัดไป</button>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
