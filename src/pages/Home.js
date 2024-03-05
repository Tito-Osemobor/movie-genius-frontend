import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Gallery from "../components/Gallery/Gallery";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <div className={"flex flex-col h-screen relative"}>
      <Gallery />
      
      <nav className={"flex items-center justify-between p-5 z-50"}>
        <h1 className={"text-red-600 font-extrabold italic text-4xl"}>
          MovieGenius
        </h1>
        <div>
          <Link
            to={"/login"}
            className={
              "bg-red-600 py-2 px-4 rounded-md text-white text-md font-bold italic"
            }
          >
            Sign In
          </Link>
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
            <form>
              <div className={"flex justify-center items-center space-x-2"}>
                <div>
                  <Input id={"emailInput"} placeholder={"Email address"} />
                </div>
                <Button
                  text={"Get Started"}
                  textSize={"text-2xl"}
                  iconSize={25}
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
