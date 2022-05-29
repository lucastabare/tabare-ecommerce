import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
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
    <>
      <Box className={classes.root}>
        <Button
          className={classes.button}
          variant="contained"
          color="error"
          onClick={disminuir}
        >
          -
        </Button>
        <h3 className={classes.count}>{contador}</h3>
        <Button
          className={classes.button}
          variant="contained"
          color="success"
          onClick={aumentar}
        >
          +
        </Button>
        <Button
          className={classes.buttonAdd}
          variant="contained"
          color="secondary"
          onClick={() => onAdd(contador)}
        >
          Agregar Item
        </Button>
      </Box>
    </>
  );
};

//Estilos
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    padding: "0.5rem",
  },
  count: {
    backgroundColor: "#000",
    borderRadius: "50%",
    color: "#fff",
    width: "30px",
    height: "30px",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  },
  button: {
    width: "30px",
    height: "30px",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    margin: "15px",
    padding: "15px",
  },
  buttonAdd: {
    width: "90px",
    height: "50px",
    margin: "15px",
    padding: "15px",
  },
}));
export default ItemCount;
