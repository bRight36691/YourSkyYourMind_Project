'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    useEffect(()=> {
        const timer = setTimeout(()=> {
            router.push('/1-13');
        },6000)

        return () => clearTimeout(timer)

    },[router])

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
            >
        
        </motion.div>
    );
}