import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import { Box, makeStyles } from "@material-ui/core";

const Item = ({ title, pictureUrl, price, id, stock }) => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sizes="(max-width: 345px) 100vw, 345px"
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
      </Card>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    size: "cover",
  },
}));

export default Item;
