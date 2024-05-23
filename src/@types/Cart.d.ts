import { Product } from "./Product";

export type Cart = (Product & { quantity: number })[];
