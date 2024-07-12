"use client";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-grayBg h-screen w-full overflow-hidden object-none">
      <div className="flex h-screen items-center">
        <Image
          src="/img/useLaptop.gif"
          width={200}
          height={200}
          alt="gif of laptop using"
          className="fixed w-full"
        />

        <div className="fixed top-52 z-20 flex w-full flex-col items-center gap-10 text-center text-black">
          <div>
            <p>นึกออกแต่</p>
            <p>ตอนที่ก้มหน้าทำงาน</p>
            <p>ใช้ชีวิตโดยผ่านไปแล้วอีกวัน</p>
          </div>
          <div>
            <p>เราทำได้ดีพอไหมนะ</p>
          </div>
          <div>
            <p>ที่เราทำอยู่...</p>
            <p>เรามีความสุขไหมนะ?</p>
          </div>
        </div>
      </div>

      <Link href="/1-10">
        <div className="fixed bottom-32 flex w-screen justify-center">
          <button className="z-20 bg-white text-black">ถัดไป</button>
        </div>
      </Link>
    </div>
  );
}
