// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">Welcome Our Tech World</div>
        <div className="masthead-heading text-uppercase">
          It's Nice To Meet You
        </div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#services">
          Tell Me More
        </a>
      </div>
    </header>
  );
};

export default Header;
