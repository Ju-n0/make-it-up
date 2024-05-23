import { Cart } from "./Cart";

export type IUser = {
  id: number;
  email: string;
  password: string;
  pseudo: string;
  cart: Cart;
};
