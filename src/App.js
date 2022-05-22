import "./App.css";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting="hola mundo ItemListContainer!!!" />
      {/* <ItemCount stock={20} initial={0} /> */}
    </div>
  );
}

export default App;
