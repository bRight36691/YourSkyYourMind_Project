import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { DropDownList } from "./DropDownList";
import { ChevronDown } from "../ChevronDown";

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
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className={`rounded-xl border-[1.5px] border-solid bg-white text-left focus:border-textLink focus:outline-none focus:ring-0 ${
            (isLargeChoice && !selectChoice && isMed) || !isLargeChoice
              ? "w-[129px]"
              : isMed
                ? "min-w-[129px] max-w-full"
                : "w-48 min-w-[129px]"
          } min-h-12 p-2 px-3 py-2 pt-3 ${
            selectChoice ? "text-black" : "text-placeholder"
          } flex justify-between shadow-sm ring-1 ring-inset ring-gray-300`}
        >
          {selectChoice ? selectChoice : "เลือก"}
          <ChevronDown />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className={`absolute left-0 z-10 mt-2 block max-h-[120px] overflow-y-auto ${
          isLargeChoice ? "min-w-[129px] max-w-full" : "w-[129px]"
        } origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
      >
        <DropDownList choices={choices} choiceSelection={choiceSelection} />
      </MenuItems>
    </Menu>
  );
};
