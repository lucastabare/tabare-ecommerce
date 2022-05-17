import { Badge } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
//import { withStyles } from "@mui/material/styles";

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

//Estilos
// const useStyles = withStyles((theme) => ({
//   root: {
//     margin: theme.spacing(3),
//     padding: theme.spacing(3),
//   },
//   icon: {
//     margin: theme.spacing(3),
//     padding: theme.spacing(3),
//   },
// }));
export default CartWidget;
