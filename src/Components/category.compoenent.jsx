import React, { useContext, useEffect } from "react";
// import SHOP_DATA from "../shop-data";
import { productContext } from "../context/product.context";
import { Data } from "../firebase/firebase";
const Category = () => {
  const { categoryItems, setCategory, setCategoryItems } =
    useContext(productContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Data();
        console.log(data);
        setCategoryItems(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  console.log(categoryItems);
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
