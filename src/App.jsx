import {
  Header,
  ContactInfo,
  Filter,
  SearchBar,
  FetchTe,
  Footer,
} from "@jennystarkfrk/components";
import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://storeapi20240917165254.azurewebsites.net/api/category"
        );
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://storeapi20240917165254.azurewebsites.net/api/product"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar teaData={products} />
              <Filter teaData={categories} />
              <FetchTe sortimentData={products} />
            </>
          }
        />
        <Route
          path="/products"
          element={<FetchTe sortimentData={products} />}
        />
        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
