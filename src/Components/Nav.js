import React from "react";

import "../styles/_nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-menu">
        D
      </div>
      <div className="logo">
        <div className="logo-top">Discover</div>
        <div className="logo-bottom">ICELAND!</div>
      </div>
      <div className="icons-container">
        <div className="social-icons">
          <a
            href="https://twitter.com/IcelandNatural"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/iceland/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/icelandnaturally/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="plane">
          <a
            href="https://www.expedia.com/"
            target="_blank"
            rel="noreferrer"
            className="icon plane-icon"
          >
            <i className="fas fa-plane-departure"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
