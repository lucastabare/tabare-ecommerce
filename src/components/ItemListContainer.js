import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ gretting }) => {
  return (
    <div>
      <h2>{gretting}</h2>
      <ItemCount stock={5} initial={1} />
      <ItemList />
    </div>
  );
};

export default ItemListContainer;

//stock={5} initial={1} onAdd={onAdd}
