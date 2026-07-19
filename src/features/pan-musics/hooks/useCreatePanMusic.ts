import type {
  CreateOrUpdateResponse,
  CreateResponse,
} from "@shared/dtos/base/base.response";
import type { AppException } from "@shared/exceptions/exception";
import { useMutation } from "@tanstack/react-query";
import { panMusicApiKeys } from "../constants/api.keys";
import { type CreatePanMusicRequest } from "../dtos/request.dto";
import { panMusicsService } from "../services/pan-musics.service";

type UseCreatePanMusicProps = {
  onSuccess: (res: CreateOrUpdateResponse) => void;
  onError: (exception: AppException) => void;
};

export function useCreatePanMusic({
  onSuccess,
  onError,
}: UseCreatePanMusicProps) {
  const { isPending, mutate } = useMutation<
    CreateResponse,
    AppException,
    CreatePanMusicRequest
  >({
    mutationKey: panMusicApiKeys.createPanMusic(),
    mutationFn: async (request) => {
      return await panMusicsService.create(request);
    },
    onSuccess: onSuccess,
    onError: onError,
  });

  return { mutate, isLoading: isPending };
}
