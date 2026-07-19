import type { CreateResponse } from "@shared/dtos/base/base.response";
import type { AppException } from "@shared/exceptions/exception";
import { useForm } from "@tanstack/react-form";
import {
  panMusicScheme,
  type CreatePanMusicRequest,
  type PanMusicForm,
  type UpdatePanMusicRequest,
} from "../dtos/request.dto";
import { useCreatePanMusic } from "./useCreatePanMusic";
import { useGetPanMusicById } from "./useGetPanMusicById";
import { useUpdatePanMusic } from "./useUpdatePanMusic";

type UsePanMusicFormProps = {
  editId?: number;
  onSuccess: (res: CreateResponse) => void;
  onError: (exception: AppException) => void;
};

export function usePanMusicForm({
  editId,
  onSuccess,
  onError,
}: UsePanMusicFormProps) {
  const isEdit = editId !== undefined;

  const { data: editPanMusic } = useGetPanMusicById(editId);

  const { isLoading: isCreateLoading, mutate: mutateCreate } =
    useCreatePanMusic({
      onError,
      onSuccess,
    });

  const { isLoading: isUpdateLoading, mutate: mutateUpdate } =
    useUpdatePanMusic({
      id: editId,
      onError,
      onSuccess,
    });

  const defaultValues: PanMusicForm = {
    id: editPanMusic?.id,
    title: editPanMusic?.title ?? "",
    durationInSecs: editPanMusic?.durationInSecs,
    music: undefined,
  };

  const form = useForm({
    validators: {
      onChange: panMusicScheme(isEdit),
    },
    onSubmit: ({ value }) => {
      if (isEdit) {
        const request: UpdatePanMusicRequest = {
          id: editId,
          title: value.title,
          durationInSecs: value.durationInSecs ?? 0,
          music: value.music!,
        };
        mutateUpdate(request);
      } else {
        const request: CreatePanMusicRequest = {
          title: value.title,
          durationInSecs: value.durationInSecs ?? 0,
          music: value.music!,
        };
        mutateCreate(request);
      }
    },
    defaultValues: defaultValues,
  });

  return { form, isLoading: isCreateLoading || isUpdateLoading };
}
