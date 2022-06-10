import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";

const ItemList = ({ items }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {items.length > 0 ? (
        items.map((item, key) => (
          <Item
            id={item.id}
            title={item.title}
            pictureUrl={item.image}
            price={item.price}
            stock={item.stock}
            key={key}

            // id={item.seller.id}
            // title={item.title}
            // pictureUrl={item.thumbnail}
            // price={item.price}
            // stock={item.installments.quantity}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
  },
}));
export default ItemList;
