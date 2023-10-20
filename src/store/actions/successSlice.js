import { createSlice } from '@reduxjs/toolkit';

const successSlice = createSlice({
  name: 'success',
  initialState: {
    mensaje: null,
  },
  reducers: {
    mensajeExitoso: (state, action) => {
      state.mensaje = action.payload;
    },
    limpiarMensaje: (state) => {
      state.mensaje = null;
    },
  },
});

export const { mensajeExitoso, limpiarMensaje } = successSlice.actions;
export default successSlice.reducer;


