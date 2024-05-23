import { createReducer } from "@reduxjs/toolkit";
import {
  actionCreateUser,
  actionLogOut,
  actionLogIn,
  actionAddToCart,
  actionModifyQuantity,
  actionDeleteFromCart,
  actionResetCurrentCart,
} from "../ToolkitActions";
import { IUser } from "../../@types/user";
import { Product } from "../../@types/Product";
import users from "../../data/users.json";
import { Cart } from "../../@types/Cart";

interface StateProps {
  users: IUser[];
  isLogged: boolean;
  currentPseudo: string;
  currentCart: Cart;
}

const stateInitial: StateProps = {
  users,
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
      const product = state.currentCart.find((product) => product.id === action.payload.product.id);

      if (product) {
        product.quantity = product.quantity + 1;
        return;
      }

      state.currentCart.push({ ...action.payload.product, quantity: 1 });
    })
    .addCase(actionModifyQuantity, (state, action) => {
      state.currentCart = state.currentCart.map((product) => {
        if (+product.id === +action.payload.id) {
          product.quantity = +action.payload.quantity;
        }

        return product;
      });
    })
    .addCase(actionDeleteFromCart, (state, action) => {
      state.currentCart = state.currentCart.filter((product) => product.id !== action.payload.id);
    })
    .addCase(actionResetCurrentCart, (state) => {
      state.currentCart = [];
    });
});

export default userReducer;
