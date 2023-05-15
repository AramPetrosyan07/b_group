import React from "react";
import Header from "./Header/Header";

const Leyout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Leyout;
