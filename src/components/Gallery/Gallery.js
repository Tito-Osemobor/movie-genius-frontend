import React, { useEffect, useState } from "react";
import movieApi from "../../service/movieApi";
import "./Gallery.css";

const Gallery = () => {
  const [posterData, setPosterData] = useState([]);

  useEffect(() => {
    movieApi.getRandomPosters().then((posterPaths) => {
      setPosterData([
        posterPaths.slice(0, 7),
        posterPaths.slice(7, 14),
        posterPaths.slice(14, 21),
        posterPaths.slice(21, 28),
      ]);
    });
  }, []);

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
