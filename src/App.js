import "./App.css";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
// eslint-disable-next-line
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting="hola mundo ItemListContainer!!!" />
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
