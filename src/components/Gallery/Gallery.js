import React from "react";
import Gallery from "react-grid-gallery";
import NavBar from "../Partials/navbar/Navbar";
import Footer from "../Partials/Foot/Footer";
import "./gallery.css";
import img1 from "../Events/Tab/img/3d1.jpg";
import img2 from "../Events/Tab/img/3d2.jpg";
import img3 from "../Events/Tab/img/3d3.jpg";
import img4 from "../Events/Tab/img/p1.jpg";
import img5 from "../Events/Tab/img/p2.jpg";
import img6 from "../Events/Tab/img/p3.jpg";
import img7 from "../Events/Tab/img/a1.jpg";
import img8 from "../Home/Sections/Gallery/GalleryImg/g1.jpg";
import img9 from "../Home/Sections/Gallery/GalleryImg/g3.jpg";
import img10 from "../Home/Sections/Gallery/GalleryImg/g4.jpg";

import img11 from "../Home/Sections/Gallery/GalleryImg/g5.jpg";

const img13 = "/HVPC/8.jpg";
const img14 = "/HVPC/12.jpg";
const img16 = "/SDC/SDC1.jpg";
const img17 = "/SDC/SDC2.jpg";
const img18 = "/SDC/SDC3.jpg";
const img19 = "/HVPC/4.jpg";
const img20 = "/HVPC/10.jpg";
const img21 = "/Aeromania/p1.jpg";
const img22 = "/Aeromania/p2.jpg";
const img23 = "/HVPC/middle.jpg";
const img24 = "/galleryNew/1.jpg";
const img25 = "/galleryNew/2.jpg";
const GalleryGrid = () => {
  const IMAGES = [
    {
      src: img22,
      thumbnail: img22,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: false,
    },
    {
      src: img21,
      thumbnail: img21,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: false,
    },
    {
      src: img1,
      thumbnail: img1,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: false,
    },
    {
      src: img2,
      thumbnail: img2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: img3,
      thumbnail: img3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: img4,
      thumbnail: img4,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: false,
    },
    {
      src: img5,
      thumbnail: img5,
      thumbnailWidth: 320,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img6,
      thumbnail: img6,
      thumbnailWidth: 320,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img7,
      thumbnail: img7,
      thumbnailWidth: 320,
      thumbnailHeight: 154,
      isSelected: false,
    },
    {
      src: img8,
      thumbnail: img8,
      thumbnailWidth: 380,
      thumbnailHeight: 304,
      isSelected: false,
    },
    {
      src: img9,
      thumbnail: img9,
      thumbnailWidth: 320,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img10,
      thumbnail: img10,
      thumbnailWidth: 420,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img11,
      thumbnail: img11,
      thumbnailWidth: 620,
      thumbnailHeight: 274,
      isSelected: false,
    },

    {
      src: img13,
      thumbnail: img13,
      thumbnailWidth: 320,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img14,
      thumbnail: img14,
      thumbnailWidth: 720,
      thumbnailHeight: 374,
      isSelected: false,
    },

    {
      src: img16,
      thumbnail: img16,
      thumbnailWidth: 420,
      thumbnailHeight: 324,
      isSelected: false,
    },
    {
      src: img17,
      thumbnail: img17,
      thumbnailWidth: 320,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img18,
      thumbnail: img18,
      thumbnailWidth: 420,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img19,
      thumbnail: img19,
      thumbnailWidth: 320,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img20,
      thumbnail: img20,
      thumbnailWidth: 520,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img23,
      thumbnail: img23,
      thumbnailWidth: 520,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img24,
      thumbnail: img24,
      thumbnailWidth: 220,
      thumbnailHeight: 274,
      isSelected: false,
    },
    {
      src: img25,
      thumbnail: img25,
      thumbnailWidth: 565,
      thumbnailHeight: 274,
      isSelected: false,
    },
  ];

  return (
    <>
      <div className="asme_gallery">
        <NavBar />
        <div className="gallery_banner">
          <div className="gallery_title">
            <h3>ASME Gallery</h3>
          </div>
          <div className="overlay_gallery"></div>
        </div>
        <div style={{ width: "80%", margin: "5% auto" }}>
          <Gallery images={IMAGES} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GalleryGrid;
