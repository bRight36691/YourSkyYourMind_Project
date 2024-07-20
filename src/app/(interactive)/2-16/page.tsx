'use client';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Page() {
    
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className="grid h-screen w-screen justify-items-center ">
            <div className="fixed -z-[10] ml-[13%] mt-[40%] bg-white h-[45%] w-[75%] opacity-100 rounded-full  blur-2xl"></div>
            <div className="text-center text-[20px] pt-[63%]">
                <h1>ผ่านอะไรมาเยอะเลยแฮะ</h1>
                <h1 className="pt-[15%]">มีทั้งเรื่องที่ยินดี</h1>
                <h1 className="pt-[15%]">และน่าเหนื่อยใจ</h1>
            </div>
            <Link className="fixed z-50 bottom-8 left-[36%]" href='/2-17'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
            </Link>
        </motion.div>
    );
}