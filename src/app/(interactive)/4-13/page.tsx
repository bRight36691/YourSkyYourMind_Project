'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion , AnimatePresence } from 'framer-motion';
import Image from "next/image";

export default function Page() {
    const router = useRouter();
    useEffect(()=> {
        const timer = setTimeout(()=> {
            router.push('/4-14');
        },4000)

        return () => clearTimeout(timer)
    },[router])

    return (
        <AnimatePresence>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0 , transition:{duration:2}}}
                transition={{duration:2}}
                className="grid place-items-center  bg-[#fbfbfb] max-h-screen overflow-hidden">
                <div className="ml-[10%] mb-[35%] h-[180%] w-[180%]">
                    <Image 
                        width={1080}
                        height={1920}
                        layout="responsive"
                        src="/img/phoneRing.GIF"
                        alt="phone ring"
                    />

                </div>
            </motion.div>
        </AnimatePresence>
    );
}