export type BaseResponse<T> = {
  data: T | null;
  statusCode: number;
  success: boolean;
};
