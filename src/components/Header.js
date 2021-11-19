import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  /*Utilizamos Links en vez de enlaces(a), asi es más rapida la interaccion*/
  return (
    //clases de boostrap
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            CRUD REACT-REDUX-REST API & AXIOS
          </Link>
        </h1>
      </div>
      <Link
        to={"/productos/nuevo"}
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        Agregar Producto &#43;
      </Link>
    </nav>
  );
};

export default Header;
