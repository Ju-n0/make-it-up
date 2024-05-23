import { NavLink, useLocation } from "react-router-dom";
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
    // dispatch(actionResetCurrentCart());
  };

  const { pathname } = useLocation();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div>
      <img className="header-img" src={dore} alt="" />
      <div className="header">
        <h1 className="header-title">Make it Up</h1>
        <nav>
          <NavLink
            className={() => {
              const regexp = new RegExp(`^${baseUrl}/?$`, "g");
              return regexp.test(pathname) ? "header-link header-link--active" : "header-link";
            }}
            to={baseUrl}
          >
            Accueil
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "header-link header-link--active" : "header-link";
            }}
            to={`${baseUrl}/search`}
          >
            Search
          </NavLink>
          {isLogged ? (
            <>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "header-link header-link--active" : "header-link";
                }}
                to={`${baseUrl}/cart`}
              >
                My cart
              </NavLink>
              <button
                className={
                  !connexionHidden ? "header-button header-button--active" : "header-button"
                }
                onClick={() => {
                  handleLogOut();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className={!connexionHidden ? "header-button header-button--active" : "header-button"}
              onClick={() => {
                setConnexionHidden(!connexionHidden);
              }}
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
