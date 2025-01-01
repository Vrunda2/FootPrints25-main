import React from "react";
import "./Loader.css";
export default function Loader(props) {
  const getSize = (size) => {
    switch (size) {
      case "sm":
        return "loader-sm";
      case "md":
        return "loader-md";
      case "lg":
        return "loader-lg";
    }
  };

  return (
    <div className={`loader`}>
      <div
        className={`spinner-border text-warning  ${getSize(props.size)}`}
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
