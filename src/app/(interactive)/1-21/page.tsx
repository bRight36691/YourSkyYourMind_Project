'use client';

import { useState , useEffect } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Page() {
    const [backgroundName,setBackgroundName] = useState<string>(""); 

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
            transition={{duration:1}}
            // className="grid justify-items-center"
        >

            <img src={backgroundName} className="min-h-screen fixed" />
            
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
               className="fixed ml-[14%] mt-[55%] text-center"
               
            >
                <div className="fixed h-[15%] w-[70%] ml-[5%] mt-[15%] bg-white opacity-100 rounded-full  blur-xl "></div>
               <div className="fixed text-black ml-[12%] mt-[25%] text-[16px]">
                    <h1 >ฉันเหนื่อยขนาดไหนกันแน่นะ...</h1>
               </div>

               
            </motion.div>



            <Link className="fixed bottom-[10%] left-[38%]" href='/1-22'>
                <button className=" bg-white text-black text-lg h-8 w-28 rounded-2xl shadow-sm">ถัดไป</button>
            </Link>
           
            
            
            
        </motion.div>
    );
    
}