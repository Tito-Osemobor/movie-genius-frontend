import React from "react";
import { Route, Routes } from "react-router-dom";
import {AuthProvider, BackgroundImageProvider} from "./hooks/useContext/context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./router/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <BackgroundImageProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={SignUp}/>
          <Route element={<PrivateRoute />}>
            <Route path="/browse" Component={Browse}/>
          </Route>
        </Routes>
      </BackgroundImageProvider>
    </AuthProvider>
  );
}

export default App;
