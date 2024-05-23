import { createAction } from "@reduxjs/toolkit";
import { Product } from "../../@types/Product";

export const actionCreateUser = createAction<{
  id: number;
  email: string;
  password: string;
  pseudo: string;
  cart: string[];
}>("CREATE_USER");

export const actionLogIn = createAction<{
  email: string;
  password: string;
}>("CONNECT_USER");

export const actionLogOut = createAction("user/LOGOUT");

export const actionAddToCart = createAction<{
  product: Product;
}>("ADD_TO_CART");
