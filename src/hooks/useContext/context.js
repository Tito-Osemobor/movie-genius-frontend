import { createContext, useState, useEffect } from "react";
import movieApi from "../../service/movieApi";

export const BackgroundImageContext = createContext(undefined);

export const BackgroundImageProvider = ({ children}) => {
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
    <BackgroundImageContext.Provider value={posterData}>
      {children}
    </BackgroundImageContext.Provider>
  );
}
