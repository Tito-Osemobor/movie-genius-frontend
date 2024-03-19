import React, { useContext } from "react";
import "./Gallery.css";
import { BackgroundImageContext } from "../../hooks/useContext/context";

const Gallery = () => {
  const posterData = useContext(BackgroundImageContext)
  
  return (
    <div className="absolute -top-36">
      <div className="gallery rotate-12 select-none">
        {posterData.map((rowData, index) => (
          <div className="gallery-tray" key={index}>
            {rowData.map((path, index) => (
              <div key={index}>
                <img src={path} alt="poster gallery" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
