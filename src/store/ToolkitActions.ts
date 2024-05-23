import { createAction } from "@reduxjs/toolkit";
import { Product } from "../@types/Product";
import { IUser } from "../@types/user";

export const actionCreateUser = createAction<{
  id: number;
  email: string;
  password: string;
  pseudo: string;
  cart: string[];
}>("CREATE_USER");

export const actionLogIn = createAction<IUser>("CONNECT_USER");

export const actionLogOut = createAction("user/LOGOUT");

export const actionAddToCart = createAction<{
  product: Product;
}>("ADD_TO_CART");

export const actionModifyQuantity = createAction<{
  quantity: number;
  id: number;
}>("MODIFY_QUANTITY");

export const actionDeleteFromCart = createAction<{
  id: number;
}>("DELETE_FROM_CART");

export const actionResetCurrentCart = createAction("RESET_CURRENT_CART");
