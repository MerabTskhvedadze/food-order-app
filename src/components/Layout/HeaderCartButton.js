import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curNumber, items) => {
    return curNumber + items.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onActivate}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
