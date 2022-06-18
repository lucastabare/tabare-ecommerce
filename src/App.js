import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { makeStyles } from "@material-ui/core/styles";

// eslint-disable-next-line
function App() {
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="category/:id" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  app: {
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    borderRadius: "5px",
  },
}));
export default App;
