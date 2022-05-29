import promesaProducts from "../Data/promesaProducts";
import products from "../Data/productos";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    promesaProducts(2000, products[5])
      .then((resolve) => setItem(resolve))
      .catch((reject) => console.log(reject));
  }, []);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
