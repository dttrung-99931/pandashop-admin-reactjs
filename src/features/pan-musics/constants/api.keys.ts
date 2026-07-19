import type { GetPanMusicsRequest } from "../dtos/response.dto";

export const panMusicApiKeys = {
  getPanMusics: (request: GetPanMusicsRequest) => ["getPanMusics", request.q],
  getPanMusicById: (id?: number) => ["getPanMusicById", id],
  createPanMusic: () => ["createPanMusic"],
  updatePanMusic: (id?: number) => ["updatePanMusic", id],
};
