import React from "react";
import "../Common/style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide01 from "../Assestes/1.png";
import slide02 from "../Assestes/2.png";
import slide03 from "../Assestes/3.png";
import slide04 from "../Assestes/4.png";
function SliderMain() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider className="slider" {...settings}>
        <div className="child-slider">
          <div className="img">
            <img src={slide01} alt="img01" />
          </div>
          <div className="text">
            <h3>coffee name</h3>
          </div>
        </div>
        <div className="child-slider">
          <div className="img">
            <img src={slide02} alt="img01" />
          </div>
          <div className="text">
            <h3>coffee name</h3>
          </div>
        </div>
        <div className="child-slider">
          <div className="img">
            <img src={slide03} alt="img01" />
          </div>
          <div className="text">
            <h3>coffee name</h3>
          </div>
        </div>
        <div className="child-slider">
          <div className="img">
            <img src={slide04} alt="img01" />
          </div>
          <div className="text">
            <h3>coffee name</h3>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default SliderMain;
