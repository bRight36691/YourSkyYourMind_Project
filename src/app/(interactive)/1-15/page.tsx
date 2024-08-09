'use client';

import { motion , AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import  Next   from './next';

export default function Page() {
    const [ selectedPlace , setSelectedPlace ] = useState<string>('');
    const handleSelected = () => {
        localStorage.setItem("selectedPlace",selectedPlace)
    }
    

    return(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{opacity:0}}
                transition={{duration:2}}
                className='grid justify-items-center pt-[65%] text-[16px]'
                
            >
                <h1 className='text-black '>ถ้าไม่ต้องมองโต๊ะทำงาน</h1>
                <h1 className='text-black '>วิวแบบไหนที่ทำให้คุณสบายใจ ?</h1>
                <select className="select select-bordered w-full max-w-xs 
                w-72 h-12 rounded-xl mt-[6%] justify-self-center bg-white text-center text-black"
                    onChange={(e)=>setSelectedPlace(e.target.value)}
                    
                    defaultValue="เลือก"
                >
                    <option disabled >เลือก</option>
                    <option value="ใต้ร่มไม้ ที่คุ้นเคย">ใต้ร่มไม้ ที่คุ้นเคย</option>
                    <option value="พระจันทร์และดาว ยามค่ำคืน">พระจันทร์และดาว ยามค่ำคืน</option>
                    <option value="วิวภูเขา กว้างขวางท้าทาย">วิวภูเขา กว้างขวางท้าทาย</option>
                    <option value="ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น">ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น</option>
                    <option value="ในเมืองใหญ่ กับผู้คนที่รู้จัก">ในเมืองใหญ่ กับผู้คนที่รู้จัก</option>
                </select>
                

                <Next selectedPlace={selectedPlace} handleSelected={handleSelected}></Next>
                
                
            
            </motion.div>
        </AnimatePresence>
        
    );
}