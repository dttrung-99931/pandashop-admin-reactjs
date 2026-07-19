import { Modal } from "@shared/components/Modal";
import type { FC } from "react";
import { usePanMusicForm } from "../hooks/usePanMusicForm";
import { Field } from "@shared/components/Input/Field";
import { Input } from "@shared/components/Input";
import { Button } from "@shared/components/Buttton";
import { showErrorToast, showMessageToast } from "@utils/toast";

interface IPanMusicDetailModalProps {
  editId?: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

export const PanMusicDetailModal: FC<IPanMusicDetailModalProps> = ({
  onClose,
  editId,
  onSuccess,
}) => {
  const isEdit = editId !== undefined;
  const { form, isLoading } = usePanMusicForm({
    editId,
    onError: (ex) => {
      showErrorToast(ex.message);
    },
    onSuccess: () => {
      showMessageToast(
        isEdit
          ? "Panmusic updated successfully"
          : "Panmusic created successfully",
      );
      onSuccess?.();
    },
  });

  return (
    <Modal onClose={onClose}>
      <form
        className="h-full flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="text-lg my-2 text-center">Create PanMusic</div>

        <form.Field name="title">
          {(field) => (
            <Field field={field}>
              <Input
                value={field.state.value}
                placeholder="Name"
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              ></Input>
            </Field>
          )}
        </form.Field>

        <form.Field name="music">
          {(field) => (
            <Field field={field}>
              <Input
                type="file"
                onChange={(e) => {
                  if (e.target?.files?.[0]) {
                    field.handleChange(e.target?.files?.[0]);
                  }
                }}
                onBlur={field.handleBlur}
              ></Input>
            </Field>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) =>
            state.canSubmit &&
            (isEdit ||
              // When create the form must has some changes
              state.isDirty)
          }
        >
          {(canSubmit) => (
            <Button
              isLoading={isLoading}
              className="my-2"
              isDisabled={!canSubmit}
              isSubmit
            >
              {isEdit ? "Update" : "Create"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </Modal>
  );
};
