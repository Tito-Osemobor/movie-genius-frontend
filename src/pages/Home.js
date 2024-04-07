import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/common/Header";
import auth from "../service/auth";
import "../assets/styles/Home.css";

const Home = () => {
  const [ email, setEmail ] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exists = await auth.userExists(email);
    if (exists) {
      navigate("/login");
    } else {
      navigate("/signup")
    }
  }

  return (
    <div className={"flex flex-col h-screen relative bg-black overflow-hidden"}>
      <Gallery />

      <nav className={"flex items-center justify-between p-5 z-50"}>
        <Header size="text-4xl " />
        <div>
          <Button text={"Sign In"} textSize={"text-md"} to="/login"
                  className={""}/>
        </div>
      </nav>

      <main className={"flex-1 flex items-center justify-center text-center"}>
        <div className={"space-y-4 z-50"}>
          <div className={"space-y-5"}>
            <h1 className={"text-white font-black text-5xl italic"}>
              Find all the latest movie trailers
            </h1>
            <p className={"text-white text-2xl"}>From your favorite genres.</p>
          </div>
          <div className={"space-y-4"}>
            <div>
              <p className={"text-white text-2xl"}>
                Ready to watch? Enter your email here to create your account.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={"flex justify-center items-center space-x-2"}>
                <div>
                  <Input id={"emailInput"}
                         placeholder={"Email address"}
                         onchange={handleInput}
                  />
                </div>
                <Button
                  text={"Get Started"}
                  textSize={"text-2xl"}
                  iconSize={25}
                  className={"h-16"}
                />
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
