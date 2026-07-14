import type { FC, ReactNode } from "react";
import { Vertical } from "../Containers/Vertical";

interface IPageRootProps {
  children: ReactNode;
}

export const PageRoot: FC<IPageRootProps> = ({ children }) => {
  return (
    <Vertical className="overflow-x-hidden h-full w-full">{children}</Vertical>
  );
};
