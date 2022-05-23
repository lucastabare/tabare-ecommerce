import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            id={item.id}
            title={item.name}
            pictureUrl={item.image}
            price={item.price}
            stock={item.stock}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemList;
