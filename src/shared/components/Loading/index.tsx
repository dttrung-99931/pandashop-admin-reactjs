import type { FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Center } from "../Containers/Center";

const LoadingVariants = tv({
  base: "animate-spin rounded-full border-4 border-primary/40 border-t-4 border-t-primary",
  variants: {
    size: {
      md: "size-11",
      lg: "size-16",
      xl: "size-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ILoadingProps = VariantProps<typeof LoadingVariants> & {};

export const Loading: FC<ILoadingProps> = ({ size }) => {
  return (
    <Center>
      <div
        className={LoadingVariants({
          size: size,
        })}
      ></div>
    </Center>
  );
};
