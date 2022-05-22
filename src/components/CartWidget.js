import { Badge, makeStyles } from "@material-ui/core";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

const CartWidget = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Badge badgeContent={2} color="primary" className={classes.icon}>
        <ShoppingCartOutlined />
      </Badge>
    </div>
  );
};

//Estilos;
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  icon: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));
export default CartWidget;
