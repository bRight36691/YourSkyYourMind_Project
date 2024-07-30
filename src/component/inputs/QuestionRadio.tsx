import { RadioButton } from "./RadioButton";

type QuestionRadioProps = {
  question: string;
  onChange: (choice: React.ChangeEvent<HTMLInputElement>) => void;
  values: string[];
};

export const QuestionRadio = ({
  question,
  onChange,
  values,
}: QuestionRadioProps) => {
  const choices = ["ไม่เคย", "นาน ๆ ครั้ง", "บางครั้ง", "บ่อยครั้ง", "เสมอ"];
  return (
    <div className="flex w-full flex-col items-center gap-2 text-center">
      <p>{question}</p>
      <div className="flex w-full justify-between">
        {values.map((value: string, index: number): JSX.Element => {
          return (
            <div
              key={index}
              className="flex w-full flex-col items-center gap-2"
            >
              <RadioButton name={question} value={value} onChange={onChange} />
              <p className="text-xs">{choices[index]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
