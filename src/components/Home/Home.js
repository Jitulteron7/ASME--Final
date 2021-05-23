import React, { useEffect } from "react";
import About from "./Sections/About/About";
import Our from "./Sections/Our/Our";
import Gallery from "./Sections/Gallery/Gallery";
import Video from "./Sections/Video/Video";
import DevTeam from "./Sections/DevTeam/DevTeam";
import Guest from "./Sections/Guest/Guest";
import Footer from "../Partials/Foot/Footer";
import Navbar from "../Partials/navbar/Navbar";
import "./Sections/Sections.css";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  });
  return (
    <>
      <Navbar />

      <div className="home">
        <div className="home_banner_container">
          <div className="title_section">
            <h4>WELCOME TO</h4>
            <h3>ASME NIT SILCHAR CHAPTER</h3>
            <a className="mybtn" href="#about" type="button">
              Get Started
            </a>
          </div>
          <div className="social_container">
            <div className="socials">
              <ul>
                <li>
                  <a href="https://www.facebook.com/asme.nits/">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/asme_nits?igshid=1c8mhozmnm3em">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/asme-nits">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/NitsAsme?s=09">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <div className="overlay_social"></div>
            </div>
          </div>
          <div className="overlay_home"></div>
          <div className="tagscontainer">
            <div className="home_tags">
              <span className="tages">Setting the standards</span>
              <div className="border"></div>
              <span className="tages">Getting inspired</span>
              <div className="overlay_tags"></div>
            </div>
          </div>
        </div>
        <div id="about">
          <About />
        </div>
        <Our />
        <Gallery />
        <Video />
        <Guest />
        <DevTeam />
      </div>
      <Footer />
    </>
  );
};

export default Home;
