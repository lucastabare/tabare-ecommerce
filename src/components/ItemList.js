import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            id={item.id}
            title={item.title}
            pictureUrl={item.image}
            price={item.price}
            stock={item.stock}

            // id={item.seller.id}
            // title={item.title}
            // pictureUrl={item.thumbnail}
            // price={item.price}
            // stock={item.installments.quantity}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemList;
