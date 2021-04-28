import React, { useEffect, useState } from "react";
import userService from "../../services/user-service";
import authService from "./../../services/auth-service";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const [price, setPrice] = useState();

  
  useEffect(() => {
    loadCurrentUser();
    
  }, []);  //poner aqui cart?????
    
  useEffect(() => {
 
    totalPrice();

  }, []);    //poner aqui cart?????


  const loadCurrentUser = () => {
    authService.me().then((response) => {
      const id = response._id;
    
      userService.getUserById(id).then((user) => {
        setCart(user.currentCart);
      });
    });
  };

  const handleDeleteClick = (productId) => {
    userService.deleteFromCart(productId);
  };
  


  const totalPrice = () => {
    let precio = 0;
    cart.forEach((item) => {
       
      precio += item.productId.price*item.quantity
    });
    setPrice(precio)
  };
  
  
  return (
    <div className="cart-wrap">
      hi this is your cart 
      {cart.map((item) => (
        <div key={item.productId._id}>
          <div className="item-card">
            <img
              className="item-img"
              src={item.productId.picture}
              alt="product"
            />
            <div className="item-info">
              <h3>
                {item.productId.name} {item.quantity}
              </h3>
              <h3>{item.productId.price} €</h3>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDeleteClick(item.productId._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: {price}</h3>
        <button className = 'checkout-btn'>Check out</button>
      </div>
    </div>
  ); 
};

export default Cart;

// -- hay que hacer el precio total del carro
// -- que el carro se actualice automaticamente al añadir y al borrar, 
//    en el carro y la navbar