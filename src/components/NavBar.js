import React from "react";
import Logo from "../assets/img/gaming-logo-cover.jpg";
import "../assets/css/NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="">
          <a className="navbar-brand" href="#">
            <img
              className="img-logo"
              src={Logo}
              alt=""
              width="130"
              height="94"
            />
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
                <a className="nav-link active" aria-current="page" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Tienda
                </a>
              </li>
            </ul>
            <CartWidget />
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
