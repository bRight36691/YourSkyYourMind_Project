"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MovingSky } from "~/component/bg/MovingSky";
import Text from "./text";

export default function Page() {
  const [state, setState] = useState<number>(1);

  return (
    <div className="overflow-hidden object-none">
      <MovingSky />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <Text state={state} setState={setState}></Text>
      </motion.div>
    </div>
  );
}
