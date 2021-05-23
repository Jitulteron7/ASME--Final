import React from "react";
import ImageGallery from "react-image-gallery";
import img1 from "./GalleryImg/g1.jpeg";
import img3 from "./GalleryImg/g3.jpeg";
import img4 from "./GalleryImg/g4.jpeg";
import img5 from "./GalleryImg/g5.jpeg";

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img4,
    thumbnail: img4,
  },
  {
    original: img5,
    thumbnail: img5,
  },
];

const Gallery = () => {
  

  return (
    <div className="gallery_asme">
      <ImageGallery autoPlay={false} items={images}></ImageGallery>;
      <div className="extras">
        <h3>ASME E-FEST Asia Pacific - 2020</h3>
        <p>Marwadi University, Rajkot, India.</p>
      </div>
    </div>
  );
};

export default Gallery;
