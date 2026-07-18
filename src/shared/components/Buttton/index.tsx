import { cn } from "@utils/cn";
import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Loading } from "../Loading";

const ButtonVariants = tv({
  base: cn("rounded-md border-none text-white", "active:scale-95 select-none"),
  variants: {
    type: {
      primary: "bg-primary",
      secondary: "bg-secondary",
    },
    size: {
      md: "px-4 py-1",
      sm: "px-2 py-1",
    },
  },
  defaultVariants: {
    type: "primary",
    size: "md",
  },
});

type ButtonVariantsProps = VariantProps<typeof ButtonVariants>;

type IButtonProps = ButtonVariantsProps & {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  isSubmit?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  className,
  isSubmit,
  type,
  isDisabled,
  isLoading,
}) => {
  const disabled = isLoading || isDisabled;
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={cn(
        ButtonVariants({
          type: type,
        }),
        disabled && "opacity-60 active:scale-100",
        !isLoading && "cursor-pointer",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Loading size="xs" color="white"></Loading> : children}
    </button>
  );
};
