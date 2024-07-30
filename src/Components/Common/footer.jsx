import React from "react";
import "../Common/style.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <h1> Eden <span>Café</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem
            omnis, quasi exercitationem libero magni!
          </p>
        </div>
        <div className="navigation">
          <h3>navigation</h3>
          <ul>
            <li>
              {" "}
              <Link to="/">home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">menu</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">about us</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">contact us</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="information">
          <h3>information</h3>
          <p>+91 *** *** 1245</p>
          <p>prajapatishail875@gmail.com</p>
          <p>palanpur, newbus port, b.k (385001)</p>
        </div>
      
      </div>
    </>
  );
}

export default Footer;
