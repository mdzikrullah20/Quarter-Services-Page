import React from 'react'
import Home from '../Components/Home'
import AboutUs from '../Components/AboutUs'
import CoreServices from '../Components/CoreServices'
import Leatest from '../Components/Leatest'
import NavTop from '../Components/NavTop'
import Navbaar from '../Components/Navbaar'
export default function Services() {
  return (
    <div>
      <NavTop/>
      <Navbaar/>
        <Home/>
        <AboutUs/>
        <CoreServices/>
        <Leatest/>
    </div>
  )
}
