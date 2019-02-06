import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = props => {
  var activeStyle = {
    color: "green",
    fontWeight: "bold"
  };

  var navStyle = {
    margin: "10px"
  };
  return (
    <div>
      <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>
        {props.label}
      </NavLink>
    </div>
  );
};

export default NavTab;
