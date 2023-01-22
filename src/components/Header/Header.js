import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/BrainFlix-logo.svg";
import Icon from "../../assets/images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="brainflix__logo" src={Logo} alt="Brainflix Logo"></img>
      </Link>
      <div className="header__nav-container">
        <nav className="header__nav">
          <input
            className="header__nav-search"
            type="search"
            placeholder="Search"
          ></input>
          <Link
            className="header__nav-upload header__nav-upload-tablet"
            to="/upload"
          >
            UPLOAD
          </Link>
          <img className="profile__icon" src={Icon} alt="Profile Icon"></img>
        </nav>
        <Link
          className="header__nav-upload header__nav-upload-mobile "
          to="/upload"
        >
          UPLOAD
        </Link>
      </div>
    </header>
  );
}
