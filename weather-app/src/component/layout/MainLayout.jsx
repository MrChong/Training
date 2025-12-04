import React from 'react'
import DashboardLayout from './DashboardLayout'
import CurrentWeatherPanel from '../weather/CurrentWeatherPanel'

export default function MainLayout(){
  return (
    <div className='main-box w-3/4 h-3/4 rounded-lg overflow-hidden'>
        <CurrentWeatherPanel/>
        <DashboardLayout/>
    </div>
  )
}
