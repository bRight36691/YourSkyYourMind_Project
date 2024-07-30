import { ChangeEvent } from "react";

type prop = {question:string,setAnswer: (answer:string)=>void} 

export default function ChoicePane({question,setAnswer}:prop) {
    const handleClick = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setAnswer(event.target.value)
    }
  
    return(
        <div className="grid justify-items-center w-[95%] h-[80%]">
            <h1 className="text-[17px] text-wrap text-center font-light">{question}</h1>
            <div className="grid grid-cols-5 text-center text-[9px] gap-x-6 pt-[3%]">
                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2" 
                        value="0" onChange={handleClick}/>
                    <h1>ไม่เห็นด้วยอย่างยิ่ง</h1>
                </label>

                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2" 
                        value="1" onChange={handleClick}/>
                    <h1>ไม่เห็นด้วย</h1>
                </label>

                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2"
                        value="2" onChange={handleClick} />
                    <h1>ไม่แน่ใจ</h1>
                </label>

                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2"
                        value="3" onChange={handleClick} />
                    <h1>เห็นด้วย</h1>
                </label>

                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2"
                        value="4" onChange={handleClick} />
                    <h1>เห็นด้วยอย่างยิ่ง</h1>
                </label>
                    
                
            </div>
        </div>
    );
}