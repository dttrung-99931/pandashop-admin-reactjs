import { api } from "@shared/services/axios/axios.service";
import type {
  GetPanMusicsRequest,
  PanMusicListResponse,
} from "../dtos/response.dto";
import type { PanMusicRequest } from "../dtos/request.dto";
import type { CreateResponse } from "@shared/dtos/create.response";

// import type { PanMusicResponse } from "../dtos/response.dto";
class PanMusicsService {
  async getList(request: GetPanMusicsRequest): Promise<PanMusicListResponse> {
    const response = await api.get<PanMusicListResponse>("v1/PanMusics/", {
      params: request,
    });
    return response.data;
  }

  async create(request: PanMusicRequest): Promise<CreateResponse> {
    const formData = new FormData();
    formData.append("title", request.title);
    formData.append(
      "durationInSecs",
      request?.durationInSecs?.toString() ?? "0",
    );
    formData.append("music", request.music);
    const response = await api.post<CreateResponse>("v1/PanMusics/", formData);
    return response.data;
  }
}

export const panMusicsService = new PanMusicsService();
