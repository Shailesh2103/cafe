import React from "react";
import "../Common/style.css";
import AboutImg from "../Assestes/aboutuspages.jpg";
const Aout02 = () => {
  return (
    <div className="about">
        <div className="child">
          <img src={AboutImg} alt="AboutImg" />
        </div>
      <div className="child">
        <h1>Quality and Tradition</h1>
        <p>
          Openhouse Café, located in the inner circle of CP, offers a lounge
          experience with dim lights, mahogany furniture, and leather seating.
          Enjoy live performances and a diverse food menu, including DJ,
          acoustic, Sufi, EDM, and Bollywood nights. Perfect for sports lovers,
          the big screen offers a world of celebration while the terrace boasts
          a breathtaking view of CP's Central Park.
        </p>
      </div>
    </div>
  );
};

export default Aout02;
