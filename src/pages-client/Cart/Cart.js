import React, { useEffect, useState } from "react";
import userService from "../../services/user-service";
import productService from "./../../services/product-service";
import authService from "./../../services/auth-service";
import "./../Home/Home.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCurrentUser();
  }, []);

  const loadCurrentUser = () => {
    authService.me().then((response) => {
      const id = response._id;
      console.log("id", id);
      userService.getUserById(id).then((user) => {
        setCart(user.currentCart);
      });
    });
  };

  const handleDeleteClick = (productId) => {
    userService.deleteFromCart(productId);
  };

  return (
    <div>
      hi this is your cart bro it is a nice cart bro
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
  );
};

export default Cart;
