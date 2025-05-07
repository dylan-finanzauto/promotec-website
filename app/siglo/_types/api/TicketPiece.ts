export interface TicketPieceResponse {
  pieceId: string;
  count: number;
  replace: boolean;
  amount: number;
  typePieceName: number;
  typeDamageName: number;
  sizeDamageName: number;
  attributableName: number;
  stateName: number;
  typologyName: number;
}

export interface AddPieceRequest {
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
