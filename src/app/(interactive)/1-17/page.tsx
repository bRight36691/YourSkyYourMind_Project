'use client';

import { useState , useEffect } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import  Text  from "./text"

export default function Page() {
    const [backgroundName,setBackgroundName] = useState<string>(""); 
    const [state,setState] = useState<number>(1);

    useEffect(() => {
        const userChoice = localStorage.getItem("selectedPlace");
    if(userChoice === "ใต้ร่มไม้ ที่คุ้นเคย"){
        setBackgroundName("/img/ใต้ร่มไม้ ที่คุ้นเคย.GIF")
    } else if (userChoice === "พระจันทร์และดาว ยามค่ำคืน"){
        setBackgroundName("/img/พระจันทร์และดาว ยามค่ำคืน.GIF")
    } else if (userChoice === "วิวภูเขา กว้างขวางท้าทาย"){
        setBackgroundName("/img/วิวภูเขา กว้างขวางท้าทาย.GIF")
    } else if (userChoice === "ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น"){
        setBackgroundName("/img/ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น.GIF")
    } else if (userChoice === "ในเมืองใหญ่ กับผู้คนที่รู้จัก"){
        setBackgroundName("/img/ในเมืองใหญ่ กับผู้คนที่รู้จัก.GIF")
    }
    })

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            // className="grid justify-items-center"
        >

            <img src={backgroundName} className="min-h-screen fixed" />
            <motion.div
                initial={{opacity:1}}
                animate={{opacity:0}}
                transition={{delay:2 ,duration:2}}
                className="min-h-screen min-w-full bg-white fixed"
            >
            </motion.div>
            <motion.div
                initial={{opacity:0.5}}
                animate={{opacity:0}}
                transition={{delay:4 ,duration:2}}
                className="min-h-screen min-w-full bg-white fixed"
            >
            </motion.div>
           
            <Text state={state} setState={setState} ></Text>
            
            
            
        </motion.div>
    );
    
}