import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const Categorias = () => {
  const classes = useStyles();

  return (
    <nav className="navbar navbar-expand-lg">
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cervezas
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/categoria/cervezas/quilmes"
                    className="dropdown-item"
                  >
                    Quilmes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/cervezas/brahma"
                    className="dropdown-item"
                  >
                    Brahma
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/cervezas/artezanal"
                    className="dropdown-item"
                  >
                    Artezanal
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/categoria/todas" className="dropdown-item">
                    Todas
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vinos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/categoria/vinos/malbec" className="dropdown-item">
                    Malbec
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/vinos/cabernet"
                    className="dropdown-item"
                  >
                    Cabernet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/vinos/frutales"
                    className="dropdown-item"
                  >
                    Frutales
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/categoria/vinos/todos" className="dropdown-item">
                    todos
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destiladas
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/categoria/destilados/gin"
                    className="dropdown-item"
                  >
                    Gin
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/destilados/vodka"
                    className="dropdown-item"
                  >
                    Vodka
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/destilados/Ron"
                    className="dropdown-item"
                  >
                    Ron
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/categoria/destilados/todos"
                    className="dropdown-item"
                  >
                    Todos
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sin Alcohol
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/categoria/sinalcohol/gaseosa"
                    className="dropdown-item"
                  >
                    Gaseosas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/sinalcohol/jugos"
                    className="dropdown-item"
                  >
                    Jugos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/sinalcohol/aguas"
                    className="dropdown-item"
                  >
                    Aguas
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/categoria/sinalcohol/todos"
                    className="dropdown-item"
                  >
                    Todos
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//ESTILOS:

const useStyles = makeStyles((theme) => ({
  btnlink: {
    textDecoration: "none",
  },
}));
export default Categorias;
