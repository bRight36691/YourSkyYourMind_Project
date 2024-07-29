"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Text from "./text";

export default function Page() {
  const [state, setState] = useState<number>(1);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setName(localStorage.getItem("username") ?? "");
  }, []);

  return (
    <div className="min-h-screen w-full bg-scene2">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="grid h-screen w-screen justify-items-center"
      >
        <div className="fixed z-20 h-screen w-full bg-white" />
      </motion.div>
      <Text state={state} setState={setState} name={name}></Text>
    </div>
  );
}
