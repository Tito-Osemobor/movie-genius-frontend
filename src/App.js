import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import { BackgroundImageProvider } from "./hooks/useContext/context";

const App = () => {
  return (
    <>
    <BackgroundImageProvider>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/browse" Component={Browse}/>
      </Routes>
    </BackgroundImageProvider>
    </>
  );
}

export default App;
