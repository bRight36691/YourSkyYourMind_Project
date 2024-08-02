'use client';
import { useState , useEffect } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Page() {
    const [importantPerson,setImportantPerson] = useState<string>('');
    const [encouragement,setEncouragement] = useState<string>('');
    useEffect(()=> {
        const getName = localStorage.getItem('importantPerson');
        setImportantPerson(getName ?? '');

    },[])
    
    useEffect(()=>{
        localStorage.setItem('encouragement',encouragement);
    },[encouragement])
    
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,delay:0.5}}
            className="grid justify-items-center">
            <div className="absolute bg-white h-[35%] w-[85%] rounded-[80%] -z-[50] left-[10%] top-[8%] opacity-[80%] blur-xl"></div>
            <div className="text-center text-black pt-[30%]">
                <h1>นั่งฟังคุณเล่าเรื่องราวมานาน</h1>
                <h1>{importantPerson} ลุกขึ้น กำลังจะเดินออกไป</h1>
                <h1>ดูเหมือนจะต้องกลับไปทำภารกิจที่สำคัญ</h1>
                <h1 className="pt-[15%]">อย่างน้อย ๆ ฝากกำลังใจถึงเขาหน่อย</h1>
            </div>

            <h1 className="pt-[30%] text-white">คุณจะบอกว่า...</h1>
            
            <textarea 
                className="mt-[10%] p-[5%] h-[150px] w-[350px] rounded-xl opacity-[50%]" 
                placeholder="โปรดพิมพ์คำตอบของคุณ"
                maxLength={140}
                onChange={(e)=>{
                    setEncouragement(e.target.value);
                }}
            >
                

            </textarea>
            <h1 className="absolute text-white bottom-[26%] right-[12%]">{encouragement.length}/140</h1>
            {encouragement && 
                <Link className="fixed z-50 bottom-7 left-[36%]" href='/4-11'>
                    <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
                </Link>
            }
            
        </motion.div>
    );
}