'use client';

import { useState , useEffect } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Page() {
    
    const [importantPerson,setImportantPerson] = useState<string>('');

    useEffect(()=> {
        const prevImportantPerson = localStorage.getItem('importantPerson');
        if(prevImportantPerson !== null ){
            setImportantPerson(prevImportantPerson)
        }
    })
    return (
        
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className="grid justify-items-center  text-black min-h-screen min-w-full bg-[#fbfbfb] ">
            <div className="grid justify-items-center h-[10%] mt-[50%] ">
                <h1>คุณหัวเราะเบา ๆ</h1>
                <h1 className="mt-[8%]">ไม่คิดว่าจะเจอกัน</h1>
                <h1 className="mt-[2%]">ในวันที่อ่อนล้าแบบนี้</h1>
                <h1 className="mt-[8%]"><span className="text-red-500">{importantPerson}</span> เริ่มถามคำถามด้วยความห่วงใย</h1>
            </div>
            <Link className="z-50 pt-[30%]" href='/1-20'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl">ถัดไป</button>
            </Link>
            <img src="/img/1-19.GIF" className="fixed"></img>

        </motion.div>
    );
}