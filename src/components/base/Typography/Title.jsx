import React from "react";
import PropTypes from "prop-types";

//title bold, subtitle normal
export const Title = ({ level = "h6", children, className }) => {
  const Tag = `h${level}`;
  const Element = /h[1-6]/i.test(Tag) ? Tag : "h6";
  return (
    <>
      <Element className={className}>{children}</Element>
    </>
  );
};
