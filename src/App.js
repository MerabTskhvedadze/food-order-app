import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const cartVisibleHandler = () => {
    setIsVisible(true);
  };

  const cartUnvisibleHandler = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && <Cart onClose={cartUnvisibleHandler} />}
      <Header onVisibleCart={cartVisibleHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
