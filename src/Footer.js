import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>Coded by Charlotte Williams</p>

      <a
        href="https://www.linkedin.com/in/charlotte-williams-b883069a/"
        target="blank">
        <button type="button" className="btn linkedin btn-light">
          <i className="fab fa-linkedin-in"></i>
        </button>
      </a>

      <a href="https://www.instagram.com/ccwilliams92/?hl=en" target="blank">
        <button type="button" className="btn instagram btn-light">
          <i className="fab fa-instagram"></i>
        </button>
      </a>
      <p>
        <a href=" " target="blank"> Open source code</a> by Charlotte Williams
      </p>
    </div>
  );
}
