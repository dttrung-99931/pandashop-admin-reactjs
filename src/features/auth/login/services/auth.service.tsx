import type { BaseResponse } from "@shared/dtos/base/base.response";
import type { LoginRequest } from "../types/request.dto";
import { api } from "@shared/services/axios/axios.service";
import type { LoginResponseData } from "../types/response.dto";
import type { AxiosResponse } from "axios";

class AuthService {
  async login(request: LoginRequest): Promise<BaseResponse<LoginResponseData>> {
    const response: AxiosResponse = await api.post("v1/Users/login", request);
    return response.data;
  }
}

export const authService = new AuthService();
