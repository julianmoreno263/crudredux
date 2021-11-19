import React from "react";
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//esta es la parted e redux
import { Provider } from "react-redux"; //pasa el state de arriba a abajo,envuelve a los demas componentes
import store from "./store";

function App() {
  /*use react-router-dom v6, por lo que no se usa Switch sino Routes,no se usa exact,y se
  reemplaza component por element.
  
  Lo que esta fuera del Routes(como el Header) estara disponioble en todas las paginas, lo de
  dentro del Routes seran las distintas rutas de los componentes y se mostrara solo el componente especificado segun la ruta.*/
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/productos/nuevo" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProducto />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
