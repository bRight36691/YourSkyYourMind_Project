type RadioButtonProps = {
  name: string;
  value: string;
  onChange: (choice: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton = ({ name, value, onChange }: RadioButtonProps) => {
  return (
    <div className="grid place-items-center">
      <input
        type="radio"
        name={name}
        value={value}
        id={value}
        onChange={onChange}
        className="border-grayRadio peer col-start-1 row-start-1 h-5 w-5 appearance-none rounded-full border-2 bg-white checked:border-textLink"
      />
      <div className="pointer-events-none col-start-1 row-start-1 h-3 w-3 rounded-full peer-checked:bg-textLink" />
    </div>
  );
};
