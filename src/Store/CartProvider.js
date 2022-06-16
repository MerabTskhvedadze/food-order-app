import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount +
      action.item.amount * action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandlet = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandlet = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCartHandlet,
    removeItems: removeItemFromCartHandlet,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
