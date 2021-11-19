/*los types describen lo que esta pasando en la app, se utilizan tanto en el action como en el reducer. Por ejemplo si agregamos un producto eso es una accion, entonces en este archivo es donde
se describen esas acciones.

ESTOS TYPES SE UTILIZAN EN EL ACTION PARA DESCRIBIR LAS FUNCIONES, PERO EN EL REDUCER NOS SERVIRAN PARA VALIDAR CAD UNA DE ESTAS FUNCIONES Y MODIFICAR EL STATE DE ACUERDO A LO QUE ESTE SUCEDIENDO.

entonces, estos types los importamos en el reducer, y creamos tambien la carpeta actions en src y creamos el primer actions para productos, entonces estos types tambien se los pasamos a ese action.*/

export const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
export const AGREGAR_PRODUCTO_EXITO = "AGREGAR_PRODUCTO_EXITO";
export const AGREGAR_PRODUCTO_ERROR = "AGREGAR_PRODUCTO_ERROR";
