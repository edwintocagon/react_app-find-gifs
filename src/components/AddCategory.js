import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState(""); // ''

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      categories.forEach(function (el, i) {
        if (el === inputValue) categories.splice(i, 1);
      });

      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*   <p> { inputValue } </p> */}
      <input
        type="text"
        value={inputValue}
        placeholder="Ingresa una palabra..."
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
