import { createSlice } from "@reduxjs/toolkit";

export const botonSlice = createSlice({
  name: "activado",
  initialState: {
    activado: false,
    registro:false,
    mostrarRegistro:false,
    recuContraseña: false
  },
  reducers: {
    activar: (state,action) => {
      const{name} = action.payload
      state[name] = true;
    },
    desactivar: (state,action) => {
        const{name} = action.payload
        state[name] = false;
    },
  }

});

export const { activar, desactivar } = botonSlice.actions;

export default botonSlice.reducer;