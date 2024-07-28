'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const router = useRouter();
    useEffect(()=> {
        const timer = setTimeout(()=> {
            router.push('/4-16');
        },3000)

        return () => clearTimeout(timer)
    },[router])

   
    return (
        
        <div className="grid justify-items-center  text-black min-h-screen min-w-full bg-[#fbfbfb] ">
            <motion.img 
                src="/img/phone.webp" 
                initial={{scale:1.0}}
                animate={{scale:2.0}}
                transition={{duration:3}}
                className="absolute bottom-[27%] left-[18%] w-[250px]"
            />
           
        </div>
    );
}