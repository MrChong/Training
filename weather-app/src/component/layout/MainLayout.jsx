import React from 'react'
import DashboardLayout from './DashboardLayout'
import CurrentWeatherPanel from '../weather/CurrentWeatherPanel'

export default function MainLayout(){
  return (
    <div className='main-box rounded-3xl overflow-hidden'>
        <CurrentWeatherPanel/>
        <DashboardLayout/>
    </div>
  )
}
