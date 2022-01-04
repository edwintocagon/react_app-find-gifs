import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      /* recibe automaticamnet el callback ,cats */
      /* setCategories((cats) => [inputValue, ...cats]); */
      setCategories([inputValue, ...categories]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingrese Heroe"
      />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
