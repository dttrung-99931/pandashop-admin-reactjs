import { cn } from "@utils/cn";
import type { ReactNode, FC } from "react";

interface CenterProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Center: FC<CenterProps> = ({
  children,
  className = "",
  style,
  onClick,
}) => {
  return (
    <div
      className={cn(
        `flex justify-center items-center w-full h-full`,
        className,
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
