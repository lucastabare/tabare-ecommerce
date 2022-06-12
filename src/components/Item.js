import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core";

const Item = ({ title, pictureUrl, price, id, stock }) => {
  const classes = useStyles();
  const onAdd = (contador) => {
    alert("Has agregado " + contador + "Items al carrito");
  };

  return (
    <>
      <Card sx={{ maxWidth: 300 }} className={classes.root}>
        <CardMedia
          height="160px"
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
        <CardActions className={classes.cardAtion}>
          <Link to={`/item/${id}`}>
            <Button size="small" variant="contained" color="success">
              Detalle
            </Button>
          </Link>
        </CardActions>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </Card>
    </>
  );
};

//ESTILOS
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
  img: {
    margin: "0 auto",
    width: "auto !important",
  },
  cardAtion: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
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
