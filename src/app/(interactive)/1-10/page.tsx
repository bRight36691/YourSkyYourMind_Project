'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page(){
    const router = useRouter();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            router.push("/1-11")
        },6000)

        return () => clearTimeout(timer)
    },[])

    return(
        <>
        </>
    );
}