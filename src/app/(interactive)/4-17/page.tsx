'use client';

import { motion } from 'framer-motion';
import Link from "next/link";

export default function Page() {
    

   
    return (
        
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2,delay:0.5}}
            className="grid justify-items-center  text-black min-h-screen min-w-full bg-[#fbfbfb] ">
            <div className="grid justify-items-center h-[60%] mt-[25%] ">
                <h1>อย่าลืมให้กำลังใจตัวเอง</h1>
                <h1>เหมือนที่คุณให้กับคนสำคัญนะ</h1>
                <h1 className='pt-[150%]'>เพราะตัวคุณเอง</h1>
                <h1>ก็คือ <span className='font-medium'>&quot;คนสำคัญ&quot;</span> คนหนึ่งเหมือนกัน</h1>
            </div>
            <Link className="fixed z-50 bottom-16 left-[36%]" href='/4-15'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
            </Link>
            <img 
                src="/img/phone.webp" 
                className="absolute bottom-[30%] left-[18%] w-[250px]"
            />

        </motion.div>
    );
}