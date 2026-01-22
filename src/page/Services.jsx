import React from "react";
import Home from "../Components/Home";
import CoreServices from "../Components/CoreServices";
import Leatest from "../Components/Leatest";
import StatsCounter from "../Components/StatsCounter";
import RecentlyAdded from "../Components/RecentlyAdded";
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
