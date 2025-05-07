export interface CreateRequest {
  client: string;
  concessionerCode: string;
  catalog: string;
  ocurrencyDate: string;
  deliveryDate: string;
  preAlertDate: string;
  contact: string;
  email: string;
  phone: string;
  concessionerId: number;
  typeVehicleId: number;
  serie: string;
  numberDua: string;
  numberRemesa: string;
  driverName: string;
  plate: string;
  pieces: PieceRequest[];
}

export interface PieceRequest {
  typeDamageId: number;
  typePieceId: number;
  sizeDamageId: number;
  count: number;
  replace: boolean;
  amount: number;
  attributableId: number;
  stateId: number;
  typologyId: number | null;
}

export interface CompleteRequest {
  alertDate: string;
  responseDate: string;
  requestDate: string;
  invoice: string;
  invoiceNumber: string;
  invoiceAmount: number;
  ticketAmount: number;
  firstPayment: number;
  emailId: number;
  comments: CommentRequest[];
}

export interface CommentRequest {
  emails: string[];
  comment: string;
  files: FileRequest[];
}

export interface FileRequest {
  FileBase64: string;
  fileName: string;
}

export interface UpdateRequest {
  client?: string;
  concessionerCode?: string;
  catalog?: string;
  ocurrencyDate?: string | null;
  deliveryDate?: string | null;
  preAlertDate?: string | null;
  contact?: string;
  email?: string;
  phone?: string;
  concessionerId?: number;
  typeVehicleId?: number;
  serie?: string;
  numberDua?: string;
  numberRemesa?: string;
  driverName?: string;
  plate?: string;
  alertDate?: string | null;
  responseDate?: string | null;
  requestDate?: string | null;
  invoice?: string;
  invoiceNumber?: string;
  invoiceAmount?: number;
  ticketAmount?: number;
  firstPayment?: number;
  ticketState?: number;
  emailId?: number;
  noticeResponse?: string;
  timeResponsePT?: string;
}

/**
 *
 */
export interface CompleteResponse {
  sequenceId: string;
  concessionerId: number;
  serie: string;
  observation: string;
}

export interface TicketResponse {
  ticketId: string;
  sequenceId: string;
  client: string;
  occurrenceDate: string;
  concessionerName: string;
  typeVehicleName: string;
  serie: string;
  plate: string;
  created: string;
}

export interface DetailResponse {
  client: string;
  concessionerCode: string;
  catalog: string;
  contact: string;
  email: string;
  phone: string;
  driverName: string;
  serie: string;
  numberDua: string;
  numberRemesa: string;
  plate: string;
  inVoice: string;
  inVoiceNumber: string;
  inVoiceAmount: number;
  ticketAmount: number;
  firstPayment: number;
  occurrenceDate: string;
  deliveryDate: string;
  preAlertDate: string;
  alertDate: string;
  responseDate: string;
  requestDate: string;
  state: boolean;
  companyId: null;
  concessionerId: number;
  typeVehicleId: number;
  ticketState: number;
  noticeResponse: string;
  timeResponsePT: string;
  attributableName: string;
}
