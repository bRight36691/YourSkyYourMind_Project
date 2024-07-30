'use client';


import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";


export default function Page() {

    return(
        <div className="bg-[#F5F5F5] h-screen">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
            >
                <div className="grid pt-[60%] text-[30px]  justify-items-center text-black" >
                    <h1>การเติบโต</h1>
                    <h1>...</h1>
                    <h1 className="pt-[4%]">มันเหนื่อยจังเลย</h1>
                    <Link className="pt-[45%]" href='/1-12'>
                        <button className=" bg-white text-lg h-8 w-28 rounded-2xl shadow-sm">ถัดไป</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}