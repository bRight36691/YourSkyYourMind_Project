'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
    const [importantPerson,setImportantPerson] = useState<string>('')
    useEffect(()=> {
        const getName = localStorage.getItem('importantPerson');
        setImportantPerson((getName!==null) ? getName : '');

    },[])

    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className='grid place-items-center items-center'
        >
            <div className='absolute top-[26%] left-[17%] h-[25%] w-[70%] bg-white -z-[50] opacity-[70%] rounded-[80%] blur-[20px]'></div>
            <div className='pt-[70%] text-center text-[20px] drop-shadow-lg'>
                <h1><span className='text-red-500'>{importantPerson}</span> เดินมานั่งข้าง ๆ คุณ</h1>
                
            </div>

            <Link className="fixed z-50 bottom-10 left-[36%]" href='/3-18'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
            </Link>


        </motion.div>
    );
}