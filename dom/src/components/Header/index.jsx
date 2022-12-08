import { NavLink } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a className="header__logo" href="#">
            LOGO
          </a>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <NavLink className="header__item-link" to={"/"}>
                  home
                </NavLink>
              </li>
              <li className="header__list-item">
                <NavLink className="header__item-link" to={"/countries"}>
                  countries
                </NavLink>
              </li>
              <li className="header__list-item">
                <NavLink className="header__item-link" to={"/location"}>
                  location
                </NavLink>
              </li>
            </ul>
            <a className="header__contact-link" href="#">
              contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
