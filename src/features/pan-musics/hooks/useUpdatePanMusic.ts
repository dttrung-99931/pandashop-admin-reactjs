import type { AppException } from "@shared/exceptions/exception";
import { useMutation } from "@tanstack/react-query";
import { panMusicApiKeys } from "../constants/api.keys";
import { type UpdatePanMusicRequest } from "../dtos/request.dto";
import { panMusicsService } from "../services/pan-musics.service";
import type {
  CreateResponse,
  UpdateResponse,
} from "@shared/dtos/base/base.response";

type UseUpdatePanMusicProps = {
  id?: number;
  onSuccess: (res: CreateResponse) => void;
  onError: (exception: AppException) => void;
};

export function useUpdatePanMusic({
  id,
  onSuccess,
  onError,
}: UseUpdatePanMusicProps) {
  const { isPending, mutate } = useMutation<
    UpdateResponse,
    AppException,
    UpdatePanMusicRequest
  >({
    mutationKey: panMusicApiKeys.updatePanMusic(id),
    mutationFn: async (request) => {
      return await panMusicsService.update(request);
    },
    onSuccess,
    onError,
  });

  return { mutate, isLoading: isPending };
}
