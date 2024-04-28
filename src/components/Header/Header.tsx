import { NavLink } from "react-router-dom";

import "./header.scss";

function Header() {
  return (
    <nav className="header">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "header-link header-link--active" : "header-link";
        }}
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "header-link header-link--active" : "header-link";
        }}
        to="/search"
      >
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "header-link header-link--active" : "header-link";
        }}
        to="/connexion"
      >
        Connexion
      </NavLink>
    </nav>
  );
}

export default Header;
