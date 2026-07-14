import type { FC } from "react";
interface IInputProps {
  value?: string;
  onChange: (text: string) => void;
  onBlur: () => void;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const Input: FC<IInputProps> = ({
  onBlur,
  onChange,
  placeholder,
  value,
  type,
}) => {
  return (
    <input
      placeholder={placeholder}
      className="border border-black/20 px-2 py-1 rounded-md focus:outline-none focus:border-black/60"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      type={type}
    ></input>
  );
};
