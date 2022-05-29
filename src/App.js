import "./App.css";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { makeStyles } from "@material-ui/core/styles";

// eslint-disable-next-line
function App() {
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <NavBar />
      <ItemListContainer gretting="hola mundo ItemListContainer!!!" />
      {/* <ItemDetailContainer /> */}
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
