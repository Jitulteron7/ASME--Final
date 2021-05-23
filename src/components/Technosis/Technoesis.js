import React from "react";
import ShowTab from "./Tab/Tab";
import BannerEvent from "./Banner/Banner";
import Footer from "../Partials/Foot/Footer";
import Navbar from "../Partials/navbar/Navbar";
const Technoesis = () => {
  return (
    <>
      <Navbar />
      <BannerEvent />
      <ShowTab />
      <Footer />
    </>
  );
};

export default Technoesis;
