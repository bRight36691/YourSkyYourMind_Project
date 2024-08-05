'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from "next/link";

export default function Page() {
    
    return (
        <AnimatePresence>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:1 , transition:{duration:0.5}}}
                transition={{duration:2,delay:1}}
                className="grid justify-items-center  text-black min-h-screen min-w-full bg-[#fbfbfb] ">    
                <h1 className="absolute top-24">บนหน้าจอ มีข้อความหนึ่งเขียนอยู่</h1>
                <Link className="fixed z-50 bottom-16 left-[36%]" href='/4-15'>
                    <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
                </Link>
                <img 
                    src="/img/phone.webp" 
                    className="absolute bottom-[27%] left-[18%] w-[250px]"
                />

            </motion.div>
        </AnimatePresence>
    );
}