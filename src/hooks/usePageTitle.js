/*
  usePageTitle.js - sets the browser tab title for the current page,
  following the course standard: h1 text, a divider, then the page's h2.
*/
import { useEffect } from "react";

const SITE_TITLE = "Aaron Reyes's Ambitious Rhino | ITIS3135";

export default function usePageTitle(pageName) {
  useEffect(() => {
    document.title = `${SITE_TITLE} | ${pageName}`;
  }, [pageName]);
}
