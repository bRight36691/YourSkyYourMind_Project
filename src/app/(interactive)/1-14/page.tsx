'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page() {

    const router = useRouter();

    useEffect(()=> {
        const timer = setTimeout(()=> {
            router.push("/1-15");
        },500)

        return () => clearTimeout(timer)
    },[router])

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{opacity:0 , transition: { duration: 2 }}}
            
        >
        </motion.div>
    );
}