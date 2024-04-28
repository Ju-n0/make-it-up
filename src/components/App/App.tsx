import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import "./app.scss";
import Header from "../Header/Header";
import Error from "../Error/Error";
import Container from "../Container/Container";
import ProductPage from "../ProductPage/ProductPage";
import actionThunkProducts from "../../store/reducer/thunkProducts";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsReducer.list);

  useEffect(() => {
    if (!products.length) {
      dispatch(actionThunkProducts());
    }
  }, []);
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Container products={products} />} />

        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
