import React from "react";
import "./../Sections.css";
import Title from "../../../ui_utils/Title/Title";
import "./our.css";
const Our = () => {
  return (
    <>
      <div className="Our">
        <header>
          <Title type={true} className="toto" text={"OUR SERVICES"} />
        </header>
        <div className="content">
          <div className="service">
            <img src="/OurLogo/color-palette.png" alt="" />
            <div className="content_box">
              <div className="line">
                <div className="dot"></div>
              </div>
              <div>
                <h3>ART</h3>
                <p>
                  ASME NIT Silchar chapter has been organizing designing
                  competitions for students to make them aware about the
                  different designing softwares available and to let them
                  showcase their machine designing skills.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <img src="/OurLogo/planet.png" alt="" />
            <div className="content_box">
              <div className="line">
                <div className="dot"></div>
              </div>
              <div>
                <h3>SCIENCE</h3>
                <p>
                  We organize various events and competitions on different
                  Science related topics under college technical fest, Tecnoesis
                  and the branch week fest, Mechatrix, that motivates students
                  to dive deep into the world of Science.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <img src="/OurLogo/Allied Sciences.png" alt="" />
            <div className="content_box">
              <div className="line">
                <div className="dot"></div>
              </div>
              <div>
                <h3>ALLIED SCIENCES</h3>
                <p>
                  We conduct webinars periodically with different intellectuals
                  and elites from the Mechanical Field to let students gain
                  higher knowledge on various topics and interact with the
                  speaker guests.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <img src="/OurLogo/multidisciplinary engg.png" alt="" />
            <div className="content_box">
              <div className="line">
                <div className="dot"></div>
              </div>
              <div>
                <h3 className="_long_jt">MULTIDISCIPLINARY ENGINEERING</h3>
                <h3 className="_short_jt">MULTIDISCIPLINARY ENGG</h3>
                <div className="multi">
                  <p>
                    ASME NITS chapter brings opportunities for the students to
                    know a lot more about different fields other than just
                    Mechanical Engineering through participation in various
                    E-fest events, that lets students discover fields like
                    mechatronics etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="service lock">
                         <img src={image}/>       
                         <div className="content_box">
                         <div className="line">
                             <div className="dot"></div>
                         </div>
                         <div>
                            <h3></h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <a href={"#"}>
                             see more ...
                         </a>
                         </div> 
                         </div>

                   </div>  */}
        </div>
      </div>
    </>
  );
};

export default Our;
