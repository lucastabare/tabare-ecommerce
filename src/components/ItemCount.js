import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";

const ItemCount = (stock, initial) => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    if (contador >= 1 || contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <div>
        <h1>Contados: {contador}</h1>
      </div>
      <Box>
        <Button
          className="button"
          size="large"
          variant="contained"
          color="error"
          onClick={disminuir}
        >
          -
        </Button>
        <Button
          size="large"
          variant="contained"
          color="success"
          onClick={aumentar}
        >
          +
        </Button>
      </Box>
    </div>
  );
};

export default ItemCount;
