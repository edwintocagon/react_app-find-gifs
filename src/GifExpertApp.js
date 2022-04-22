import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = ["Computador"] }) => {
  // const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2 className="">Buscador de Gifs</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
