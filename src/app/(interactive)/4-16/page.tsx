'use client';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";
import { motion } from 'framer-motion';


export default function Page() {
    const [encouragement,setEncouragement] = useState<string>('');
    const [importantPerson,setImportantPerson] = useState<string>('');
    useEffect(()=>{
        const getEncouragement = localStorage.getItem('encouragement');
        const getImportantPerson = localStorage.getItem('importantPerson');
        setEncouragement(getEncouragement!== null ? getEncouragement : '');
        setImportantPerson(getImportantPerson!== null ? getImportantPerson : '');
    },[])
    const separators = /[ \n]+/; 
    const messages = encouragement.split(separators);
    console.log(messages);
    return (
        <Link href='/4-17'>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                className="grid h-screen">
                <h1 className="text-black font-medium text-[20px] pt-[8%] pl-[22%]">{importantPerson}</h1>
                <div className="absolute top-[5%] w-full chat chat-start ml-[5%] mt-[18%] max-h-screen overflow-y-auto">
                {messages.map((message)=>{
                    return(
                        <div key={uuidv4()} className="chat-bubble mt-[3%] bg-white text-black break-words max-w-[80%]">{message}</div>
                    );
                })}
                </div>
                <h1 className="place-self-center pt-[20%] animate-pulse"> แตะที่หน้าจอเพื่อไปต่อ </h1>
            </motion.div>
        </Link>
    );
}