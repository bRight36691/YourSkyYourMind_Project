'use client';

import ChoicePane2 from "~/component/choicePane2";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Page() {
    const [answer1,setAnswer1] = useState<string>('');
    const [answer2,setAnswer2] = useState<string>('');
    const [canNext,setCanNext] = useState<boolean>(false);
    
    const submit = () => {

        localStorage.setItem('dreem12Q11',answer1)
        localStorage.setItem('dreem12Q12',answer2)
    
        
    }

    useEffect(()=>{
        if(answer1 !== '' && answer2 !== '' ){
            setCanNext(true)
        } else {
            setCanNext(false);
        }
    },[answer1,answer2])

    return(
        <div  className=" grid justify-items-center h-screen text-black">
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2,delay:0.5}}
            className="bg-white gap-y-5 h-[80%] w-[95%] mt-[6%] mb-[10%]  rounded-3xl ">
            <div className="grid justify-items-center gap-y-7 pt-[7%] pb-[5%]">
            <ChoicePane2 question="ที่นี่มีระบบการช่วยเหลือที่ดีสำหรับนักศึกษาที่มีปัญหาเครียด" setAnswer={setAnswer1}></ChoicePane2>
            <ChoicePane2 question="รูปแบบการดำเนินชีวิตทั่วไปของฉันเป็นไปด้วยดี" setAnswer={setAnswer2}></ChoicePane2>

            </div>
        </motion.div>
        
        {canNext && (
            <Link className="fixed z-50 bottom-3 left-[36%]" href='/2-16'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" onClick={submit}>ถัดไป</button>
            </Link>
        )
        }
        </div>
        
    );
}