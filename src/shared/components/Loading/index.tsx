import type { FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Center } from "../Containers/Center";
import { cn } from "@utils/cn";

const LoadingVariants = tv({
  base: "animate-spin rounded-full",
  variants: {
    size: {
      xs: "size-6 border-3 border-t-3",
      md: "size-11 border-4 border-t-4",
      lg: "size-16 border-4 border-t-4",
      xl: "size-20 border-4 border-t-4",
    },
    color: {
      primary: "border-primary/40 border-t-primary",
      white: "border-white/40 border-t-white",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

type ILoadingProps = VariantProps<typeof LoadingVariants> & {
  className?: string;
};

export const Loading: FC<ILoadingProps> = ({ size, color, className }) => {
  return (
    <Center>
      <div
        className={cn(
          LoadingVariants({
            size: size,
            color: color,
          }),
          className,
        )}
      ></div>
    </Center>
  );
};
