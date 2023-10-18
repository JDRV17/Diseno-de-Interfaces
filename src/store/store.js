import { configureStore } from "@reduxjs/toolkit";
import activadorReducer from "./actions/botonSlice";


export default configureStore({
  reducer: {
    activador: activadorReducer
  }
});