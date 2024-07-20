'use client';

import ChoicePane from "~/component/choicePane1";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
    const [answer1,setAnswer1] = useState<string>('');
    const [answer2,setAnswer2] = useState<string>('');
    const [canNext,setCanNext] = useState<boolean>(false);
    
    const submit = () => {
        localStorage.setItem('cbissQ24',answer1)
        localStorage.setItem('cbissQ25',answer2)    
    }

    useEffect(()=>{
        if(answer1 !== '' && answer2 !== '' ){
            setCanNext(true)
        } else {
            setCanNext(false);
        }
    },[answer1,answer2])

    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className=" grid justify-items-center h-screen text-black">
        <div className="bg-white gap-y-5 h-[80%] w-[95%] mt-[6%] mb-[10%]  rounded-3xl ">
            <div className="grid justify-items-center gap-y-10 pt-[7%] pb-[5%]">
                <ChoicePane question="คุณเบื่อที่จะทำงานกับอาจารย์หรือไม่" setAnswer={setAnswer1}></ChoicePane>
                <ChoicePane question="บางครั้งคุณก็สงสัยว่าคุณจะสามารถทำงานกับอาจารย์ต่อไปไหวหรือไม่" setAnswer={setAnswer2}></ChoicePane>
            </div>
        </div>
        
        {
                canNext && 
                <Link className="fixed z-50 bottom-2 left-[36%]" href='/2-12'>
                    <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" onClick={submit}>ถัดไป</button>
                </Link>
            }
        </motion.div>
        
    );
}