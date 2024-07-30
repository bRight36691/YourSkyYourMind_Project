"use client";
import { useState } from "react";
import { MovingSky } from "~/component/bg/MovingSky";
import Text from "./text";

export default function Page() {
  const [state, setState] = useState<number>(1);

  return (
    <div className="overflow-hidden object-none">
      <MovingSky />
      <Text state={state} setState={setState}></Text>
    </div>
  );
}
