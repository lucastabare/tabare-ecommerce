import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import { Box, makeStyles } from "@material-ui/core";
import ItemCount from "./ItemCount";

const Item = ({ title, pictureUrl, price, id, stock }) => {
  const classes = useStyles();
  const onAdd = (contador) => {
    alert("Has agregado " + contador + "Items al carrito");
  };

  return (
    <>
      <Card sx={{ maxWidth: 350 }} className={classes.root}>
        <CardMedia
          height="140"
          component="img"
          image={pictureUrl}
          alt={title}
          className={classes.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            STOCK:{stock}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {accounting.formatMoney(price, "$$")}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="success">
            Agregar Item
          </Button>
        </CardActions>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </Card>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "15px",
    padding: "5px",
    margin: "10px",
  },
  img: {},
}));

export default Item;

{
  /* <div className="card" style="width: 18rem;">
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{id}</p>
          <p className="card-text">STOCK: {stock}</p>
          <p className="card-text">{accounting.formatMoney(price, " $$")}</p>
          <a href="#" className="btn btn-primary">
            Description
          </a>
        </div>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div> */
}
