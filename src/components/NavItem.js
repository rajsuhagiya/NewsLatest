import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <div>
      <li className="nav-item">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
          }
          style={{ textTransform: "capitalize" }}
          to={"/" + props.name}
        >
          {props.name}
        </NavLink>
      </li>
    </div>
  );
};

export default NavItem;
