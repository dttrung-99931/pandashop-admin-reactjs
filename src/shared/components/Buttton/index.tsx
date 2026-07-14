import { cn } from "@utils/cn";
import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const ButtonVariants = tv({
  base: cn(
    "rounded-md bg-primary border-none text-white",
    "active:scale-95 cursor-pointer select-none",
  ),
  variants: {
    type: {
      primary: "bg-primary",
      secondary: "bg-secondary",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

type ButtonVariantsProps = VariantProps<typeof ButtonVariants>;

type IButtonProps = ButtonVariantsProps & {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  isSubmit?: boolean;
  isDisabled?: boolean;
};

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  className,
  isSubmit,
  type,
  isDisabled,
}) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={cn(
        ButtonVariants({
          type: type,
        }),
        isDisabled && "opacity-60 active:scale-100",
        className,
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
