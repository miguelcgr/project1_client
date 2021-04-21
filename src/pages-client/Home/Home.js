import React, { useState, useEffect } from "react";
import productService from "./../../services/product-service";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadAllProducts();
  });

  const loadAllProducts = () => {
    productService
      .getAllProducts()
      .then((response) => {
        if (response) setProducts(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
      {products.map((product) => (
        <div className="product-card">
          <p>{product.name}</p>
          <img
            className="product-img"
            src={product.picture}
            alt="product pic"
          />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
