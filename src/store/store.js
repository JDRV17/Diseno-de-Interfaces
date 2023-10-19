import { configureStore } from "@reduxjs/toolkit";
import activadorReducer from "./actions/botonSlice";
import usuarioReducer from "./actions/usuarioSliceModals";
import usuarioReducerPag from "./actions/usuarioSlicePaginas"


export default configureStore({
  reducer: {
    activador: activadorReducer,
    usuario: usuarioReducer,
    usuarioPaginas:usuarioReducerPag
  }
});