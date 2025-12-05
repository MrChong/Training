import React from "react";
import PropTypes from "prop-types";

WeatherImage.propTypes = {
    className:PropTypes.string,
  imgSource: PropTypes.string.isRequired,
  alt:PropTypes.string
};

export default function WeatherImage({
  className = "",
  imgSource,
  alt = "image",
}) {
  return <img src={imgSource} className={className} alt={alt}/>;
}
