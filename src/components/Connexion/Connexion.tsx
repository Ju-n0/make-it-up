import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import "./connexion.scss";
import { actionCreateUser } from "../../store/ToolkitActions";
import { actionLogIn } from "../../store/ToolkitActions";
import { IUser } from "../../@types/user";

interface ConnexionProps {
  connexionHidden: boolean;
  setConnexionHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function Connexion({ connexionHidden, setConnexionHidden }: ConnexionProps) {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputPseudoValue, setInputPseudoValue] = useState("");
  const [signIn, setSignIn] = useState(false);

  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.usersReducer.users);
  const idsArray = users.map((user: IUser) => user.id);
  const biggerId = Math.max(...idsArray);
  const newId = biggerId + 1;

  const handleAccountCreation = () => {
    dispatch(
      actionCreateUser({
        id: newId,
        email: inputEmailValue,
        password: inputPasswordValue,
        pseudo: inputPseudoValue,
        cart: [],
      })
    );
  };
  const handleLogIn = () => {
    const currentUser = users.filter(
      (user: IUser) => user.email === inputEmailValue && user.password === inputPasswordValue
    );

    console.log(currentUser);

    if (!currentUser[0]) {
      return;
    }
    dispatch(actionLogIn(currentUser[0]));
  };

  return (
    <div
      className={
        connexionHidden ? "connexion-container connexion-container-hidden" : "connexion-container"
      }
    >
      <button className="sign-in-button" onClick={() => setSignIn(!signIn)}>
        {signIn ? "Log-In" : "Sign-In"}
      </button>
      {signIn ? (
        <form
          className="connexion-form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleAccountCreation();
            setSignIn(false);
            setInputEmailValue("");
            setInputPasswordValue("");
            setInputPseudoValue("");
          }}
        >
          <input
            type="text"
            placeholder="Email"
            value={inputEmailValue}
            onChange={(event) => {
              setInputEmailValue(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            value={inputPasswordValue}
            onChange={(event) => {
              setInputPasswordValue(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Pseudo"
            value={inputPseudoValue}
            onChange={(event) => {
              setInputPseudoValue(event.target.value);
            }}
          />
          <button type="submit">Create account</button>
        </form>
      ) : (
        <form
          className="connexion-form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();

            handleLogIn();
            setInputEmailValue("");
            setInputPasswordValue("");
            setConnexionHidden(true);
          }}
        >
          <input
            type="text"
            placeholder="Email"
            value={inputEmailValue}
            onChange={(event) => {
              setInputEmailValue(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            value={inputPasswordValue}
            onChange={(event) => {
              setInputPasswordValue(event.target.value);
            }}
          />

          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
}

export default Connexion;
