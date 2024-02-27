import React from "react";

const Input = (props) => {
  return (
    <div className="relative z-10">
      <input type="text" id="emailInput"
             className="block px-3 pb-2.5
                        pt-4 w-96 h-16 text-md text-white
                        bg-opacity-30 bg-gray-700 rounded-md
                        appearance-none duration-300
                        focus:outline-none
                        focus:ring-0 focus:border-2 focus:border-gray-100 peer"
             placeholder=" "/>
      <label htmlFor="emailInput"
             className="absolute text-md text-gray-300 font-semibold bg-none
                        duration-300 transform -translate-y-4 scale-75 top-5
                        z-10 origin-[0] px-3
                        peer-placeholder-shown:scale-100
                        peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2
                        peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4
                        start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input;
