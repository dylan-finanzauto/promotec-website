export interface PaginationRequest {
  FileName: string;
  UserName: string;
  PageNumber: number;
  PageSize: number;
}

export interface CreateRequest {
  MemoFileId: number;
  FileName: string;
}

export interface UpdateRequest {
  MemoFileId: number;
  FileName: string;
}

export interface DeleteRequest {
  MemoFileId: number;
}

export interface MemoResponse {
  memoFileId: number;
  nodeId: string;
  originalName: string;
  size: number;
  extension: string;
  created: string;
  createdBy: string;
}
