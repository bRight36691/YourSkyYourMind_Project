
import Link from "next/link";

type Prop = {name:string,handleClick:()=>void};

export default function Next({name,handleClick}:Prop){
    if(name !== ""){
       return (
        <Link className="pt-[65%]" href='/1-15'>
            <button onClick={handleClick} className=" bg-white text-lg text-black h-8 w-28 rounded-2xl shadow-sm" >ถัดไป</button>
        </Link>
     ) ;
    } else{
        return (
            <></>
            
                // <button onClick={handleClick} className="pt-[45%] bg-white text-lg text-black h-8 w-28 rounded-2xl shadow-sm" >ถัดไป</button>
           
          ) ;
    }
   
}