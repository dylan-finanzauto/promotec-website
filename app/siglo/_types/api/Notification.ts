// export interface Notification {
//   id: number;
//   isRead: boolean;
//   ticketId: string;
//   messageContent: string;
//   ticketSequenceCode: string;
//   createdByName: string;
//   redirect: null;
//   createdDate: string;
// }
export interface Notification {
  id: string;
  title: string;
  isRead: boolean;
  messageContent: string;
  createdDate: string;
}
