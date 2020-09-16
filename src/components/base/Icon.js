import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const Icon = ({ faIcon, faSize = "1x" }) => {
  //rotation={90|180|270}, flip={horizontal|vertical|both}, spin, pulse, mask={[....]}, color
  return <FontAwesomeIcon icon={faIcon} size={faSize} />;
};

Icon.propTypes = {
  faIcon: PropTypes.string.isRequired,
  faSize: PropTypes.string,
};

Icon.defaultProps = {
  faSize: "1x",
};
