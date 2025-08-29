import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageview } from "../../lib/gtag";

export default function RouteTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    trackPageview(pathname + search);
  }, [pathname, search]);

  return null;
}
