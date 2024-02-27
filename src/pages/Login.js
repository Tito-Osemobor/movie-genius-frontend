import React from "react";
import Footer from "../components/Footer";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import "../assets/styles/Login.css";

const Login = () => {
  return (
    <div className={"flex flex-col h-screen"}>

      <nav className={"flex items-center justify-between p-5"}>
        <h1 className={"text-red-600 font-extrabold italic text-4xl"}>
          MovieGenius
        </h1>
      </nav>

      <main className={"flex-1 flex items-center justify-center px-6"}>
        <div className={"space-y-3"}>
          <h2 className={"text-white text-4xl font-bold opacity-100"}>Sign In</h2>
          <div className={"flex items-center justify-center"}>
            <form>
              <div className={"space-y-6"}>
                <div className={"space-y-4"} >
                  <Input placeholder={"Email address"} />
                  <Input placeholder={"Password"} />
                  <div className={""}>
                    <Button text={"Sign In"} width={"w-full"} height={"h-12"}/>
                  </div>
                </div>
                <div className={"items-center"}>
                  <input id="rememberMe" type="checkbox" value=""
                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                                    rounded focus:ring-blue-500
                                    focus:ring-2"/>
                  <label htmlFor="rememberMe"
                         className="ms-2 text-lg font-medium text-white ">Remember me</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default Login;
