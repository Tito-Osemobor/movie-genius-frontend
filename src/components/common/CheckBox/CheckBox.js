import React from "react";
import "./CheckBox.css";

const CheckBox = () => {
  return (
    <div className="checkboxes__item">
      <label className="checkbox style-e">
        <input type="checkbox" />
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body text-white">Remember me</div>
      </label>
    </div>
  );
};

export default CheckBox;
