import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (contador) => {
    alert("Has agregado " + contador + "Items al carrito");
  };

  return (
    <>
      <div>
        <h2>Producto: {item.name}</h2>
        <img width="240px" src={item.image} />
        <p>Description: {item.description}</p>
        <p>Precio: {item.price}</p>
        <p>Stock: {item.stock}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
