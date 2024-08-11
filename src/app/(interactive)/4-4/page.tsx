"use client";
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
      <Text state={state} setState={setState} name={name}></Text>
    </div>
  );
}
