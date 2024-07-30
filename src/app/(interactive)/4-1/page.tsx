"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/4-4");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        delay: 0,
      }}
      className="flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="z-20 h-screen w-full bg-white" />
    </motion.div>
  );
}
