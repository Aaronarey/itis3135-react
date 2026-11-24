/*
  Home.jsx - the home page, same content as index.html on the regular site.
  Pages that only exist on the regular site link there directly.
*/
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";

const COURSE_SITE = "https://aaronarey.github.io/itis3135/";

export default function Home() {
  usePageTitle("Home");

  return (
    <>
      <h2>Home</h2>
      <p>Welcome to my ITIS3135 (Front-End Web App Development) course website. I'm Aaron Reyes, a junior at UNC Charlotte studying Computer Science, and this site is where I'll be posting my coursework, projects, and assignments for the semester.</p>
      <p>Feel free to check out my <Link to="/introduction">Introduction page</Link> to learn more about me, or browse the navigation above to see my course contract and future assignments.</p>
      <p>My freeCodeCamp Responsive Web Design projects share one theme: Rhino Charge, the Ambitious Rhino's portable power company. Rhinos charge, so my mascot sells chargers. Start with the <a href={`${COURSE_SITE}product.html`}>Black Rhino 20K product page</a>, or take the <a href={`${COURSE_SITE}survey.html`}>Rhino Charge survey</a>.</p>
    </>
  );
}
