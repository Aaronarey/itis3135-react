/*
  Introduction.jsx - my introduction, same content as introduction.html.
  The background bullets and courses are kept as data and mapped into
  the same list markup the regular page uses.
*/
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";

const BACKGROUND = [
  { label: "Personal Background", text: "I'm originally from New York and moved to Charlotte for school." },
  { label: "Professional Background", text: "I hold an active real estate license and have a background in real estate sales. I also founded and run Radiant Roots, a supplement brand, which I handle end to end: product, content, and sales." },
  { label: "Academic Background", text: "Computer Science, B.S. at UNC Charlotte, concentration in AI, Robotics & Gaming, minor in Mathematics. Junior, graduating in 2028." },
  { label: "Primary Work Computer", text: "A laptop running Windows 11." },
  { label: "Primary Work Location", text: "My apartment." },
  { label: "Alternate Computer & Location", text: "A campus computer at Atkins Library." }
];

const COURSES = [
  { name: "ITIS 3135 - Front-End Web App Development", contract: true, reason: "Major requirement, and I want to be able to build and ship a functional website on my own." },
  { name: "ITIS 3200 - Intro to Information Security & Privacy", reason: "Core security course for my degree, and a solid foundation for understanding how systems get broken." },
  { name: "ITIS 4214 - Usable Security and Privacy", reason: "I'm interested in the human side of security: why people ignore warnings and make risky choices even when the tech works." },
  { name: "ITSC 2181 - Intro to Computer Systems", reason: "Required for my degree; I want to understand what's happening underneath the code I write." }
];

export default function Introduction() {
  usePageTitle("Introduction");

  return (
    <>
      <h2>Introduction</h2>
      <h6>Aaron Reyes ~ Ambitious Rhino</h6>

      <figure>
        <img src="/images/aaron.jpg" alt="Aaron Reyes at dinner under string lights" width="400" />
        <figcaption>Picture of me at dinner!</figcaption>
      </figure>

      <p>Hi, my name is Aaron Reyes. I'm a junior at UNC Charlotte majoring in Computer Science with a concentration in AI, Robotics &amp; Gaming, and a minor in Mathematics. Outside of class I run my own supplement brand, and I'm working toward a career in AI sales. I'm looking forward to building real web projects this semester.</p>

      <ul>
        {BACKGROUND.map((item) => (
          <li key={item.label}><strong>{item.label}:</strong> {item.text}</li>
        ))}
        <li><strong>Courses I'm Taking &amp; Why:</strong>
          <ol>
            {COURSES.map((course) => (
              <li key={course.name}>
                {/* This course links to my contract, the same as the regular introduction page */}
                <strong>{course.contract ? <Link to="/contract">{course.name}</Link> : course.name}:</strong> {course.reason}
              </li>
            ))}
          </ol>
        </li>
        <li><strong>Funny/Interesting Item to Remember Me by:</strong> My dog and I have the same birthday.</li>
      </ul>

      <blockquote>
        <p>"The world is yours."</p>
        <p>~ Scarface</p>
      </blockquote>
    </>
  );
}
