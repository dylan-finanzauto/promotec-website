import { useContext } from "react";
import { AlertContext } from "../_context/AlertContext";

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert debe estar dentro de un ToastProvider");
  }
  return context;
}
