import React from "react";

const Header = ({size}) => {
  return (
    <h1 className={`text-red-600 font-extrabold italic ${size}`}>
      MovieGenius
    </h1>
  )
}

export default Header;