import React from 'react'
import Home from '../Components/Home'
import AboutUs from '../Components/AboutUs'
import CoreServices from '../Components/CoreServices'
import Leatest from '../Components/Leatest'
import NavTop from '../Components/NavTop'
import Navbaar from '../Components/Navbaar'
import StatsCounter from '../Components/StatsCounter'
import RecentlyAdded from '../Components/RecentlyAdded'
import Footer from '../Components/Footer'
export default function Services() {
  return (
    <div>
      <NavTop/>
      <Navbaar/>
        <Home/>
        <AboutUs/>
        <RecentlyAdded/>
        <CoreServices/>
        <StatsCounter/>
        <Leatest/>
        <Footer/>
    </div>
  )
}
