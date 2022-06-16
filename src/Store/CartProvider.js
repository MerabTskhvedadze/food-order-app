import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandlet = (items) => {};
  const removeItemFromCartHandlet = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
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
