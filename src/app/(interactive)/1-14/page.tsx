'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import  Next   from './next';

export default function Page() {
    const [ name , setName ] = useState<string>('');
    const handleClick = () => {
        localStorage.setItem("username",name)
    }
    

    return(
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition:{duration:2}}}
            className='grid justify-items-center pt-[52%] text-[16px]'
            
        >
            <h1 className='text-black '>อยากให้เราเรียกคุณว่าอะไร</h1>
            <textarea placeholder='พิมพ์เพื่อตอบ' 
                className='w-72 h-12 rounded-xl mt-[10%] pt-[3%] justify-self-center bg-white text-center text-black'
                required={true}
                onChange={(e) => setName(e.target.value)}
            ></textarea>

            <Next name={name} handleClick={handleClick}></Next>
            
            
        
        </motion.div>
        
    );
}