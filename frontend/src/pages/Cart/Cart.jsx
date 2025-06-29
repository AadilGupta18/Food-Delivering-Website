import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    backendUrl,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (getTotalCartAmount() === 0) {
      navigate("/");
      toast.info("Cart is empty!!!");
    }
  }, [cartItems, getTotalCartAmount]);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>
      {food_list.map((item, idx) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={idx}>
              <div className="cart-items-title cart-items-item">
                <img src={backendUrl + "/images/" + item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">
                  ❌
                </p>
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here !!</p>
            <div className="cart-promocode-input">
              <input type="text" alt="" placeholder="PROMO CODE" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
