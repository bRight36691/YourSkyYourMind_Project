'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {

    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2,delay:0.5}}
            className='grid place-items-center items-center'
        >
            <div className='absolute top-[13%] left-[8%] h-[55%] w-[85%] bg-white -z-[50] opacity-[70%] rounded-[80%] blur-[20px]'></div>
            <div className='pt-[45%] text-center text-[20px] drop-shadow-lg'>
                <h1>ก้อนเมฆที่ผ่านมาตอนนี้</h1>
                <h1>เคลื่อนไหวช้า ๆ เบา ๆ</h1>

                <h1 className='pt-[15%]'>แสงแดดสีส้มอร่าม</h1>
                <h1>กระทบลงมาที่ใบหน้า</h1>
                <h1>....</h1>
                <h1>คล้ายกับท้องฟ้า กำลังจะจากลา</h1>

                <h1 className='pt-[15%]' >คุณค่อย ๆ นั่งลง</h1>
            </div>

            <Link className="fixed z-50 bottom-10 left-[36%]" href='/3-17'>
                <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-xl" >ถัดไป</button>
            </Link>


        </motion.div>
    );
}