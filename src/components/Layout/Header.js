import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>UnicornMeals</h1>
        <HeaderCartButton onActivate={props.onVisibleCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="foods on the table" />
      </div>
    </>
  );
}

export default Header;
