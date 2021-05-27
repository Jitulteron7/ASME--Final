import React from "react";
import "./video.css";
import VideoPlayer from "react-video-js-player";
// import  Vid from "./asme_INTRO_video.mp4"
const  Vid ="https://asmevideo.s3.us-east-2.amazonaws.com/asme_INTRO_video.mp4";

const Video = () => {
  return (
    <>
      <section id="nits" style={{overflow:"hidden"}}>
        <div>
          <div>
            <h2 className="section-tittle">ASME-NITS VIDEOS</h2>
          </div>
          <div>
            <h1 className="section-tittle-2">ASME-NITS VIDEOS</h1>
          </div>
        </div>
        <div className="nits container">
          <div className="vl" />
          <div className="v2" />
          <div className="col-left">
            <div className="nits-video">
              <VideoPlayer
                className="video"
                src={Vid}
                width="470"
                height="420"
              />
            </div>
            <div className="video-button">
              <a href="#" className="previous round">
                {" "}
              </a>
              {/* <h5>Previous</h5> <h5>Next</h5> */}
              <a href="#" className="next round">
                {" "}
              </a>
            </div>
          </div>
          <div className="col-right">
            <p>ASME NIT SILCHAR INTRODUCTORY  VIDEO</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
