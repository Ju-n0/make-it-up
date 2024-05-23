import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";
import usersReducer from "./reducer/usersReducer";

const store = configureStore({
  reducer: { productsReducer, usersReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
