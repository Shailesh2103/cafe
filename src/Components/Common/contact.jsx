import React from "react";
import "../Common/style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="border">connect with us</h1>
      <div className="box">
        <div className="input">
          <input type="name" placeholder="enter name" />
          <input type="email" placeholder="enter email" />
        </div>
        <textarea name="" placeholder="message.." id=""></textarea>
        <button className="btn-1">send</button>
      </div>
    </div>
  );
};

export default Contact;
