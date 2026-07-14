import { ErrorMessageComponent } from "@shared/components/Error";
import type { AnyFieldApi } from "@tanstack/react-form";
import type { FC, ReactNode } from "react";

interface IFieldProps {
  children: ReactNode;
  field: AnyFieldApi;
}

export const Field: FC<IFieldProps> = ({ children, field }) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
      {field.state.meta.errors.map((err) => (
        <ErrorMessageComponent key={err.message} message={err.message} />
      ))}
    </div>
  );
};
