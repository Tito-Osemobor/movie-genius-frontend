import {createContext, useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import movieApi from "../../service/movieApi";
import auth from "../../service/auth";

export const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem("movieGenius") || "");
  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const response = await auth.login(data);
      const res = await response.json();

      if (res.token) {
        setToken(res.token);
        localStorage.setItem("movieGenius", res.token);
        navigate("/browse");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

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

export const useBackgroundImage = () => {
  return useContext(BackgroundImageContext);
};
