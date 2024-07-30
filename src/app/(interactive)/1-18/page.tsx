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
            <div className="grid justify-items-center h-[10%] mt-[55%] leading-[45px]">
                <h1>&quot;อ้าว ! ! ไปอยู่ไหนมาล่ะเนี่ย&quot;</h1>
                <h1>&quot;โถ่ หน้าโทรมเชียว เหนื่อยสิท่า&quot;</h1>
            </div>
            <img src="/img/1-18.GIF" className="fixed"></img>

            <Link className="z-50 pt-[30%]" href='/1-19'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl">ถัดไป</button>
            </Link>
            

        </motion.div>
    );
}