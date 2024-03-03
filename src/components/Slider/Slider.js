import React, { useEffect, useState } from "react";
import movieApi from "../../service/movieApi";
import "./Slider.css";

const Slider = () => {
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
      {posterData.map((rowData) => (
        <div className="gallery-tray">
          {rowData.map((path, index) => (
            <div>
              <img key={index} src={path} />
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Slider;
