import type { FC } from "react";
interface IErrorMessageComponentProps {
  message: string;
}

export const ErrorMessageComponent: FC<IErrorMessageComponentProps> = ({
  message,
}) => {
  return <span className="text-xs text-red-400">{message}</span>;
};
