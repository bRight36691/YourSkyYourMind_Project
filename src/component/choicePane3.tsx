import { ChangeEvent } from "react";
import { v4 as uuidv4 } from 'uuid';

type prop = {question:string,setAnswer: (answer:string)=>void} 

export default function ChoicePane({question,setAnswer}:prop) {
    const handleClick = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setAnswer(event.target.value)
    }
    let size = "17px"
    if(question === "ฉันรับรู้ถึงการทำงานของหัวใจแม้ในตอนที่ฉันไม่ได้ออกแรง#(เช่นรู้สึกว่าหัวใจเต้นเร็วขึ้นหรือเต้นไม่เป็นจังหวะ)"){
        size = "13px"
    }
    const arr = question.split('#');
    console.log(arr);
  
    return(
        <div className="grid justify-items-center w-[90%] h-[80%]">
            {arr.map((q)=>{
                return(
                    <h1 key={uuidv4()} 
                    style={{ fontSize: `${size}` }}
                    className="text-[17px] text-wrap text-center font-light break-words">{q}</h1>
                );
            })}
            {/* <h1 className="text-[17px] text-wrap text-center font-light break-words">{question}</h1> */}
            <div className="grid grid-cols-4 text-center text-[9px] gap-x-6 pt-[3%]">
                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2" 
                        value="0" onChange={handleClick}/>
                    <h1>ไม่ตรงกับฉันเลย</h1>
                </label>

                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2" 
                        value="1" onChange={handleClick}/>
                    <h1>ตรงกับฉันบ้าง</h1>
                </label>

                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2"
                        value="2" onChange={handleClick} />
                    <h1>ตรงกับฉัน</h1>
                </label>

                <label className="grid grid-cols-1 justify-items-center gap-y-2">
                    <input type="radio" name={question} className="radio checked:bg-blue-800 h-6 w-6 border-2"
                        value="3" onChange={handleClick} />
                    <h1>ตรงกับฉันมาก</h1>
                </label>

                
                
            </div>
        </div>
    );
}
