import React from "react";
import SearchPlace from "./SearchPlace";
import WeatherImage from "../common/WeatherImage";
import CurWeatherInfo from "./CurWeatherInfo";

import cloudImage from "../../assets/image/cloud.svg"


export default function CurrentWeatherPanel() {
  return (
    <section id="current-weather" className="inside-boxes bg-gray-100 h-full">
      <SearchPlace/>
      <WeatherImage imgSource={cloudImage} className="w-24   h-24"/>
      <CurWeatherInfo/>
    </section>
  );
}
