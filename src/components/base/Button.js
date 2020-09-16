import { ButtonBase, ButtonRole, ButtonSize } from "config/theme";
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Button = ({ size = "md", role = "secondary", children }) => {
  const classNames = `${ButtonBase} ${ButtonRole[role]} ${ButtonSize[size]}`;
  return (
    <>
      <button className={classNames}>{children}</button>
    </>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm, md, lg"]),
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "ghost",
    "success",
    "warning",
    "error",
  ]),
};
