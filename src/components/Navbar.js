import React from "react";
import NavItem from "./NavItem";
// import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark fixed-top">
      <div className="container-fluid">
        <h5 className="text-light m-0">NewsLatest</h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {props.routesName.map((element, key) => {
              return <NavItem key={key} name={element} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
