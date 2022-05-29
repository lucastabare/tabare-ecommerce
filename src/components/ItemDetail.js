import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>Producto: {item.name}</h2>
      <img width="240px" src={item.image} />
      <p>Description: {item.description}</p>
      <p>Precio: {item.price}</p>
      <p>Stock: {item.stock}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
