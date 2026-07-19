import { api } from "@shared/services/axios/axios.service";
import type {
  GetPanMusicsRequest,
  PanMusicDetailResponse,
  PanMusicListResponse,
} from "../dtos/response.dto";
import type {
  CreatePanMusicRequest,
  UpdatePanMusicRequest,
} from "../dtos/request.dto";
import type {
  CreateResponse,
  DeleteResponse,
  UpdateResponse,
} from "@shared/dtos/base/base.response";

// import type { PanMusicResponse } from "../dtos/response.dto";
class PanMusicsService {
  async getList(request: GetPanMusicsRequest): Promise<PanMusicListResponse> {
    const response = await api.get<PanMusicListResponse>("v1/PanMusics/", {
      params: request,
    });
    return response.data;
  }

  async create(request: CreatePanMusicRequest): Promise<CreateResponse> {
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

  async update(request: UpdatePanMusicRequest): Promise<UpdateResponse> {
    const formData = new FormData();
    formData.append("id", request.id.toString());
    formData.append("title", request.title);
    formData.append(
      "durationInSecs",
      request?.durationInSecs?.toString() ?? "0",
    );
    if (request.music) {
      formData.append("music", request.music);
    }
    const response = await api.patch<CreateResponse>(
      `v1/PanMusics/${request.id}`,
      formData,
    );
    return response.data;
  }

  async getById(id: number): Promise<PanMusicDetailResponse> {
    const response = await api.get<PanMusicDetailResponse>(
      `v1/PanMusics/${id}`,
    );
    return response.data;
  }

  async delete(id: number): Promise<DeleteResponse> {
    const response = await api.delete<DeleteResponse>(`v1/PanMusics/${id}`);
    return response.data;
  }
}

export const panMusicsService = new PanMusicsService();
