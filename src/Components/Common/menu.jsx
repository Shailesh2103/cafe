import React from "react";
import Menu from "../Assestes/HOT CLASSICS.jpg";
import MenuMmobile from "../Assestes/HOT CLASSICS 1.jpg";

function MenuImg() {
  return (
    <>
      <div className="menu-img">
        <img src={Menu} className="leptop" alt="menu" />
        <img src={MenuMmobile} className="mobile" alt="menu" />
      </div>
    </>
  );
}

export default MenuImg;
