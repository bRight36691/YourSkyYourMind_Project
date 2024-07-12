import { MenuItem } from "@headlessui/react";

type DropDownListProps = {
  choices: string[];
  choiceSelection: (choice: string) => void;
};

export const DropDownList = ({
  choices,
  choiceSelection,
}: DropDownListProps) => {
  return (
    <>
      {choices.map((choice: string, index: number): JSX.Element => {
        return (
          <MenuItem key={index}>
            <div
              className="w-full px-4 py-2 text-left text-gray-700 data-[focus]:bg-textLink data-[focus]:text-white"
              onClick={(): void => {
                choiceSelection(choice);
              }}
            >
              {choice}
            </div>
          </MenuItem>
        );
      })}
    </>
  );
};
