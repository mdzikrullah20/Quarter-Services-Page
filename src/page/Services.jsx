import React from "react";
import Home from "../Components/Home";
import CoreServices from "../Components/CoreServices";
import Leatest from "../Components/Leatest";
import NavTop from "../Components/NavTop";
import Navbaar from "../Components/Navbaar";
import StatsCounter from "../Components/StatsCounter";
import RecentlyAdded from "../Components/RecentlyAdded";
import Footer from "../Components/Footer";
// import ImageGallery from '../Components/Gallery'
export default function Services() {
  return (
    <>
      <Home />
      <RecentlyAdded />
      <CoreServices />
      <StatsCounter />
      <Leatest />
    </>
  );
}
