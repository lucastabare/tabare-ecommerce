import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Logo from "../assets/img/gaming-logo-cover.jpg";
import React from "react";
import SearchForm from "./SearchForm";
import { makeStyles } from "@material-ui/core/styles";

function NavBar() {
  const classes = useStyle();

  return (
    <div className={classes.navigatorBar}>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="">
          <a className="navbar-brand" href="#">
            <Link to="/">
              <img
                className={classes.logo}
                src={Logo}
                alt=""
                width="130"
                height="94"
              />
            </Link>
          </a>
        </div>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/category/4" className={classes.btnlink}>
                  <a className="nav-link active" aria-current="page">
                    Sin alcohol
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/1" className={classes.btnlink}>
                  <a className="nav-link active" aria-current="page">
                    Con alcoholicas
                  </a>
                </Link>
              </li>
            </ul>
            <CartWidget />
            <SearchForm />
          </div>
        </div>
      </nav>
    </div>
  );
}

//Estilos

const useStyle = makeStyles((theme) => ({
  navigatorBar: {
    backgroundColor: "#fbdb6e",
    border: "solid white 2px",
    borderRadius: "5px",
    fontFamily: "Catamaran, sans-serif",
    fontSize: "25px",
    color: "#fafafa !important",
  },
  logo: {
    padding: "10px",
    borderRadius: "50%",
  },
  btnlink: {
    textDecoration: "none",
  },
}));

export default NavBar;
