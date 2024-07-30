import React from "react";
import img01 from "../Assestes/1.png";
import img02 from "../Assestes/8.png";
import img03 from "../Assestes/3.png";
import img04 from "../Assestes/5.png";
import { Link } from "react-router-dom";
function Product() {
 

  return (
    <>
      <div className="product">
        <div className="center-text">
          <p>our products</p>
          <button className="btn-1">
            <Link to="/menuPage">view all</Link>
          </button>
        </div>
        <div className="items">
          <div className="child">
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
        </div>
      </div>
    </>
  );
}

export default Product;
