import React from "react";
import "./../Sections.css";
import Title from "../../../ui_utils/Title/Title";
const About = () => {
  return (
    <>
      <div className="About">
        <header>
          <Title type={false} text={"ABOUT US"} />
          <div className="len"></div>
        </header>
        <div className="content">
          <p>
            ASME NIT Silchar Chapter is the youngest technical community of NIT
            Silchar. It aims to promote the art, science and practice of
            multidisciplinary engineering and allied sciences among the NIT
            fraternity.
          </p>
          <p>
            We thrive to develop the attitude of self-dependency among the
            students and the willing to upgrade by virtue of their own ideas.
          </p>
        </div>
        <img src={"/AboutPic/Slide2.jpg"} alt="" style={{ width: "80%" }} />
        <img
          src={"/AboutPic/Slide3.jpg"}
          alt=""
          style={{ width: "80%", marginTop: "5%" }}
        />
        <div className={"aboutus_pics"}></div>
      </div>
    </>
  );
};

export default About;
