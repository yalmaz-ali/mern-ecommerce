import React from "react";
// import { IoIosCart } from "react-icons/io";
import cartIcon from "../../images/logo/cart.png"

/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  return (
    <div style={{ fontSize: "2px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          background: "#A35DE1",
          width: "5px",
          height: "5px",
          borderRadius: "10px",
          fontSize: "10px",
          textAlign: "center",
          alignSelf: "center",
          top: "2px",
          right: "25px",
        }}
        >
        {/* {props.count} */}
      </span>
      <div>
          <a href="/cart">
            <img src={cartIcon} alt="cart" style={{
              width:"30px",
            }}/>
          </a>
      </div>
    </div>
  );
};

export default Cart;
