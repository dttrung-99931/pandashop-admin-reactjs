import { AppException } from "@shared/exceptions/exception";
import { panMusicApiKeys as panMusicKeys } from "../constants/api.keys";
import type {
  GetPanMusicsRequest,
  PanMusicItemResponse,
  PanMusicListResponse,
} from "../dtos/response.dto";
import { panMusicsService } from "../services/pan-musics.service";
import { useQuery } from "@tanstack/react-query";

export function useGetPanMusics(request: GetPanMusicsRequest) {
  const { data, isPending, error, refetch } = useQuery<
    PanMusicItemResponse[],
    AppException
  >({
    queryKey: panMusicKeys.getPanMusics(request),
    queryFn: async () => {
      const response: PanMusicListResponse =
        await panMusicsService.getList(request);
      return response.data ?? [];
    },
  });

  return { data: data ?? [], isLoading: isPending, error, refetch };
}
