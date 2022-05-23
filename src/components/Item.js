import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import accounting from "accounting";

const Item = ({ title, pictureUrl, price, id, stock }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={pictureUrl} alt={title} />
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
    </Card>
  );
};

export default Item;
