import React, { useContext, useState } from "react";
import { productContext } from "../context/product.context";
const CategoryAdd = () => {
  const { category, AddItemtoCategory } = useContext(productContext);
  const [imageUrl, setImageUrl] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const handleSubmit = () => {
    AddItemtoCategory(imageUrl, name, price);
    setImageUrl("");
    setName("");
    setPrice("");
  };
  return (
    <div className="mt-6 ">
      <h1 className="text-3xl">{category ? category : "products to"} Add</h1>
      <div className="text-base p-2  bg-slate-100 m-3 border-r-8 rounded-md ">
        <span className="">
          <p>products Image Url</p>
          <input
            type="text"
            className="border border-solid border-gray-500"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </span>
        <span>
          <p>products Name</p>
          <input
            type="text"
            className="border border-solid border-gray-500"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </span>
        <span>
          <p> product Price</p>
          <input
            type="text"
            className="border border-solid border-gray-500"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </span>
        <p
          className="w-full bg-black text-white mt-3 text-center p-1"
          onClick={handleSubmit}
        >
          Add
        </p>
      </div>
    </div>
  );
};

export default CategoryAdd;
