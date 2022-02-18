import React, { useState } from "react";
import { FLOWERS } from "./data/data.js"
import FlowerNavigation from "./navigation/FlowerNavigation";



export const global = React.createContext();

export default function App() {

  const [list, setProductsList] = useState([]);


  function add(newProduct) {
    setProductsList([...list, newProduct])
  }

  function remove(oldProduct) {
    if (oldProduct.id !== FLOWERS.id)
      setProductsList(list.filter(item => oldProduct.id !== item.id));
  }

  function reset() {
    setProductsList([]);
  }

  return (

    <global.Provider value={{ list, add, remove, reset }}>
      <FlowerNavigation />
    </global.Provider>


  )
}

