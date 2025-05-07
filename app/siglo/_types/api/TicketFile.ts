export interface UpdateRequest {
  nodeId: string;
  fileName: string;
}

export interface TicketFileResponse {
  nodeId: string;
  originalName: string;
  size: number;
  extension: string;
  created: string;
  createdBy: string;
}

export interface B64Response {
  name: string;
  extension: string;
  base64: string;
}
