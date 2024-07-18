'use client';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Page() {
    
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className="grid h-screen w-screen justify-items-center bg-[#fbfbfb]">
            <div className="text-center text-[20px] pt-[30%]">
                <h1>สภาพแวดล้อม</h1>
                <h1 className="pt-[15%]">ที่ ๆ เราศึกษาอยู่</h1>
                <h1>ที่ ๆ เราใช้ชีวิต แทบจะเป็นบ้าน</h1>
                <h1 className="pt-[15%]">ใจดีกับเราไหม....?</h1>
            </div>
            <img src="/img/2-12.GIF" className="fixed"></img>
            <Link className="fixed z-50 bottom-8 left-[36%]" href='/2-13'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
            </Link>
        </motion.div>
    );
}