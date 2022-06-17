import { Badge, makeStyles } from "@material-ui/core";

import { CartContext } from "./CartContext";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import { useContext } from "react";

const CartWidget = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={2} color="primary" className={classes.icon}>
        <ShoppingCartOutlined
          tittle="Ver compras"
          className={classes.iconCarrito}
        />
      </Badge>
    </div>
  );
};

//Estilos;
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  icon: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  iconCarrito: {
    color: "#000",
    fontSize: "2rem",
  },
}));
export default CartWidget;
