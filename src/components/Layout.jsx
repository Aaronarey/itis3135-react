/*
  Layout.jsx - the shared frame for every page: header, the current
  page inside <main> (rendered by <Outlet />), and the footer.
  It also jumps back to the top of the window whenever the page changes,
  since a React route change doesn't reload the page.
*/
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
