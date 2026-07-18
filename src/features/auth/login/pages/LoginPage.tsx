import { Button } from "@shared/components/Buttton";
import { Input } from "@shared/components/Input";
import { Page } from "@shared/components/Page";
import type { FC } from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import { Card } from "@shared/components/Containers/Card";
import { Field } from "@shared/components/Input/Field";
interface ILoginPageProps {}

export const LoginPage: FC<ILoginPageProps> = () => {
  const { form } = useLoginForm();
  return (
    <Page>
      <Page.Content center>
        <Card className="mb-20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="w-64 flex flex-col gap-2"
          >
            <div className="text-xl mb-6 text-center">Panda Shop Admin</div>
            <form.Field name="username">
              {(field) => (
                <Field field={field}>
                  <Input
                    placeholder="Username"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="password">
              {(field) => (
                <Field field={field}>
                  <Input
                    placeholder="Password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    type="password"
                  />
                </Field>
              )}
            </form.Field>

            <form.Subscribe selector={(state) => state.canSubmit}>
              {(canSubmit) => (
                <Button
                  isDisabled={!canSubmit}
                  className="border py-1 px-4 mt-2"
                  onClick={() => {}}
                  isSubmit
                >
                  Login
                </Button>
              )}
            </form.Subscribe>
          </form>
        </Card>
      </Page.Content>
    </Page>
  );
};
