import { ChangeEvent } from "react";

type prop = { question: string; setAnswer: (answer: string) => void };

export default function ChoicePane({ question, setAnswer }: prop) {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setAnswer(event.target.value);
  };

  return (
    <div className="grid h-[80%] w-[90%] justify-items-center">
      <h1 className="text-wrap text-center text-[17px] font-light">
        {question}
      </h1>
      <div className="grid grid-cols-5 gap-x-6 pt-[3%] text-[12px]">
        <label className="grid grid-cols-1 justify-items-center gap-y-2">
          <input
            type="radio"
            name={question}
            className="radio h-6 w-6 border-2 checked:bg-blue-800"
            value="100"
            onChange={handleClick}
          />
          <h1>ไม่เคย</h1>
        </label>

        <label className="grid grid-cols-1 justify-items-center gap-y-2">
          <input
            type="radio"
            name={question}
            className="radio h-6 w-6 border-2 checked:bg-blue-800"
            value="75"
            onChange={handleClick}
          />
          <h1>นานๆครั้ง</h1>
        </label>
        
        <label className="grid grid-cols-1 justify-items-center gap-y-2">
          <input
            type="radio"
            name={question}
            className="radio h-6 w-6 border-2 checked:bg-blue-800"
            value="50"
            onChange={handleClick}
          />
          <h1>บางครั้ง</h1>
        </label>

        <label className="grid grid-cols-1 justify-items-center gap-y-2">
          <input
            type="radio"
            name={question}
            className="radio h-6 w-6 border-2 checked:bg-blue-800"
            value="25"
            onChange={handleClick}
          />
          <h1>บ่อยครั้ง</h1>
        </label>

        <label className="grid grid-cols-1 justify-items-center gap-y-2">
          <input
            type="radio"
            name={question}
            className="radio h-6 w-6 border-2 checked:bg-blue-800"
            value="0"
            onChange={handleClick}
          />
          <h1>เสมอ</h1>
        </label>
      </div>
    </div>
  );
}
