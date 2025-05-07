export interface BasicResponse<T> {
  isSuccess: boolean;
  isFailure: boolean;
  value: T,
  error: ErrorResponse;
}

export interface ErrorResponse {
  code: null;
  description: string;
  type: number;
}

export interface PaginationResponse<T> {
  page: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: T[];
}
