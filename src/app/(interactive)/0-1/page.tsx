"use client";
import Image from "next/image";
import { motion }  from 'framer-motion';

export default function page() {
  
  return (
    <div className="overflow-hidden object-none" >
    
    <motion.div 
    
      animate={{
        x:[-5,-890,-5],
        transition:{
          duration:80,
          repeat:Infinity,
          repeatType:"loop",
          ease:"linear"
        }
      }}
      className="h-screen w-[300%]"

      
      
    >
    <Image src="/img/scene1_sky.webp" alt="SKY" width={3000} height={2000}
      className="h-screen w-[150%]"
    />

          
    </motion.div>

   
    </div>
  );
}
