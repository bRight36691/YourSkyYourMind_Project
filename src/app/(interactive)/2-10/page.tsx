'use client';

import ChoicePane1 from "~/component/choicePane1";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Page() {
    const [answer1,setAnswer1] = useState<string>('');
    const [answer2,setAnswer2] = useState<string>('');
    const [answer3,setAnswer3] = useState<string>('');
    const [answer4,setAnswer4] = useState<string>('');
    const [canNext,setCanNext] = useState<boolean>(false);
    
    const submit = () => {
        localStorage.setItem('cbissQ20',answer1)
        localStorage.setItem('cbissQ21',answer2)
        localStorage.setItem('cbissQ22',answer3)
        localStorage.setItem('cbissQ23',answer4)
    }

    useEffect(()=>{
        if(answer1 !== '' && answer2 !== '' && answer3 !== '' && answer4 !== ''){
            setCanNext(true)
        } else {
            setCanNext(false);
        }
    },[answer1,answer2,answer3,answer4])

    return(
        <div className=" grid justify-items-center h-screen text-black">
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2,delay:0.5}}
            className="bg-white h-[80%] w-[95%] mt-[6%] mb-[10%] rounded-3xl">
            <div className="grid justify-items-center gap-y-10 pt-[7%] pb-[5%]" >
            <ChoicePane1 question="คุณรู้สึกทำงานกับอาจารย์ได้ยากหรือไม่" setAnswer={setAnswer1}></ChoicePane1>
            <ChoicePane1 question="การทำงานกับอาจารย์ทำให้คุณหมดพลังหรือไม่" setAnswer={setAnswer2}></ChoicePane1>
            <ChoicePane1 question="คุณรู้สึกอึดอัดคับข้องใจที่จะต้องทำงานกับอาจารย์หรือไม่" setAnswer={setAnswer3}></ChoicePane1>
            <ChoicePane1 question="คุณรู้สึกว่าคุณต้องเป็นฝ่ายให้มากกว่ารับเมื่อทำงานกับอาจารย์หรือไม่" setAnswer={setAnswer4}></ChoicePane1>
            </div>
        </motion.div>
        
        {canNext && (
            <Link className="fixed z-50 bottom-2 left-[36%]" href='/2-11'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" onClick={submit}>ถัดไป</button>
            </Link>
        )
        }
        </div>
        
    );
}