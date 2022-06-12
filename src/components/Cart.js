import { useContext, useState } from "react";

import { CartContext } from "./CartContext";
import { makeStyles } from "@material-ui/core";

const Cart = () => {
  const classes = useStyles();
  const cartShopping = useContext(CartContext);
  const [cartList, setCartList] = useState([]);
  const deteleCarrito = () => {
    cartShopping.clear();
  };

  const deleteItem = () => {
    let result = cartList.filter((item) => item.id !== id);
    setCartList(result);
  };

  return (
    <div className={classes.root}>
      <button type="button" class="btn btn-warning" onClick={deteleCarrito}>
        Vaciar Carrito
      </button>
      <button type="button" class="btn btn-danger" onClick={deleteItem}>
        Elimar producto
      </button>
      {cartShopping.cartList.length === 0 ? (
        <p>TU CARRITO ESTA VACIO</p>
      ) : (
        cartShopping.cartList.map((item) => <p>{item.name}</p>)
      )}
    </div>
  );
};

//ESTILOS:

const useStyles = makeStyles((theme) => ({}));
export default Cart;
