'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [selectedPlace,setSelectedPlace] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const userChoice = localStorage.getItem("selectedPlace");
    if(userChoice === "ใต้ร่มไม้ ที่คุ้นเคย"){
        setSelectedPlace("ใต้ร่มไม้ ที่คุ้นเคย");
    } else if (userChoice === "พระจันทร์และดาว ยามค่ำคืน"){
        setSelectedPlace("พระจันทร์และดาว ยามค่ำคืน");
    } else if (userChoice === "วิวภูเขา กว้างขวางท้าทาย"){
        setSelectedPlace("วิวภูเขา กว้างขวางท้าทาย");
    } else if (userChoice === "ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น"){
        setSelectedPlace("ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น");
    } else if (userChoice === "ในเมืองใหญ่ กับผู้คนที่รู้จัก"){
        setSelectedPlace("ในเมืองใหญ่ กับผู้คนที่รู้จัก");
    }
    },[])

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/1-17');

        },2000)

        return () => clearTimeout(timer);
    },[router])
    

    return(
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition:{duration:2}}}
            className='grid justify-items-center pt-[50%] text-[16px]'
            
        >
            <h1 className='text-black '>ถ้าไม่ต้องมองโต๊ะทำงาน</h1>
            <h1 className='text-black '>วิวแบบไหนที่ทำให้คุณสบายใจ ?</h1>
            <select className="select select-bordered w-full max-w-xs 
            w-72 h-12 rounded-xl mt-[6%] justify-self-center text-center text-black 
            disabled:bg-white disabled:text-black disabled:border-none"
                disabled 
                
            >
                <option className='bg-white'>{selectedPlace}</option>
                
            </select>
            

           
            
            
        
        </motion.div>
        
    );
}