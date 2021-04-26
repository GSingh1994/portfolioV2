import logoGithub from "../assets/logo-github.svg";
import logoLinkedin from "../assets/logo-linkedin.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="copyRight">© 2021 Gagandeep Singh</div>

      <div className="icons">
        <img src={logoGithub} alt="" />
        <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="" />
        <img src={logoLinkedin} alt="" />
      </div>

      <div className="madeWith">Made with ☕</div>
    </div>
  );
};

export default Footer;
