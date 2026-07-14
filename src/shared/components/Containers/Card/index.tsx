import { cn } from "@utils/cn";
import type { FC, ReactNode } from "react";
interface ICardProps {
  className?: string;
  children: ReactNode;
}

export const Card: FC<ICardProps> = ({ children, className }) => {
  return (
    <div className={cn("bg-white rounded-md shadow-md p-6", className)}>
      {children}
    </div>
  );
};
