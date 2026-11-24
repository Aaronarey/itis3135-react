/*
  App.jsx - the page routes. Every page shares one Layout, which holds the
  common header and footer, the same way components/header.html and
  components/footer.html are shared on the regular site.
*/
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Introduction from "./pages/Introduction.jsx";
import Contract from "./pages/Contract.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="contract" element={<Contract />} />
        <Route path="about" element={<About />} />
        {/* Any unknown address falls back to the home page */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
