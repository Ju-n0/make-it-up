import logo from "../../assets/404-error.jpg";
import "./error.scss";
function Error() {
  return (
    <div className="not-found">
      <p className="not-found-message">Désolé, une erreur inattendue est survenue.</p>
      <img src={logo} alt="" className="not-found-img" />
    </div>
  );
}

export default Error;
