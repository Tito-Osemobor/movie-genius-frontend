import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Gallery from "../components/Gallery/Gallery";
import CheckBox from "../components/common/CheckBox/CheckBox";
import Header from "../components/common/Header";
import "../assets/styles/Login.css";

const Login = () => {
  return (
    <div className={"flex flex-col h-screen relative bg-black overflow-hidden"}>
      <Gallery />

      <nav className={"flex items-center justify-between p-5 z-50"}>
        <Link to={"/"}>
        <Header size="text-4xl " />
        </Link>
      </nav>

      <main className={"flex-1 flex items-center justify-center px-6"}>
        <div className={"z-10 bg-opacBlack-60"}>
          <div className={"space-y-3 px-20 opacity-100 pt-16 pb-36 z-50"}>
            <h2 className={"text-white z-70 text-4xl font-bold"}>Sign In</h2>
            <div className={"flex items-center justify-center"}>
              <form>
                <div className={"space-y-6"}>
                  <div className={"space-y-4"}>
                    <Input id={"emailInput"} placeholder={"Email address"} />
                    <Input id={"passwordInput"} placeholder={"Password"} />
                    <div className={""}>
                      <Button
                        text={"Sign In"}
                        width={"w-full"}
                        height={"h-12"}
                      />
                    </div>
                  </div>
                  <CheckBox />
                  <div>
                    <p className="text-gray-500">
                      New to MovieGenius?{" "}
                      <Link to={"/"} className={"text-white hover:underline"}>
                        Sign up now
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
