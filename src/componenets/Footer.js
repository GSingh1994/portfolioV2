import logoGithub from "../assets/logo-github.svg";
import logoLinkedin from "../assets/logo-linkedin.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="copyRight">© 2021 Gagandeep Singh</div>

      <div className="icons">
        <a
          href="https://github.com/GSingh1994"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoGithub} alt="Github logo" />
        </a>

        <a href="https://dev.to/gsingh" target="_blank" rel="noreferrer">
          <img
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            alt="Dev logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gagandeep-singh1994/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoLinkedin} alt="Linkedin logo" />
        </a>
      </div>

      <div className="madeWith">
        Made with <span>☕</span>
      </div>
    </div>
  );
};

export default Footer;
