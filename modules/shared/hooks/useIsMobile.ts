import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      setIsMobile(
        /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      );
    }
  }, []);

  return isMobile;
}