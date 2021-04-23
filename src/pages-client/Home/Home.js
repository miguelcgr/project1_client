import React, { useState, useEffect } from "react";
import userService from "../../services/user-service";
import productService from "./../../services/product-service";
import authService from "./../../services/auth-service";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadAllProducts();
  }, []);

  useEffect(() => {
    loadCurrentUser();
  }, []);

  const loadAllProducts = () => {
    productService
      .getAllProducts()
      .then((response) => {
        if (response) setProducts(response);
      })
      .catch((err) => console.log(err));
  };

  const handleAddClick = async (productId) => {
    await userService.addToCart(productId);
    //loadCurrentUser();
  };

  const handleDeleteClick = (productId) => {
    userService.deleteFromCart(productId);
  };

  const loadCurrentUser = () => {
    authService.me()
    .then((response) => {
      const id = response._id;
      console.log("id", id);
      userService.getUserById(id).then((user) => {
        setCart(user.currentCart);
      });
    })
    .catch((err)=> console.log('home.js > loadcurrentuser',err))
  };
  console.log("cart", cart);
  console.log('cart.length', cart.length)
  return (
    <body>
      <div className="wrapper">
        {products.map((product) => (
          <div className="product-card">
            <h2>{product.name}</h2>
            <button onClick={() => handleAddClick(product._id)}>
              <img
                className="product-img"
                src={product.picture}
                alt="product pic"
              />
            </button>
            <h3>{product.price} €</h3>
            <h4>{product.description}</h4>
          </div>
        ))}
      </div>
      <div>
        your cart
        {cart.map((item) => (
          <div key={item.productId._id}>
            <div className="product-card">
              <h2>
                {item.productId.name} - {item.quantity}
              </h2>
              <img
                className="product-card"
                src={item.productId.picture}
                alt="product"
              />
              <h3>{item.productId.price} €</h3>
              <button
                className="delete-btn"
                onClick={() => handleDeleteClick(item.productId._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </body>
  );
};

export default Home;



