import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (items) => {},
  remoceItems: (id) => {},
});

export default CartContext;
