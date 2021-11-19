import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions de redux
import { crearNuevoProductoAction } from "../actions/productosActions";

const NuevoProducto = () => {
  //state local del componente
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  //utilizamos useDispatch, este hook devuelve una funcion, y dentro de esta funcion dispatch ya podemos ejecutar la funcion crearNuevoProductoAction. Dispatch se utiliza para ejecutar las funciones que tengamos en los actions. Si damos click en el boton de agregar del formulario se ejecutara lo que tenga dentro la funcion crearNuevoProductoAction
  const dispatch = useDispatch();

  //mandamos llamar el action de productosActions
  const agregarProducto = (producto) => {
    dispatch(crearNuevoProductoAction(producto));
  };

  //cuando el usuario haga submit del formulario se ejecuta esta funcion
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validamos formulario
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    //validamos que no haya errores

    //crear el nuevo producto, aqui se manda llamar la funcion agregarProducto pero esta funcion a la vez ejecutara dos hooks, no puede ejecutar de una vez la funcion de crearNuevoProductoAction,debe utilizarsen estos hooks. Estos hooks son useDispatch y useSelector de react-redux. useDispatch sirve para ejecutar las acciones que tengamos y useSelector es para acceder al state dentro del componente
    agregarProducto({
      nombre,
      precio,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercas d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
