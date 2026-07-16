import type { GetPanMusicsRequest } from "../dtos/response.dto";

export const panMusicApiKeys = {
  getPanMusics: (request: GetPanMusicsRequest) => ["getPanMusics", request.q],
};
