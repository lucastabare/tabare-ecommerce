import { useEffect, useState } from "react";
import products from "../Data/productos";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import promesaProducts from "../Data/promesaProducts";
import { makeStyles } from "@material-ui/core";
import { display } from "@mui/system";

const ItemListContainer = ({ gretting }) => {
  const classes = useStyle();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    promesaProducts(2000, products)
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

      <div className={classes.container}>
        <ItemList items={info} />
      </div>
      <ItemCount stock={5} initial={1} />
    </>
  );
};

export default ItemListContainer;
//Estilos:

const useStyle = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridAutoRows: "1fr 1fr 1fr",
    gap: "0px 0px",
    gridTemplateAreas: "...",
  },
}));
