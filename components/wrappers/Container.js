import React from "react";

const Container = ({ children, className, fluid }) => {
  return (
    <div
      className={`${fluid ? `` : `container`} mx-auto px-4 ${
        className ? className : ``
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
