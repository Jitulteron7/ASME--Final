import React from "react";
import "./Guest.css";

function Guest() {
  return (

    <section id="bg">
      <div id="heading">Guest Speakers</div>
      <section className="carousel">
        <div id="carousel-slide" className="carousel slide" data-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <img
                className="carousel-image"
                src="/GuestImage/guest1.jpg"
                alt="profile"
              />
              <h3>Dr. Suman Basu</h3>
              <p className="carousal-text">
                Dr. Suman Basu, head of Energy Storage Systems at Mahindra
                Electric Mobility Limited, had pursued his B.Tech in the
                Jadavpur University, M.Tech in IIT Kanpur and received PhD from
                Penn State University.
              </p>
            </div>
            <div className="carousel-item  container-fluid">
              <img
                className="carousel-image"
                src="/GuestImage/guest2.jpg"
                alt="profile"
              />
              <h3>Prof. Anoop Krishnan</h3>
              <p className="carousal-text">
                Prof. N M Anoop Krishnan is currently assistant professor in
                Civil engineering and materials science and engineering at IIT
                Delhi. He is skilled in Materials Science, Molecular
                stimulations, Machine learning, Finite elements analysis ,
                Nuclear waste Management and Multiscale Modeling.
              </p>
            </div>
            <div className="carousel-item  container-fluid">
              <img
                className="carousel-image"
                src="/GuestImage/guest3.jpg"
                alt="profile"
              />
              <h3>Ms. Rupal Srivatsava</h3>
              <p className="carousal-text">
                Rupal Srivastava, Ph.D. candidate at the Department of
                Mechanical Engineering, Indian Institute of Technology Kanpur
                (IITK), India. She is currently a Member of the Smart Materials,
                Structures, and Systems Laboratory (SMSS).
              </p>
            </div>
            <div className="carousel-item  container-fluid">
              <img
                className="carousel-image"
                src="/GuestImage/guest4.jpg"
                alt="profile"
              />
              <h3>Dr. Aniruddh Vashisth</h3>
              <p className="carousal-text">
                Prof. Aniruddh Vashisth , Assistant Professor at University of
                Washington . He completed his PhD in Engineering Science and
                Mechanics from Penn-sylvania State University , 2018.
              </p>
            </div>
            <div className="carousel-item  container-fluid">
              <img
                className="carousel-image"
                src="/GuestImage/guest5.jpg"
                alt="profile"
              />
              <h3>Dr. Saikat Basu</h3>
              <p className="carousal-text">
                Dr. Saikat Basu , Assistant Professor at South Dakota State
                University . Dr. Basu leads the Fluids in Medical applications
                Lab Is housed at the department of Mechanical Engineering at
                South Dakota State University.
              </p>
            </div>
            <div className="carousel-item  container-fluid">
              <img
                className="carousel-image"
                src="/GuestImage/guest6.jpg"
                alt="profile"
              />
              <h3>Dr. R L Narayan</h3>
              <p className="carousal-text">
                Dr. Lakshmi Narayan Rama Subramaniam, Assistant Professor in
                Material Science and Engineering at IIT Delhi, had pursued his
                B.Tech in the same at VNIT , Nagpur and received his PhD from
                IISc Bangalore.
              </p>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel-slide"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden" />
          </a>
          <a
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel-slide"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden" />
          </a>
        </div>
      </section>
    </section>
  );
}

export default Guest;
