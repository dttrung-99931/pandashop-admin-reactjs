import type { BaseResponse } from "@shared/dtos/base/base.response";

export type PanMusicListResponse = BaseResponse<Array<PanMusicItemResponse>>;

export type PanMusicItemResponse = {
  id: number;
  title: string;
  musicUrl: string;
  durationInSecs: number;
};

export type GetPanMusicsRequest = {
  q?: string;
};

export type PanMusicDetailResponse = BaseResponse<PanMusicItemResponse>;

