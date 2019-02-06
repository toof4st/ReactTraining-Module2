import React from "react";
import NavTab from "./NavTab.jsx";

const NavBar = () => {
  var navStyle = {
    backgroundColor: "red"
  };

  return (
    <div style={navStyle}>
      <NavTab to="/grouping" label="Grouping" />
      <NavTab to="/whatif" label="What If" />
      <NavTab to="/other" label="Other" />
    </div>
  );
};

export default NavBar;
