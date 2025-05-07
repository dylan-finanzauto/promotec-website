/**
 * * @description Basic request structure for API requests.
 */
export interface CommentRequest {
  emails: string[];
  comment: string;
  files: FileRequest[];
}

export interface FileRequest {
  FileBase64: string;
  fileName: string;
}

/**
 * * @description Basic response structure for API responses.
 */
export interface CommentResponse {
  observation: string;
  emails: string[];
  files: FileResponse[];
  userName: string;
  created: string;
}

export interface FileResponse {
  nodeId: string;
  originalName: string;
  size: number;
  extension: string;
  created: string;
  createdBy: string;
}
