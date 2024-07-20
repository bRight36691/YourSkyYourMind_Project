'use client';

import ChoicePane2 from "~/component/choicePane2";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Page() {
    const [answer1,setAnswer1] = useState<string>('');
    const [answer2,setAnswer2] = useState<string>('');
    const [answer3,setAnswer3] = useState<string>('');
    const [answer4,setAnswer4] = useState<string>('');
    const [answer5,setAnswer5] = useState<string>('');
    const [canNext,setCanNext] = useState<boolean>(false);
    
    const submit = () => {

        localStorage.setItem('dreem12Q1',answer1)
        localStorage.setItem('dreem12Q2',answer2)
        localStorage.setItem('dreem12Q3',answer3)
        localStorage.setItem('dreem12Q4',answer4)
        localStorage.setItem('dreem12Q5',answer5)
        
    }

    useEffect(()=>{
        if(answer1 !== '' && answer2 !== '' && answer3 !== '' && answer4 !== '' && answer5 !== ''){
            setCanNext(true)
        } else {
            setCanNext(false);
        }
    },[answer1,answer2,answer3,answer4,answer5])

    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className=" grid justify-items-center h-screen text-black">
        <div className="bg-white gap-y-5 h-[80%] w-[95%] mt-[6%] mb-[10%]  rounded-3xl ">
            <div className="grid justify-items-center gap-y-7 pt-[7%] pb-[5%]">
            <ChoicePane2 question="การสอนที่นี่ช่วยพัฒนาความมั่นใจในตัวเองของฉัน" setAnswer={setAnswer1}></ChoicePane2>
            <ChoicePane2 question="การสอนที่นี่เกื้อหนุนให้ฉันเป็นคนใฝ่รู้ตลอดเวลา" setAnswer={setAnswer2}></ChoicePane2>
            <ChoicePane2 question="อาจารย์ผู้สอนเป็นผู้มีความรอบรู้" setAnswer={setAnswer3}></ChoicePane2>
            <ChoicePane2 question="อาจารย์ผู้สอนมีทักษะในการสื่อสารเป็นอย่างดี" setAnswer={setAnswer4}></ChoicePane2>
            <ChoicePane2 question="อาจารย์ผู้สอนสามารถยกตัวอย่างได้ชัดเจน" setAnswer={setAnswer5}></ChoicePane2>
            </div>
        </div>
        
        {canNext && (
            <Link className="fixed z-50 bottom-3 left-[36%]" href='/2-14'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" onClick={submit}>ถัดไป</button>
            </Link>
        )
        }
        </motion.div>
        
    );
}