import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#5b5b5b" }}
      onClick={props.onClick}
    />
  );
};
export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#5b5b5b" }}
      onClick={props.onClick}
    />
  );
};