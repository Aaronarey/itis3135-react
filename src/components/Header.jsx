/*
  Header.jsx - the shared header, matching components/header.html on the
  regular site. The main menu is shortened to the four pages this React
  version has. NavLink adds aria-current="page" to the current page's link,
  which the stylesheet already uses to underline it.
  The secondary menu points back to my other sites on GitHub Pages.
*/
import { NavLink } from "react-router-dom";

const COURSE_SITE = "https://aaronarey.github.io/itis3135/";

export default function Header() {
  return (
    <header>
      <img src="/images/rhino_logo.svg" alt="Ambitious Rhino logo" width="72" height="72" />
      {/* class site-title: the same heading style used on every page of the regular site */}
      <h1 className="site-title">Aaron Reyes's Ambitious Rhino | ITIS3135</h1>
      <nav aria-label="Main menu">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/introduction">Introduction</NavLink></li>
          <li><NavLink to="/contract">Contract</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
      {/* class secondary-nav: styles the smaller menu of my other sites, same as the regular site */}
      <nav className="secondary-nav" aria-label="Other sites and pages">
        <ul>
          <li><a href={`${COURSE_SITE}stuff/Aaron%27s%20CRAPpy%20Page%20(v2)%20-%20FINAL!!.htm`}>CRAPpy Page</a></li>
          <li><a href={`${COURSE_SITE}aaronreyesdesigns.com/`}>Aaron Reyes Designs</a></li>
          <li><a href="https://aaronarey.github.io/">Personal Home Page</a></li>
          <li><a href={`${COURSE_SITE}hobby/`}>Hobby</a></li>
          <li><a href={`${COURSE_SITE}ambitiousrhino/`}>Rhino Charge</a></li>
          <li><a href={COURSE_SITE}>Course Site</a></li>
        </ul>
      </nav>
    </header>
  );
}
