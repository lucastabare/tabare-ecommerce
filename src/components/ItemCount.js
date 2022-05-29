import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

const ItemCount = ({ stock, initial, onAdd }) => {
  const classes = useStyle();
  const [contador, setContador] = useState();

  useEffect(() => {
    setContador(initial);
  }, []);

  const aumentar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuir = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Error, no se puede sumar numero negativos");
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <h1>{contador}</h1>
      </div>
      <Box className={classes.boxButton}>
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
        <Button
          variant="contained"
          color="error"
          onClick={() => onAdd(contador)}
        >
          Agregar Item
        </Button>
      </Box>
    </div>
  );
};

//Estilos
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  boxButton: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "100px",
  },
}));
export default ItemCount;
