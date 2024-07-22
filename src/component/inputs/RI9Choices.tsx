type RI9ChoicesProps = {
  choiceSelection: (choice: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RI9Choices = ({ choiceSelection }: RI9ChoicesProps) => {
  const choices = [
    "ตรงกับตัวฉันมากที่สุด",
    "ค่อนข้างตรงกับตัวฉัน",
    "ตรงกับตัวฉันบ้าง",
    "แทบจะไม่ตรงเลย",
    "ไม่ตรงเลย",
  ];
  return (
    <div className="flex w-full flex-col items-center gap-5">
      {choices.map((choice: string, index: number): JSX.Element => {
        return (
          <div key={index} className="grid place-items-center">
            <input
              type="radio"
              name="radio"
              value={5 - index}
              id={choice}
              onChange={choiceSelection}
              className="border-grayRI9 peer col-start-1 row-start-1 h-11 w-[268px] appearance-none rounded-[100px] border-[1px] bg-white text-black checked:border-black checked:bg-black"
            />
            <div className="pointer-events-none col-start-1 row-start-1 text-sm font-medium text-black peer-checked:text-white">
              {choice}
            </div>
          </div>
        );
      })}
    </div>
  );
};
