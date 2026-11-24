/*
  Footer.jsx - the shared footer, matching components/footer.html on the
  regular site, with my tagline, profile links, designer credit and
  validation links.
*/
const FOOTER_LINKS = [
  { label: "CLT Web", url: "https://webpages.charlotte.edu/areyes24/" },
  { label: "GitHub.io", url: "https://aaronarey.github.io/" },
  { label: "GitHub.io ITIS3135", url: "https://aaronarey.github.io/itis3135/" },
  { label: "GitHub", url: "https://github.com/Aaronarey" },
  { label: "freeCodeCamp", url: "https://www.freecodecamp.org/aaronarey" },
  { label: "Codecademy", url: "https://www.codecademy.com/profiles/Aaronarey" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/aaron-reyes-715935328/" }
];

export default function Footer() {
  return (
    <footer>
      <p><em>Ambitious, thick-skinned, and always charging forward.</em></p>
      <nav aria-label="My links">
        <ul>
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}><a href={link.url}>{link.label}</a></li>
          ))}
        </ul>
      </nav>
      <p>Designed by <a href="https://aaronarey.github.io/itis3135/aaronreyesdesigns.com/">Aaron Reyes Designs</a> &copy;2026</p>
      <p>Certified in: <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/">Responsive Web Design</a> (in progress)</p>
      <p>
        <a href="https://validator.w3.org/check?uri=referer">Validate HTML</a> |{" "}
        <a href="https://jigsaw.w3.org/css-validator/check/referer">Validate CSS</a>
      </p>
    </footer>
  );
}
