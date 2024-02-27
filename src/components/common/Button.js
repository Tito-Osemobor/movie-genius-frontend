import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Button = (props) => {
  return (
    <div className={"items-center"}>
      <button
        className={`flex flex-row items-center justify-center bg-red-600
                    group active:bg-red-700 rounded-md
                    py-2 px-6 text-white font-bold
                    ${props.width} ${props.height}`}>
        <p className={`group-active:text-gray-300 ${props.textSize}`}>{props.text}</p>
        <div>
          <ArrowForwardIcon className={"group-active:text-gray-300"} sx={{
            fontSize: props.iconSize,
            fontWeight: 'bold',
            color: 'white',
            lineHeight: 28,
            marginLeft: 1,
          }}/>
        </div>
      </button>
    </div>
  )
}

Button.defaultProps = {
  textSize: "text-xl",
  iconSize: 20,
  height: "h-16"
};

export default Button;
