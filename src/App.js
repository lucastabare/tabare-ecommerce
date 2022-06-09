import "./App.css";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { makeStyles } from "@material-ui/core/styles";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/Cart"
// eslint-disable-next-line
function App() {
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<ItemListContainer/>}/>
          <Route path="category/idCategory" element={<ItemListContainer/>}
          <Route path="/item/idItem" element={<ItemDetailContainer/>}
          <Route path="/cart" element={<Cart/>}
        </Routes>
      </BrowserRouter>
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
    backgroundColor: "#33a2cc",
    borderRadius: "5px",
  },
}));
export default App;
