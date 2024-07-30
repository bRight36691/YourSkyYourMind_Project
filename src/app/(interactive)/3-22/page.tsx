'use client';
import { useState , useEffect } from "react";
import ChoicePane3 from "~/component/choicePane3";
import { motion } from 'framer-motion'
import Link from "next/link";
import { RadioButton } from "~/component/inputs/RadioButton";

export default function Page() {
    const [answer1,setAnswer1] = useState<string>('')
    const [answer2,setAnswer2] = useState<string>('')
    const [answer3,setAnswer3] = useState<string>('')
    const [answer4,setAnswer4] = useState<string>('')

    useEffect(()=> {
        localStorage.setItem('dass21Q5',answer1)
        localStorage.setItem('dass21Q6',answer2)
        localStorage.setItem('dass21Q7',answer3)
        localStorage.setItem('dass21Q8',answer4)
    },[answer1,answer2,answer3,answer4])
        
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className="grid justify-items-center">
            <div className="grid mt-[15%] p-[5%] justify-items-center item-center tex bg-white rounded-xl">
                <h1>ข้อความที่ตรงกับความรู้สึกของท่านมากสุด</h1>
                <h1>ในช่วง 2 สัปดาห์ที่ผ่านมา</h1>
            </div>
            <div className="w-screen">
                <div className="absolute bg-white opacity-[50%] min-h-[55%] min-w-[95%] 
                rounded-[20px] mt-[7%] ml-[2.5%] -z-[50]"></div>
                    <div className="grid justify-items-center gap-y-3 pt-[7%] pb-[5%] opacity-[100%] mt-[5%]">
                        <ChoicePane3 question="ฉันพบว่ามันยากที่จะคิดริเริ่มทำสิ่งใดสิ่งหนึ่ง" setAnswer={setAnswer1}></ChoicePane3>
                        <ChoicePane3 question="ฉันมีแนวโน้มที่จะตอบสนองเกินเหตุต่อสถานการณ์" setAnswer={setAnswer2}></ChoicePane3>
                        <ChoicePane3 question="ฉันรู้สึกว่าร่างกายบางส่วนสั่นผิดปกติ (เช่น มือสั่น)" setAnswer={setAnswer3}></ChoicePane3>
                        <ChoicePane3 question="ฉันรู้สึกเสียพลังงานไปมากกับการคิดกังวล" setAnswer={setAnswer4}></ChoicePane3>
                    </div>
            </div>
            { answer1 && answer2 && answer3 && answer4 && 
                <Link className="fixed z-50 bottom-7 left-[36%]" href='/3-23'>
                    <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
                </Link>
            }
                
            

        </motion.div>
    );
}