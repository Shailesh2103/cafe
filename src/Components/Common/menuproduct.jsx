import React from "react";
import img01 from "../Assestes/1.png";
import img02 from "../Assestes/2.png";
import img03 from "../Assestes/3.png";
import img04 from "../Assestes/4.png";
import img05 from "../Assestes/5.png";
import img06 from "../Assestes/6.png";
import img07 from "../Assestes/7.png";
import img08 from "../Assestes/8.png";
function MenuProduct() {
 

  return (
    <>
      <div className="product">
       
        <div className="items">
          <div className="child" >
            <div className="img">
              <img src={img01} alt="img01" />
            </div>
            <div className="text">
              <h3>coffee name</h3>
            </div>
          </div>
          <div className="child">
            <div className="img">
              <img src={img02} alt="img01" />
            </div>
            <div className="text">
              <h3>coffee name</h3>
            </div>
          </div>
          <div className="child">
            <div className="img">
              <img src={img03} alt="img01" />
            </div>
            <div className="text">
              <h3>coffee name</h3>
            </div>
          </div>
          <div className="child">
            <div className="img">
              <img src={img04} alt="img01" />
            </div>
            <div className="text">
              <h3>coffee name</h3>
            </div>
          </div>
          <div className="child" >
            <div className="img">
              <img src={img05} alt="img01" />
            </div>
            <div className="text">
              <h3>coffee name</h3>
            </div>
          </div>
          <div className="child">
            <div className="img">
              <img src={img06} alt="img01" />
            </div>
            <div className="text">
              <h3>coffee name</h3>
            </div>
          </div>
          <div className="child">
            <div className="img">
              <img src={img07} alt="img01" />
            </div>
            <div className="text">
              <h3>coffee name</h3>
            </div>
          </div>
          <div className="child">
            <div className="img">
              <img src={img08} alt="img01" />
            </div>
            <div className="text">
              <h3>coffee name</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuProduct;
