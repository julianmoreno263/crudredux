/*en este archivo de actions va la funcion que se encargara de realizar la accion que ejecute
el usuario, por ejemplo si dio click para agregar un producto, esta funcion es la que se ejecutara.

En si estos action realizan las consultas a la base de datos y se manda ejecutar el reducer para que modifique el state de la app.*/

//importamos los types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

/*action para crear nuevos productos,estas actions son funciones.Esta funcion es la que utilizamos en el componente de NuevoProducto.js */
export function crearNuevoProductoAction(producto) {
  return () => {
    console.log(producto);
  };
}
