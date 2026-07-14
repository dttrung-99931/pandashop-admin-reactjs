import { cn } from "@utils/cn";
import type { FC, ReactNode } from "react";

interface IPageContentProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
}

export const PageContent: FC<IPageContentProps> = ({
  children,
  className,
  center,
}) => {
  return (
    <div
      className={cn(
        "px-8 overflow-y-auto w-full h-full",
        center && "flex items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
};
