import { cn } from "@utils/cn";
import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Loading } from "../Loading";

const ButtonVariants = tv({
  base: cn("rounded-md border-none", "active:scale-95 select-none"),
  variants: {
    type: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      icon: "",
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
  size,
}) => {
  if (!size && type === "icon") {
    size = "sm";
  }
  const disabled = isLoading || isDisabled;
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={cn(
        ButtonVariants({
          type: type,
          size: size,
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
