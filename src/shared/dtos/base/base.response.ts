export type BaseResponse<T extends Record<string, unknown>> = {
  data: T | null;
  statusCode: number;
  success: boolean;
};
