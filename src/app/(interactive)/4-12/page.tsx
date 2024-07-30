'use client';

import { useState , useEffect } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Page() {
    

   
    return (
        
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className="grid justify-items-center  text-black min-h-screen min-w-full bg-[#fbfbfb] ">
            <div className="grid justify-items-center h-[10%] mt-[35%] ">
                <h1>คุณลืมตาขึ้นอีกครั้ง</h1>
                <h1 className="mt-[10%]">พบเจอกับโทรศัพท์เครื่องเดิม</h1>
                <h1 className="mt-[25%]">...</h1>
                <h1 className="mt-[10%]">&quot;นี่เผลอหลับไปหรอเนี่ย&quot;</h1>
            </div>
            <Link className="fixed z-50 bottom-16 left-[36%]" href='/4-13'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
            </Link>
            <img 
                src="/img/phone.webp" 
                className="absolute bottom-[23%] left-[27%]"
                width={180}
            />

        </motion.div>
    );
}