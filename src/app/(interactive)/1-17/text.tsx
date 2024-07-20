'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Next from "./next";


type prop = { state:number , setState : (number:number) => void }

export default function Text({state,setState}:prop) {
    const [importantPerson , setImportantPerson] = useState<string>('');
    const handleClick = () => {
        localStorage.setItem('importantPerson' , importantPerson);
    }
    if(state === 1) {
        return (
            <motion.div 
               className="fixed ml-[14%] mt-[40%] text-center"
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:1 , delay:4}}
            >
                <div className="fixed h-[50%] w-[70%] ml-[5%] bg-white opacity-80 rounded-full  blur-2xl "></div>
               <div className="fixed text-black ml-[18%] mt-[25%] text-[16px]">
                    <h1 >นึกออกแล้ว...</h1>
                    <h1 className="mt-[3%]">คิดถึงวิวนี้จัง</h1>
                    <h1 className="mt-[3%]">เวลาได้เห็นทีไร ก็สบายใจ</h1>
                    <h1 className="mt-[3%]">ไม่รู้สึกวุ่นวาย</h1>
                    <h1 className="mt-[3%]">ไม่รู้สึกอ่อนแอ</h1>
                    <h1 className="mt-[3%]">ไม่ต้องแข่งขันกับใคร</h1>

               </div>
               <div className="fixed bottom-[10%] left-[38%]" >
                        <button className=" bg-white text-black text-lg h-8 w-28 rounded-2xl shadow-sm" onClick={()=>setState(2)}>ถัดไป</button>
                </div>
            </motion.div>
        );
    } else if (state === 2) {
        return (
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                exit={{opacity:0 , transition: { duration: 2 }}}
            
               className="fixed ml-[14%] mt-[40%] text-center"
               
            >
                <div className="fixed h-[50%] w-[70%] ml-[5%] bg-white opacity-80 rounded-full  blur-2xl "></div>
               <div className="fixed text-black ml-[16%] mt-[25%] text-[16px]">
                    <h1 >คุณเดินไปตามทางนั้น..</h1>
                    <h1 className="mt-[12%]">วิวที่คุ้นเคย</h1>
                    <h1 >บรรยากาศที่อบอุ่น</h1>
                    <h1 >ผู้คนที่คุณไว้ใจ</h1>
                    <h1 className="mt-[12%]">คุณได้ย้อนคิดเรื่องราวต่าง ๆ</h1>

               </div>
               <div className="fixed bottom-[10%] left-[38%]" >
                        <button className=" bg-white text-black text-lg h-8 w-28 rounded-2xl shadow-sm" onClick={()=>setState(3)}>ถัดไป</button>
                </div>
            </motion.div>
        );
    } else if ( state === 3) {
        return (
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
               className="fixed ml-[14%] mt-[45%] text-center"
               
            >
                <div className="fixed h-[50%] w-[70%] ml-[5%] bg-white opacity-80 rounded-full  blur-2xl "></div>
               <div className="fixed text-black ml-[22%] mt-[35%] text-[16px]">
                    <h1 >คุณเดินมาเจอ</h1>
                    <h1 className="mt-[3%]">...</h1>
                    <h1 className="mt-[3%]">&quot;คนสำคัญของคุณ&quot;</h1>
                    

               </div>
               <div className="fixed bottom-[10%] left-[38%]" >
                        <button className=" bg-white text-black text-lg h-8 w-28 rounded-2xl shadow-sm" onClick={()=>setState(4)}>ถัดไป</button>
                </div>
            </motion.div>
        );
    } else if(state === 4){
        return (
        <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
               className="fixed ml-[14%] mt-[45%] text-center"
               
            >
                <div className="fixed h-[10%] w-[70%] ml-[5%] mt-[15%] bg-white opacity-100 rounded-full  blur-2xl "></div>
               <div className="fixed text-black ml-[0%] mt-[20%] text-[16px]">
                    <h1 >คนนั้นคือ</h1>
                    <textarea placeholder='พิมพ์เพื่อตอบ' 
                    className='w-72 h-12 rounded-xl mt-[20%] ml-[3%] pt-[5%] justify-self-center bg-white text-center text-black'
                    required={true}
                    onChange={(e) => setImportantPerson(e.target.value)}
                    ></textarea>
               </div>

               
               <Next importantPerson={importantPerson} handleClick={handleClick} ></Next>
            </motion.div>
            );
    }
}