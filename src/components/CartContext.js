import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCarList] = useState([]);

  const buttonShopping = () => {};
  const addItem = (item) => {
    setCarList([...cartList, item]);
  };

  const removeItem = (id) => {
    let result = cartList.filter((item) => item.idItem !== id);
    setCarList(result);
  };

  const clear = () => {
    setCarList([]);
  };

  const calcItemsQty = () => {
    return cartList.length;
  };

  const calcTotal = () => {
    return calcSubTotal();
  };

  const calcTotalItems = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].costItem * cartList[index].qty;
  };

  const calcSubTotal = () => {
    let totalItems = cartList.map((item) => calcTotalItems(item.idItem));
    return totalItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        buttonShopping,
        calcItemsQty,
        calcTotal,
        calcSubTotal,
        calcTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
