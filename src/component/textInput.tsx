import { useEffect, useState } from "react";

export default function TextInput() {
    const [encouragement,setEncouragement] = useState<string>('');
    useEffect(()=>{
        localStorage.setItem('encouragement',encouragement);
    },[encouragement])
    return(
        <div >
            <textarea 
                className="mt-[10%] p-[5%] h-[150px] w-[350px] rounded-xl opacity-[50%]" 
                placeholder="โปรดพิมพ์คำตอบของคุณ"
                maxLength={140}
                onChange={(e)=>{
                    setEncouragement(e.target.value);
                }}
            >
                

            </textarea>
            <h1 className="absolute text-white bottom-[29%] right-[12%]">{encouragement.length}/140</h1>
        </div>
    );
}