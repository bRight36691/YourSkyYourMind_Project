
import Link from "next/link";

type Prop = {importantPerson:string,handleClick:()=>void};

export default function Next({importantPerson,handleClick}:Prop){
    if(importantPerson !== ""){
       return (
        <Link className="fixed bottom-[10%] left-[38%]" href='/1-18'>
            <button onClick={handleClick} className=" bg-white text-black text-lg text-black h-8 w-28 rounded-2xl shadow-sm" >ถัดไป</button>
        </Link>
     ) ;
    } else{
        return (
            <></>
            
                // <button onClick={handleClick} className="pt-[45%] bg-white text-lg text-black h-8 w-28 rounded-2xl shadow-sm" >ถัดไป</button>
           
          ) ;
    }
    
   
}