import { cn } from "@utils/cn";
import type { FC, ReactNode } from "react";

interface VerticalProps {
  className?: string;
  children: ReactNode;
}

export const Vertical: FC<VerticalProps> = ({ className, children }) => {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
};
