import React, { useContext } from "react";
import SHOP_DATA from "../shop-data";
import { BiRupee } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import { productContext } from "../context/product.context";
const CategoryItem = () => {
  const { category, categoryItems, RemoveItemFromCategory } =
    useContext(productContext);
  return (
    <div className="flex-1">
      <h1 className="text-3xl">{category} products</h1>
      {category &&
        categoryItems
          .find((data) => data.title === category)
          .items.map((data) => {
            return (
              <div
                key={data.id}
                className="flex justify-between items-center p-5 text-xl bg-slate-100 m-3 border-r-8 rounded-md"
              >
                <img src={data.imageUrl} className="w-12" />
                <p>{data.name}</p>
                <p className="flex items-center">
                  <BiRupee />
                  {data.price}
                </p>
                <AiTwotoneDelete
                  onClick={() => RemoveItemFromCategory(data.id)}
                />
              </div>
            );
          })}
    </div>
  );
};

export default CategoryItem;
