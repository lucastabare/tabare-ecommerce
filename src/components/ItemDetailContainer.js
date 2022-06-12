import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import products from "../Data/productos";
import promesaProducts from "../Data/promesaProducts";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({}) => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    promesaProducts(
      2000,
      products.find((item) => item.id === parseInt(id))
    )
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
