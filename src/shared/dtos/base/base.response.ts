export type BaseResponse<T> = {
  data: T | null;
  statusCode: number;
  success: boolean;
};

export type UpdateResponse = BaseResponse<any>;

export type CreateResponseData = {
  id: number | string;
};

export type CreateResponse = BaseResponse<CreateResponseData>;

export type CreateOrUpdateResponse = UpdateResponse | CreateResponse;

export type DeleteResponse = BaseResponse<any>;
