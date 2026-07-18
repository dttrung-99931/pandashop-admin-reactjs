import type { BaseResponse } from "./base/base.response";

export type CreateResponseData = {
  id: number | string;
};

export type CreateResponse = BaseResponse<CreateResponseData>;
