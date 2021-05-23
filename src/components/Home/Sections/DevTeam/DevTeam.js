import React from "react";
import "./DevTeam.css";
import Title from "../../../ui_utils/Title/Title";
import Photo1 from "./Photos/Sohan.jpg";
import Photo2 from "./Photos/Jitul.jpg";
import Photo3 from "./Photos/DJ.jpg";
import Photo4 from "./Photos/Adarsh.jpg";
import Photo5 from "./Photos/Chandra.jpg";

const DevTeam = () => {
  return (
    <>
      <Title className="dev_title" type={false} text={"DEVELOPER TEAM"} />
      <div className="main_container_devteam">
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Photo1} />
                </div>
                <div className="contentBx">
                  <h3>
                    SOHAN PAUL
                    <br />
                    <span>UI/UX Developer</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Photo2} />
                </div>
                <div className="contentBx">
                  <h3>
                    JITUL TERON
                    <br />
                    <span>Full-Stack Developer</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Photo3} />
                </div>
                <div className="contentBx">
                  <h3>
                    DEEPJYOTI HAZARIKA
                    <br />
                    <span>Front-End Developer</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Photo4} />
                </div>
                <div className="contentBx">
                  <h3>
                    ADARSH MISHRA
                    <br />
                    <span>Content Writer</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Photo5} />
                </div>
                <div className="contentBx">
                  <h3>
                    CHANDRAA GOGOI
                    <br />
                    <span>Content Writer</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevTeam;
