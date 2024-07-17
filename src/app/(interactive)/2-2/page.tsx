"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/2-3");
    }, 250);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen w-full overflow-hidden bg-white object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0,
        }}
        className="flex min-h-screen flex-col justify-center overflow-hidden"
      >
        <div className="bg-scene2 z-20 h-screen w-full" />
      </motion.div>
    </div>
  );
}
