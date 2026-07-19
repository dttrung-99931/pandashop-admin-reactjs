import { useQuery } from "@tanstack/react-query";
import { panMusicApiKeys } from "../constants/api.keys";
import type { PanMusicDetailResponse } from "../dtos/response.dto";
import { panMusicsService } from "../services/pan-musics.service";

export function useGetPanMusicById(id?: number) {
  const { data, isPending, error, refetch } = useQuery({
    enabled: id !== undefined,
    queryKey: panMusicApiKeys.getPanMusicById(id),
    queryFn: async () => {
      return await panMusicsService.getById(id!);
    },
    select: (res: PanMusicDetailResponse) => res.data,
  });

  return { data, isLoading: isPending, error, refetch };
}
