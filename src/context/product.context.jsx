import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import uniqid from "uniqid";
import { Data } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { UpdatingItems } from "../firebase/firebase";
export const productContext = createContext({
  category: "",
  categoryItmes: [],
  AddItemtoCategory: () => {},
  RemoveItemFromCategory: () => {},
});

export const ProudctProvider = ({ children }) => {
  const [category, setCategory] = useState();
  const [categoryItems, setCategoryItems] = useState([]);
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
    return () => getData();
  }, []);
  const AddItemtoCategory = async (imageUrl, name, price) => {
    if (category === undefined) return;
    const categoryItemsref = categoryItems.map((item) => {
      if (item.title === category) {
        return {
          ...item,
          items: [
            ...item.items,
            { id: uniqid(), name: name, imageUrl: imageUrl, price: price },
          ],
        };
      }
      return item;
    });
    setCategoryItems(categoryItemsref);
    await UpdatingItems(categoryItemsref);
    console.log(categoryItemsref);
  };
  const RemoveItemFromCategory = async (id) => {
    const data = categoryItems
      .find((data) => data.title === category)
      .items.filter((data) => data.id !== id);

    const categoryItemsref = categoryItems.map((item) => {
      if (item.title === category) {
        return {
          ...item,
          items: [...data],
        };
      }
      return item;
    });

    setCategoryItems(categoryItemsref);
    await UpdatingItems(categoryItemsref);
    console.log(categoryItems);
  };
  const value = {
    category,
    categoryItems,
    setCategory,
    AddItemtoCategory,
    RemoveItemFromCategory,
    setCategoryItems,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};
