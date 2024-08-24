"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/4-12");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="h-screen w-full overflow-hidden bg-white object-none">
      <Image
        src="/img/eyeOpen.gif"
        width={200}
        height={200}
        alt="eye open"
        className="fixed h-screen w-[300%]"
      />
    </div>
  );
}
