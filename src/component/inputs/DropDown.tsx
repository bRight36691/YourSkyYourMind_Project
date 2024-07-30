type DropDownProps = {
  choices: string[];
  choiceSelection: (choice: string) => void;
  selectChoice: string;
  isLargeChoice: boolean;
  isMed?: boolean;
};

export const DropDown = ({
  choices,
  choiceSelection,
  selectChoice,
  isLargeChoice,
  isMed = true,
}: DropDownProps) => {
  return (
    <select
      className={`rounded-xl border-[1.5px] border-solid bg-white text-left focus:border-textLink focus:outline-none focus:ring-0 ${
        (isLargeChoice && !selectChoice && isMed) || !isLargeChoice
          ? "w-[129px]"
          : isMed
            ? "min-w-[129px] max-w-max"
            : "w-48 min-w-[129px]"
      } h-12 p-2 px-3 py-2 pt-3 ${
        selectChoice ? "text-black" : "text-placeholder"
      } flex justify-between shadow-sm ring-1 ring-inset ring-gray-300`}
      onChange={(e) => choiceSelection(e.target.value)}
      defaultValue="เลือก"
      name={choices[0]}
    >
      <option disabled>เลือก</option>
      {choices.map((choice: string, index: number): JSX.Element => {
        return (
          <option key={index} value={choice}>
            {choice}
          </option>
        );
      })}
    </select>
  );
};
