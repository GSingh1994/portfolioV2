import logo from "../assets/myLogo.svg";
import gitLogo from "../assets/logo-github.svg";
import mailLogo from "../assets/mail.svg";
import linkedinLogo from "../assets/logo-linkedin.svg";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li className="logo">
            <img src={logo} width="32px" alt="logo" />
          </li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>
            <a href="https://github.com/GSingh1994">
              <img src={gitLogo} width="32px" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gagandeep-singh1994/">
              <img src={linkedinLogo} width="32px" alt="" />
            </a>
          </li>
          <li>
            <a href="mailto:singh.gagandeep0034@gmail.com">
              <img src={mailLogo} width="32px" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
