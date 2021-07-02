import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";
import navBookmark from "../assets/nav-bookmark.svg";
import navGallery from "../assets/nav-gallery.svg";

function Nav(props) {
  return (
    <header className="header">
      <nav className={`nav ${props.light && "nav--light"}`}>
        <p className="nav__logo">
          <Link className="nav__logo-link" to="/">
            RE:<span className="nav__logo--colored">create</span>
          </Link>
        </p>
        <ul className="nav__menu">
          <li className="nav__list-item nav__list-item--art">
            <NavLink
              exact
              className="nav__link"
              activeClassName="nav__link--active"
              to="/"
            >
              <span className="nav__text">art of the day</span>
              <img src={navGallery} className="nav__img" alt="art of the day" />
            </NavLink>
          </li>
          <li className="nav__list-item nav__list-item--fav">
            <NavLink
              exact
              className="nav__link"
              activeClassName="nav__link--active"
              to="/my-favourites"
            >
              <span className="nav__text">my favourites</span>
              <img src={navBookmark} className="nav__img" alt="my favourites" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
