import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";

const store = configureStore({
  reducer: { productsReducer: productsReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
