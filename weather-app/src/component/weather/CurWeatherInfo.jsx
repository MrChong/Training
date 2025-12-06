import React from 'react'
import WeatherImage from '../common/WeatherImage'
import cloudImage from "../../assets/image/cloud.svg"

export default function CurWeatherInfo(){
  return (
    <div className='w-full flex items-center flex-col'>
      <h1>12 Deg</h1>
      <div className='flex flex-row'>
        <h2>monday,</h2>
        <p>16:00</p>
      </div>
      <hr className='h-px bg-neutral-400 border-0 w-3/4'/>
      <div className='flex justify-center items-center gap-2'>
        <WeatherImage imgSource={cloudImage} className="w-4 h-4"/>
        <h3>Mostly Cloudy</h3>
      </div>
        <div className='flex justify-center items-center gap-2'>
        <WeatherImage imgSource={cloudImage} className="w-4 h-4"/>
        <h3>Rain - 30%</h3>
      </div>
    </div>
  )
}