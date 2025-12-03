import React from 'react'
import DashboardLayout from './DashboardLayout'
import CurrentWeatherPanel from '../weather/CurrentWeatherPanel'

export default function MainLayout(){
  return (
    <div>
        <CurrentWeatherPanel/>
        <DashboardLayout/>
    </div>
  )
}
