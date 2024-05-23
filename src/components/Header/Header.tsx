import { NavLink } from "react-router-dom";
import "./header.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { actionLogOut } from "../../store/ToolkitActions";
import dore from "../../assets/dore.png";

interface HeaderProps {
  connexionHidden: boolean;
  setConnexionHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ connexionHidden, setConnexionHidden }: HeaderProps) {
  const isLogged = useAppSelector((state) => state.usersReducer.isLogged);

  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(actionLogOut());
  };

  return (
    <div>
      <img className="header-img" src={dore} alt="" />
      <div className="header">
        <h1 className="header-title">Make it Up</h1>
        <nav>
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
          {isLogged ? (
            <button
              className={!connexionHidden ? "header-button header-button--active" : "header-button"}
              onClick={() => {
                handleLogOut();
              }}
            >
              Déconnexion
            </button>
          ) : (
            <button
              className={!connexionHidden ? "header-button header-button--active" : "header-button"}
              onClick={() => {
                setConnexionHidden(!connexionHidden);
              }}
            >
              Connexion
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
