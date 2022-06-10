import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { makeStyles } from "@material-ui/core";
import products from "../Data/productos";
import promesaProducts from "../Data/promesaProducts";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ gretting }) => {
  const classes = useStyle();
  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    promesaProducts(
      2000,
      products.filter((item) => item.categoryId !== parseInt(id))
    )
      .then((resolve) => setInfo(resolve))
      .then((reject) => console.log(reject));
    // fetch("https://api.mercadolibre.com/sites/MLA/search?q=bebidas")
    //   .then((res) => res.json())
    //   .then((data) => setInfo(data.results))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>{gretting}</h2>
      <div className={classes.root}>
        <ItemList items={info} />
      </div>
    </>
  );
};

export default ItemListContainer;
//Estilos:

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
}));
