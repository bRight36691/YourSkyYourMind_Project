'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
   
    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className='grid place-items-center items-center'
        >
            <div className='absolute top-[18%] left-[7%] h-[45%] w-[90%] bg-white -z-[50] opacity-[70%] rounded-[80%] blur-[20px]'></div>
            <div className='pt-[60%] text-center text-[20px] drop-shadow-lg leading-[36px]'>
                <div>
                    <h1>โลกข้างนอก...บางทีก็ไม่ได้ใจดีกับเรา</h1>
                    <h1>เหมือนสมัยเรายังเล็ก ๆ หรอก</h1>
                </div>
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:2,delay:4}}
                >
                    <h1 className='text-[28px] pt-[10%]'>&quot; โลกมันก็เป็นแบบนี้แหละ &quot;</h1>
                </motion.div>
                
            </div>
            <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:2,delay:4}}
                >

                <Link className="fixed z-50 bottom-10 left-[36%]" href='/3-20'>
                    <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
                </Link>
            </motion.div>


        </motion.div>
    );
}