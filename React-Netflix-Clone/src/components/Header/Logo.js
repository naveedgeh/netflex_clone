import React from "react";
import "./HeaderStyles.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <h1 style={{ color: "red" }}>Movies & show</h1>
      </a>
    </div>
  );
}

export default Logo;
