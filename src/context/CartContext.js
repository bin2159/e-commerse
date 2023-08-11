import React, { createContext, useContext, useState } from "react";
import MusicContext from "./MusicContext";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [item, setItem] = useState([
    {id:'1',
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {id:'2',
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {id:'3',
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);
  const musicCtx = useContext(MusicContext);
  const {
    musicProducts: { items: musicItems },
  } = musicCtx;
  const addItemHandler = (itemId) => {
    setItem((prev) => {
      const duplicateItemIndex = prev.findIndex((prevItem) => prevItem.id === itemId);
      console.log(duplicateItemIndex)
      if (duplicateItemIndex !== -1) {
        const updatedItem = {
          ...prev[duplicateItemIndex],
          quantity: Number(prev[duplicateItemIndex].quantity) + 1,
        };
        const newItemList = [...prev];
        newItemList[duplicateItemIndex] = updatedItem;
        return newItemList;
      } else {
        const newItem = musicItems.filter((items) => items.id === itemId);
        newItem[0].quantity = 1;
        const newItemList = [...prev, ...newItem];
        return newItemList;
      }
    });
  };
  const cartProducts = {
    items: item,
    addItem: addItemHandler,
  };
  return (
    <CartContext.Provider value={{ cartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
