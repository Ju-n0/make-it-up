import { createReducer } from "@reduxjs/toolkit";
import { Product } from "../../@types/Product";
import actionThunkProducts from "./thunkProducts";

interface ProductState {
  list: Product[];
  isLoading: boolean;
}
export const initialState: ProductState = {
  list: [],
  isLoading: false,
};

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionThunkProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(actionThunkProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(actionThunkProducts.rejected, (state) => {
      console.log("probleme");

      // if (action.error.name === '???') {
      //   state.errorMessage = action.error.message;
      // } else {
      //   state.errorMessage = 'Erreur inconnue';
      // }

      state.isLoading = false;
    });
});

export default productsReducer;
