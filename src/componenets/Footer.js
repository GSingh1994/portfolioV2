import logoGithub from "../assets/logo-github.svg";
import logoLinkedin from "../assets/logo-linkedin.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="leftFooter">
        Made with
        <span className="leftIcons"> ☕</span>
      </div>
      <div className="rightFooter">
        © 2021 Gagandeep Singh
        <img src={logoGithub} alt="" />
        <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="" />
        <img src={logoLinkedin} alt="" />
      </div>
    </div>
  );
};

export default Footer;
