import {
  collection,
  doc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";
import accounting from "accounting";
import db from "../Data/firebaseConfig";
import { makeStyles } from "@material-ui/core";
import { useContext } from "react";

const Cart = () => {
  const classes = useStyles();
  const cartShopping = useContext(CartContext);
  const Swal = require("sweetalert2");

  console.log("soy el carrito", cartShopping.cartList);
  const createOrder = () => {
    const itemsForDB = cartShopping.cartList.map((item) => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem,
    }));

    cartShopping.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem),
      });
    });

    let order = {
      buyer: {
        name: "Juan Perez",
        email: "juan@gmail.com",
        phone: "123456789",
      },
      total: cartShopping.calcTotal(),
      items: itemsForDB,
      data: serverTimestamp(),
    };
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) =>
        alert(
          "Su pedido ha sido generado con exito.\n\n\nPedido Numero ID: " +
            result.id +
            "\n\n"
        )
      )
      .catch((err) => console.log(err));

    cartShopping.removeItem();
  };

  // const confirmarOrden = () => {
  //   <div
  //     className="modal fade"
  //     id="exampleModal"
  //     tabindex="-1"
  //     aria-labelledby="exampleModalLabel"
  //     aria-hidden="true"
  //   >
  //     <div className="modal-dialog">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title" id="exampleModalLabel">
  //             New message
  //           </h5>
  //           <button
  //             type="button"
  //             className="btn-close"
  //             data-bs-dismiss="modal"
  //             aria-label="Close"
  //           ></button>
  //         </div>
  //         <div className="modal-body">
  //           <form>
  //             <div className="mb-3">
  //               <label for="recipient-name" className="col-form-label">
  //                 Recipient:
  //               </label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="recipient-name"
  //               />
  //             </div>
  //             <div className="mb-3">
  //               <label for="message-text" className="col-form-label">
  //                 Message:
  //               </label>
  //               <textarea className="form-control" id="message-text"></textarea>
  //             </div>
  //           </form>
  //         </div>
  //         <div className="modal-footer">
  //           <button
  //             type="button"
  //             className="btn btn-secondary"
  //             data-bs-dismiss="modal"
  //           >
  //             Close
  //           </button>
  //           <button type="button" className="btn btn-primary">
  //             Send message
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>;
  // };

  // const confirmarOrden = () => {
  //   Swal.fire({
  //     title: "Nombre Completo",
  //     input: "text",
  //     inputAttributes: {
  //       autocapitalize: "off",
  //     },
  //     subTittle: "Correo Electronico",
  //     input: "email",
  //     inputAttributes: {
  //       autocapitalize: "off",
  //     },
  //     showCancelButton: true,
  //     confirmButtonText: "Look up",
  //     showLoaderOnConfirm: true,
  //     preConfirm: (login) => {
  //       return fetch(`//api.github.com/users/${login}`)
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error(response.statusText);
  //           }
  //           return response.json();
  //         })
  //         .catch((error) => {
  //           Swal.showValidationMessage(`Request failed: ${error}`);
  //         });
  //     },
  //     allowOutsideClick: () => !Swal.isLoading(),
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: `${result.value.login}'s avatar`,
  //         imageUrl: result.value.avatar_url,
  //       });
  //     }
  //   });
  // };
  return (
    <div className={classes.root}>
      <button
        type="button"
        class="btn btn-warning"
        onClick={cartShopping.removeItem}
      >
        Vaciar Carrito
      </button>

      {cartShopping.cartList.length === 0 ? (
        <p>TU CARRITO ESTA VACIO</p>
      ) : (
        cartShopping.cartList.length > 0 &&
        cartShopping.cartList.map((item) => (
          <div className="container">
            <table className={classes.tablaCompra}>
              <thead>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Opciones</th>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">{item.imgItem}</td>
                  <td>{item.nameItem}</td>
                  <td>{item.descriptionItem}</td>
                  <td>{item.qtyItem}</td>
                  <td>{accounting.formatMoney(item.costItem, "$$")}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => cartShopping.clear(item.idItem)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
      {cartShopping.cartList.length > 0 && (
        <div className="container">
          <div className="row">
            <h3>Resumen De Compra</h3>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3>
                    Sub Total:{" "}
                    {accounting.formatMoney(cartShopping.calcSubTotal(), "$$")}
                  </h3>
                  <h3>
                    Inpuestos:{" "}
                    {accounting.formatMoney(cartShopping.calcImpuestos(), "$$")}
                  </h3>
                  <h2>
                    <b>
                      Total:{" "}
                      {accounting.formatMoney(cartShopping.calcTotal(), "$$")}
                    </b>
                  </h2>
                  <hr />
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="teal"
                    variant="outline"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={createOrder}
                  >
                    Ir A Pagar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*ACTIVA MODAL CUANDO PASE EL DESAFIO
       <div
        className="modal"
        id="checkout"
        tabindex="-1"
        role="dialog"
        aria-labelledby="tittleCkeckOut"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="tittleCkeckOut">Mi Carrito</h5>
              <button className="close" data-dismis="modal" aria-label="cerrar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="alert alert-succes">
                <table className="table table-dark table-hover">
                  <thead>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Opciones</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">
                        <img
                          width="50px"
                          src="https://bluemonk.com.ar/95-thickbox_default/fernet-branca-750cc.jpg"
                          alt="imgItem"
                        />
                      </td>
                      <td scope="row">Fernet</td>
                      <td scope="row">2</td>
                      <td scope="row">$5000</td>
                      <td scope="row">
                        <button type="button" className="btn btn-danger">
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <h4>Total: $5000</h4>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-warning"
                type="button"
                data-dismis="modal"
              >
                Cerrar
              </button>
              <button className="btn btn-success" type="button">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

//ESTILOS:

const useStyles = makeStyles((theme) => ({
  root: {},
  tablaCompra: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderCollapse: "collapse",
    fontSize: "14px",
    "& th": {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      fontSize: "14px",
      fontWeight: "bold",
    },
    "& td": {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      fontSize: "14px",
    },
    "& tr": {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      fontSize: "14px",
    },
  },
}));
export default Cart;
