import React from "react";
import "./search-box.style.css";
export const SearchBox = ({ placeholder, handleOnChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onchange={handleOnChange}
  />
);
