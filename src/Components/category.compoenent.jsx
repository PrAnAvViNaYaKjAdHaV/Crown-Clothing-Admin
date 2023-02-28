import React, { useContext } from "react";
// import SHOP_DATA from "../shop-data";
import uniqid from "uniqid";
import { productContext } from "../context/product.context";
const Category = () => {
  const { categoryItems, setCategory } = useContext(productContext);
  return (
    <div className="w-60">
      <h1 className="text-3xl">Category</h1>
      {categoryItems.map((data) => (
        <p
          key={data.title}
          onClick={() => {
            setCategory(data.title);
          }}
          className="text-xl p-2  bg-slate-100 m-3 border-r-8 rounded-md"
        >
          {data.title}
        </p>
      ))}
    </div>
  );
};

export default Category;