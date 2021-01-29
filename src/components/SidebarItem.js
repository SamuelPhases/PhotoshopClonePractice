import React from "react";
import "./SidebarItem.css";

function SidebarItem({ option, active, handleClick }) {
  return (
    <button
      className={`sidebar--item ${active && "active"}`}
      onClick={handleClick}
    >
      {option}
    </button>
  );
}

export default SidebarItem;
