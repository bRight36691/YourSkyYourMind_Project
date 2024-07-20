'use client';

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {

    return (
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{opacity:0 , transition: { duration: 2 }}}
            className="h-screen bg-[#fbfbfb]"
        >
            <Link href='/1-11'>
                <main className= "overflow-hidden ">
                    <img src="/img/1-10.GIF" />
                </main>
            </Link>
        </motion.div>
    );

}