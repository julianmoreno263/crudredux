/*este archivo store es el que tendra el state de toda la app*/
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers"; //importamos el reducer del index.js

//creamos el store, es una funcion, y la exportamos
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window ==="object" &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !=="undefined" ?
             window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f
  )
);

export default store;
