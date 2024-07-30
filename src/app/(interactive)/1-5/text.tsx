"use client";

import Link from "next/link";
import { NextButton } from "~/component/NextButton";

type prop = { state: number; setState: (number: number) => void };

export default function Text({ state, setState }: prop) {
  if (state === 1) {
    return (
      <>
        <div className="fixed top-24 z-10 flex w-screen flex-col items-center gap-6 text-center text-black">
          <div className="fixed h-[637px] w-[449px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,1)_0%,rgba(255,255,255,0.98)_36%,rgba(255,255,255,0.84)_60%,rgba(255,255,255,0.56)_77%,rgba(255,255,255,0)_100%)]" />
          <div className="fixed z-20 mt-40 flex flex-col gap-12">
            <div>
              <p>วันนี้คุณเป็นยังไงบ้าง ?</p>
            </div>
            <div>
              <p>ในวันที่โลกวุ่นวาย เดินทาง และพยายามอย่างหนัก</p>
              <p>เพื่อที่จะใช้ชีวิตและไล่ตามบางสิ่งที่มีอยู่จริงไหมก็ไม่รู้</p>
            </div>
            <div>
              <p>ลองย้อนกลับมามองตัวเองกัน : )</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-[15%] z-20 flex w-screen justify-center">
          <button
            className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm"
            onClick={() => setState(2)}
          >
            ถัดไป
          </button>
        </div>
      </>
    );
  } else if (state === 2) {
    return (
      <>
        <div className="fixed top-24 z-10 flex w-screen flex-col items-center gap-6 text-center text-black">
          <div className="fixed h-[637px] w-[449px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,1)_0%,rgba(255,255,255,0.98)_36%,rgba(255,255,255,0.84)_60%,rgba(255,255,255,0.56)_77%,rgba(255,255,255,0)_100%)]" />
          <div className="fixed z-20 mt-40 flex flex-col gap-16">
            <div>
              <p>ครั้งล่าสุดที่คุณมองท้องฟ้า</p>
              <p>ปล่อยใจสบาย ๆ ได้</p>
              <p>โดยไม่มีเรื่อง...มากวนใจ</p>
              <p>โดยไม่ต้องคิดเรื่องงาน</p>
              <p>ไม่ต้องกังวล</p>
              <p>ไม่ต้องคิดเรื่องคนรอบตัว</p>
            </div>
            <div>
              <p>... มันนานเท่าไหร่แล้วนะ</p>
            </div>
          </div>
        </div>
        <Link href="/1-7">
          <div className="fixed bottom-[15%] z-20 flex w-screen justify-center">
            <NextButton />
          </div>
        </Link>
      </>
    );
  }
}
