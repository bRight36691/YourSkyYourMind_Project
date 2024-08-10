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
    <div className="absolute min-h-screen w-full bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="grid h-screen w-full justify-items-center"
      >
        <div className="absolute h-screen w-full bg-scene2" />
      </motion.div>
      <Text state={state} setState={setState} name={name}></Text>
    </div>
  );
}
