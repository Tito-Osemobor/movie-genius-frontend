import React from "react";

const Input = (props) => {
  return (
    <div className="relative">
      <input
        type="text"
        id={props.id}
        className="block px-3 pb-2.5
                    pt-4 w-96 h-16 text-sm text-white
                    bg-opacBlack-60 rounded-md border border-gray-700
                    appearance-none duration-300 peer
                    focus:ring-0 focus:outline-2 focus:outline-gray-100
                    focus:outline-offset-4 focus:bg-opacBlack-60"
        placeholder=""
        value={props.value}
        onChange={props.onchange}
      />
      <label
        htmlFor={props.id}
        className="absolute text-sm text-gray-300 font-semibold bg-none
                    duration-300 transform -translate-y-4 scale-75 top-5
                    origin-[0] px-3 select-none
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2
                    peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4
                    start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
