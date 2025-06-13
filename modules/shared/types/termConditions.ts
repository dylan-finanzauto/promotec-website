import { JSX } from "react";
export interface DocumentItem {
  idDocument: number;
  title: string;
  url: string;
}
export interface AttendanceItem {
  id: number;
  icon: JSX.Element;
  document: DocumentItem[];
}