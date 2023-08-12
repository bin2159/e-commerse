import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import MusicContext from "./MusicContext";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  let email;
  if (localStorage.getItem("email")) {
    email = localStorage.getItem("email").replace(/@/g, "").replace(/\./g, "");
  }

  let itemarr=useRef
  useEffect(()=>{
    (async function () {
      try {
        const response = await fetch(
          `https://auth-test-f913d-default-rtdb.firebaseio.com/cart${email}.json`
        );
        const data = await response.json();
        itemarr.current = data[Object.keys(data).pop()];
        setItem(itemarr.current)
        
      } catch (err) {
        console.log(err);
      }
    })();
  },[email,itemarr])

  
  const [item, setItem] = useState();
  
  const musicCtx = useContext(MusicContext);
  const {
    musicProducts: { items: musicItems },
  } = musicCtx;

  const addItemHandler = (itemId) => {
    setItem((prev) => {
      const duplicateItemIndex = prev.findIndex(
        (prevItem) => prevItem.id === itemId
      );
      let newItemList;
      if (duplicateItemIndex !== -1) {
        const updatedItem = {
          ...prev[duplicateItemIndex],
          quantity: Number(prev[duplicateItemIndex].quantity) + 1,
        };
        newItemList = [...prev];
        newItemList[duplicateItemIndex] = updatedItem;
      } else {
        const newItem = musicItems.filter((items) => items.id === itemId);
        newItem[0].quantity = 1;
        newItemList = [...prev, ...newItem];
      }
      (async function () {
        try {
          const response = await fetch(
            `https://auth-test-f913d-default-rtdb.firebaseio.com/cart${email}.json`,
            {
              method: "POST",
              body: JSON.stringify(newItemList),
              headers: { "Content-Type": "application/json" },
            }
          );
          console.log(response)
        } catch (err) {
          console.log(err);
        }
      })();

      return newItemList;
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
