import type { FC, ReactNode } from "react";
import { Center } from "../Containers/Center";
import { cn } from "@utils/cn";
interface IModalProps {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

export const Modal: FC<IModalProps> = ({ children, onClose, className }) => {
  return (
    <Center
      className="absolute inset-0 w-full h-full bg-black/20"
      onClick={(e) => {
        e.stopPropagation();
        onClose?.();
      }}
    >
      <div
        className={cn("px-8 py-4 bg-white shadow-md rounded-xs", className)}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </Center>
  );
};
