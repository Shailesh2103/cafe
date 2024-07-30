import React from "react";
import "../Common/style.css";
import MenuProduct from "../Common/menuproduct";
import Footer from "../Common/footer";
import SubHeader from "../Common/subheader";
function MenuPage() {
  return (
    <>
      <SubHeader name="our menu" />
      <MenuProduct />
      <Footer />
    </>
  );
}

export default MenuPage;
