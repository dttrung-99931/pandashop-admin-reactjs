import { useMutation } from "@tanstack/react-query";
import { panMusicApiKeys } from "../constants/api.keys";
import type { DeleteResponse } from "@shared/dtos/base/base.response";
import type { AppException } from "@shared/exceptions/exception";
import type { DeleteRequest } from "@shared/dtos/base/base.request";
import { panMusicsService } from "../services/pan-musics.service";
import { useCallback } from "react";
import type { PanMusicItemResponse } from "../dtos/response.dto";

interface UseDeletePanMusicProps {
  onSuccess?: () => void;
  onError?: (error: AppException) => void;
}

export function useDeletePanMusic({
  onError,
  onSuccess,
}: UseDeletePanMusicProps) {
  const { mutate, isPending } = useMutation<
    DeleteResponse,
    AppException,
    DeleteRequest
  >({
    mutationKey: panMusicApiKeys.updatePanMusic(),
    mutationFn: (request) => {
      return panMusicsService.delete(request.id);
    },
    onSuccess,
    onError,
  });

  const handleDelete = useCallback(
    async (panMusic: PanMusicItemResponse) => {
      const isConfirmed = confirm(`Are you sure to delete ${panMusic.title}`);
      if (isConfirmed) {
        mutate({ id: panMusic.id });
      }
    },
    [mutate],
  );

  return { handleDelete };
}
