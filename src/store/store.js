import { configureStore } from "@reduxjs/toolkit";
import activadorReducer from "./actions/botonSlice";
import usuarioReducer from "./actions/usuarioSliceModals";
import usuarioReducerPag from "./actions/usuarioSlicePaginas";
import selectionReducer from "./actions/successSlice";


export default configureStore({
  reducer: {
    activador: activadorReducer,
    usuario: usuarioReducer,
    usuarioPaginas:usuarioReducerPag,
    success: selectionReducer
  }
});