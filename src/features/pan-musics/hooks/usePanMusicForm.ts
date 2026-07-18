import type { CreateResponse } from "@shared/dtos/create.response";
import type { AppException } from "@shared/exceptions/exception";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { panMusicApiKeys } from "../constants/api.keys";
import {
  panMusicScheme,
  type PanMusicRequest,
  type PanMusicScheme,
} from "../dtos/request.dto";
import { panMusicsService } from "../services/pan-musics.service";

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
  const { isPending, mutate } = useMutation<
    CreateResponse,
    AppException,
    PanMusicRequest
  >({
    mutationKey: panMusicApiKeys.createPanMusic(),
    mutationFn: async (request) => {
      return await panMusicsService.create(request);
    },
    onSuccess: onSuccess,
    onError: onError,
  });
  const form = useForm({
    validators: {
      onChange: panMusicScheme,
      onSubmit: ({ value }) => {
        const request: PanMusicRequest = {
          title: value.title,
          durationInSecs: value.durationInSecs ?? 0,
          music: value.music,
          id: value.id,
        };
        mutate(request);
      },
    },
    defaultValues: {
      id: undefined,
      title: "",
      music: undefined as unknown as File,
    } as PanMusicScheme,
  });
  return { form, isLoading: isPending };
}
