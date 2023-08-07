import React, { createContext, useContext, useState } from "react";
import MusicContext from "./MusicContext";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [item, setItem] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);
  const musicCtx=useContext(MusicContext)
  const {musicProducts:{items:musicItems}}=musicCtx
  const addItemHandler=(itemTitle)=>{
    setItem(prev=>{
        const duplicateItemIndex=prev.findIndex(prevItem=>prevItem.title===itemTitle)
        if(duplicateItemIndex!==-1){
            const updatedItem={...prev[duplicateItemIndex],quantity:Number(prev[duplicateItemIndex].quantity)+1}
            const newItemList=[...prev]
            newItemList[duplicateItemIndex]=updatedItem
            return newItemList
            
        }
        else{
        const newItem =musicItems.filter(items=>items.title=itemTitle)
            const newItemList=[...prev,{...newItem,quantity:1}]
            return newItemList
        }
    })
  }
  const cartProducts = {
    items: item,
    addItem:addItemHandler
  };
  return (
    <CartContext.Provider value={{ cartProducts }}>{children}</CartContext.Provider>
  );
};

export default CartContext;
