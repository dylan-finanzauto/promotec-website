import { useContext } from "react";
import { InjectContext } from "../_context/InjectContext";

export function useInjection() {
  const context = useContext(InjectContext);
  if (!context) {
    throw new Error("useInjection debe estar dentro de un InjectProvider");
  }
  return context;
}
