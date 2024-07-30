import React from "react";
import "../Common/style.css";
import AboutImg from "../Assestes/chef.jpg";
function OurChef() {
  return (
    <>
      <div className="about">
        <div className="child">
          <span className="border">OUR CHEF</span>
          <h1>Manoj Upadhaye,</h1>
          <p>
            At Openhouse Cafe, our head chef, Manoj Upadhaye, with years of
            experience in the industry, curates our menu with carefully selected
            dishes offering a unique blend of flavors and textures. Sourcing
            fresh ingredients from local markets, his passion for cooking
            reflects in every dish, ensuring each customer's memorable dining
            experience.
          </p>
        </div>
        <div className="child">
          <img src={AboutImg} alt="AboutImg" />
        </div>
      </div>
    </>
  );
}

export default OurChef;
