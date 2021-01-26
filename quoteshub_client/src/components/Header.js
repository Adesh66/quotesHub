import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="inner-header">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="/" className="navbar-brand">
                <span className="navbar-brand__break">Quotes</span>Hub
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right menu-list">
                <li className="menu-list__item menu-list__item--button">Add a Quote</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
