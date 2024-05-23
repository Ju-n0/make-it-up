import { createReducer } from "@reduxjs/toolkit";
import { actionCreateUser, actionLogOut, actionLogIn, actionAddToCart } from "../ToolkitActions";
import { IUser } from "../../@types/user";
import { Product } from "../../@types/Product";
import users from "../../data/users.json";

interface StateProps {
  users: IUser[];
  isLogged: boolean;
  currentPseudo: string;
  currentCart: Product[];
}

const stateInitial: StateProps = {
  users: users,
  isLogged: false,
  currentPseudo: "",
  currentCart: [],
};

const userReducer = createReducer(stateInitial, (builder) => {
  builder
    .addCase(actionCreateUser, (state, action) => {
      state.users.push({
        id: action.payload.id,
        email: action.payload.email,
        password: action.payload.password,
        pseudo: action.payload.pseudo,
        cart: [],
      });
    })
    .addCase(actionLogIn, (state, action) => {
      state.isLogged = true;
      state.currentPseudo = action.payload.pseudo;
      state.currentCart = action.payload.cart;
    })
    .addCase(actionLogOut, (state) => {
      state.isLogged = false;
      state.currentPseudo = "";
    })
    .addCase(actionAddToCart, (state, action) => {
      state.currentCart.push(action.payload.product);
    });
});

export default userReducer;
