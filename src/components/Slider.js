import React from "react";
import "./Slider.css";

function Slider({ min, handleChange, max, value }) {
  return (
    <div className="slider--container">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
