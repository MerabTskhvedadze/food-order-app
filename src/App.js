import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const cartVisibleHandler = () => {
    setIsVisible(true);
  };

  const cartUnvisibleHandler = () => {
    setIsVisible(false);
  };

  return (
    <CartProvider>
      {isVisible && <Cart onClose={cartUnvisibleHandler} />}
      <Header onVisibleCart={cartVisibleHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
