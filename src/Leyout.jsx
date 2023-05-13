import React from "react";

const Leyout = ({ children }) => {
  return (
    <div>
      <div>Header</div>
      <div>{children}</div>
    </div>
  );
};

export default Leyout;
