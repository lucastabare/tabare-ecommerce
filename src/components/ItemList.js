import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";

const ItemList = ({ items }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            id={item.id}
            title={item.title}
            pictureUrl={item.image}
            price={item.price}
            stock={item.stock}

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
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    alignItems:"center"
  },
}));
export default ItemList;
