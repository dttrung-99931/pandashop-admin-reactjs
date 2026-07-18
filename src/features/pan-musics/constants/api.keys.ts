import type { PanMusicRequest } from "../dtos/request.dto";
import type { GetPanMusicsRequest } from "../dtos/response.dto";

export const panMusicApiKeys = {
  getPanMusics: (request: GetPanMusicsRequest) => ["getPanMusics", request.q],
  createPanMusic: () => ["createPanMusic"],
};
