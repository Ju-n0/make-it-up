import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actionThunkProducts = createAsyncThunk("FETCH_PRODUCTS", async () => {
  const response = await axios.get(
    `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
  );

  return response.data;
});

export default actionThunkProducts;
