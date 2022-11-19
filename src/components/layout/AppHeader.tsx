import React from "react";
import Logo from "src/assets/brand/logo.png";
import { Link } from "react-router-dom";
import "./style/style.scss";

const AppHeader = () => {
  return (
    <div className="row">
      <div className="col-12">
        <header className="header-container">
          <div className="header-content-container">
            <img className="logo" src={Logo} loading="lazy" />
          </div>
          <div className="header-menu">
            <Link to="Home">
              <div>Home</div>
            </Link>
            <Link to="About">
              <div>About</div>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default React.memo(AppHeader);
