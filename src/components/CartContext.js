import { ChildCare } from "@material-ui/icons";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCarList] = useState([]);

  const addItem = (item) => {
    setCarList([...cartList, item]);
  };

  const removeItem = () => {
    cartList.find((item) => item.id === id);
  };

  const clear = () => {
    setCarList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
