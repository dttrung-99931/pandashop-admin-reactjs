import type { AppException } from "@shared/exceptions/exception";
import { ErrorComponent } from "@tanstack/react-router";
import { cn } from "@utils/cn";
import type { FC, ReactNode } from "react";
import { Loading } from "../Loading";

interface IPageContentProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  isLoading?: boolean;
  error?: AppException;
}

export const PageContent: FC<IPageContentProps> = ({
  children,
  className,
  center,
  isLoading,
  error,
}) => {
  return (
    <div
      className={cn(
        "px-8 overflow-y-auto w-full h-full",
        center && "flex items-center justify-center",
        className,
      )}
    >
      {error ? (
        <ErrorComponent error={error}></ErrorComponent>
      ) : isLoading ? (
        <Loading></Loading>
      ) : (
        children
      )}
    </div>
  );
};
