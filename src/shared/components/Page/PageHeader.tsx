import { useRouter } from "@tanstack/react-router";
import { type FC, type ReactNode } from "react";

interface IPageHeaderProps {
  actions?: ReactNode;
  title: string;
}

export const PageHeader: FC<IPageHeaderProps> = ({ actions, title }) => {
  const router = useRouter();
  return (
    <div className="px-8 py-5 mb-1 flex w-full relative top-0 bg-white items-center stickly space-x-4">
      <button
        className="text-lg cursor-pointer"
        onClick={() => {
          if (router.history.canGoBack()) {
            return router.history.back();
          }
        }}
      >
        &lt;
      </button>

      <h1 className="text-xl font-medium flex-1">{title}</h1>
      {actions}
    </div>
  );
};
