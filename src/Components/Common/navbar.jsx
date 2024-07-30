import React, { useState } from "react";
import "../Common/style.css";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from '../Assestes/logo.png'

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="logo-nav">
            {/* <img src={logo} alt="logo nav" /> */}
            <Link to="/">
            Eden <span>Café</span>
            </Link>
          </div>
          <div className="responcive-icon" onClick={() => setShow(!show)}>
            <BiMenu />
          </div>
        </div>
        <section className={show ? "open" : ""}>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/menuPage">menu</NavLink>
            </li>
            <li>
              <NavLink to="/AboutPage">about us</NavLink>
            </li>
            <li>
              <NavLink to="/ContactPage">contact us</NavLink>
            </li>
          </ul>
        </section>
       
      </div>
    </>
  );
}
export default Navbar;
