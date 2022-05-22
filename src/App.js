import "./App.css";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting="hola mundo ItemListContainer!!!" />
    </div>
  );
}

export default App;
