/*
  About.jsx - about the course, same content as about.html.
  The two lists are kept as arrays and mapped into list items.
*/
import usePageTitle from "../hooks/usePageTitle.js";

const TOOLS = [
  "VS Code",
  "Emmet within VS Code",
  "SFTP via Filezilla",
  "Git via GitHub Desktop and GitHub.com",
  "Various browser tools",
  "The Accumulus Validator"
];

const SITES = [
  "A personal home portfolio",
  "This course site",
  "A design firm site, representing a fictitious/aspirational design firm named after me",
  "A \"Crappy\" page, intended to do all the bad things so as to avoid them anywhere else",
  "A whimsical product company",
  "A student/colleague/peer management tool",
  "A client project website"
];

export default function About() {
  usePageTitle("About");

  return (
    <>
      <h2>About</h2>
      <p>This page is built in part to demonstrate my work for the Charlotte class ITIS3135 - Front-End Web Application Development, taught by Professor D.I. von Briesen. Additional information about the course is available at <a href="https://divonbriesen.github.io/teaching/itis3135/">divonbriesen.github.io/teaching/itis3135</a>.</p>
      <p>This course provides relevant experience in front-end web application development by building multiple websites using a variety of tools and techniques.</p>

      <h3>Tools the Course Uses</h3>
      <ul>
        {TOOLS.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>

      <h3>Sites I Will Build</h3>
      <ul>
        {SITES.map((site) => <li key={site}>{site}</li>)}
      </ul>
    </>
  );
}
