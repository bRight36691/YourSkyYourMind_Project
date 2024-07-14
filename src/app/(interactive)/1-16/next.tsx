
import Link from "next/link";

type Prop = {selectedPlace:string,handleSelected:()=>void};

export default function Next({selectedPlace,handleSelected}:Prop){
    if(selectedPlace !== ""){
       return (
        <Link className="pt-[80%]" href='/1-17'>
            <button onClick={handleSelected} className=" bg-white text-lg text-black h-8 w-28 rounded-2xl shadow-sm" >ถัดไป</button>
        </Link>
     ) ;
    } else{
        return (
            <></>
            
                // <button onClick={handleClick} className="pt-[45%] bg-white text-lg text-black h-8 w-28 rounded-2xl shadow-sm" >ถัดไป</button>
           
          ) ;
    }
   
}