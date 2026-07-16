import { api } from "@shared/services/axios/axios.service";
import type {
  GetPanMusicsRequest,
  PanMusicListResponse,
} from "../dtos/response.dto";

// import type { PanMusicResponse } from "../dtos/response.dto";
class PanMusicsService {
  async getList(request: GetPanMusicsRequest): Promise<PanMusicListResponse> {
    const response = await api.get<PanMusicListResponse>("v1/PanMusics/", {
      params: request,
    });
    return response.data;
  }
}

export const panMusicsService = new PanMusicsService();
