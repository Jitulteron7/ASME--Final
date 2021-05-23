import React from "react";
import "./DevTeam.css";
import Title from "../../../ui_utils/Title/Title";
import Photo1 from "./Photos/Sohan.jpg";
import Photo2 from "./Photos/Jitul.jpg";
import Photo3 from "./Photos/DJ.jpg";
import Photo4 from "./Photos/Tejaswini.jpg";
import Photo5 from "./Photos/Kachali.jpg";
import Photo6 from "./Photos/Adarsh.jpg";
import Photo7 from "./Photos/Chandra.jpg";

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
                  <img src={Photo1} alt="" />
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
                  <img src={Photo2} alt="" />
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
                  <img src={Photo3} alt="" />
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
                  <img src={Photo4} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Tejaswini A V S V
                    <br />
                    <span>Front-End Developer</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Photo5} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Kachali Sarma
                    <br />
                    <span>Front-End Developer</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Photo6} alt="" />
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
                  <img src={Photo7} alt="" />
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
