import type { FC, ReactNode, MouseEventHandler } from "react";

interface HorizontalProps {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Horizontal: FC<HorizontalProps> = ({ className, children, onClick }) => {
  return (
    <div className={`flex ${className ?? ""}`} onClick={onClick}>
      {children}
    </div>
  );
};
