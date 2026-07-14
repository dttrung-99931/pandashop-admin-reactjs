import type { BaseResponse } from "@shared/dtos/base/base.response";

export type LoginResponse = BaseResponse<LoginResponseData>;

export type LoginResponseData = {
  userId: number;
  token: string;
  cartId: number;
  expires: string;
  shop?: {
    name: string;
    id: number;
  };
};
