import { motion } from "framer-motion";
import Image from "next/image";

export const MovingSky2 = () => {
  return (
    <motion.div
      animate={{
        x: [-5, -780, -5],
        transition: {
          duration: 80,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
      }}
      className="fixed h-screen w-[300%]"
    >
      <Image
        src="/img/4-18.webp"
        alt="SKY"
        width={3000}
        height={2000}
        className="h-screen w-[150%]"
      />
    </motion.div>
  );
};
