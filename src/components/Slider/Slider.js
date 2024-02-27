import React, {useEffect, useState} from "react";
import  "./Slider.css";
import movieApi from "../../service/movieApi";

const Slider = () => {
  const [ posterPaths, setPosterPaths ] = useState([]);

  useEffect(() => {
    movieApi.getRandomPosters()
      .then(posters => setPosterPaths(posters));
  }, []);

  return (
    <div className={"slider"}>
      <div className="scroll-holder">
      {divsData.map((divData) => (
          <div className="scroll-tray">
            {divData.map((path, index) => (
              <div>
                <img key={index} src={path}/>
              </div>
            ))}
          </div>
      ))}
      </div>
    </div>
  )
}

export default Slider;
