import React from "react";
import Main from "../Common/main";
import Product from "../Common/products";
import About from "../Common/about";
import Parallex from "../Common/parallex";
import MenuImg from "../Common/menu";
import Footer from "../Common/footer";
import OurChef from "../Common/ourchef";
import Sequire from "../Common/sequire";
import Contact from "../Common/contact";

function HeroPage() {
  return (
    <>
      <Main />
      <Product />
      <Parallex />
      <About />
      <MenuImg />
      <OurChef />
      <Sequire />
      <Contact />
      <Footer />
    </>
  );
}

export default HeroPage;
