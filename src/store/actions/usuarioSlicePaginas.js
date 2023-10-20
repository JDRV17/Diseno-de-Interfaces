import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlicePaginas = createSlice({
  name: "usuarioPaginas",
  initialState: {
    lugaresCiudad: "",
    lugaresPais: "",
    lugaresCiudadSesion: "",
    lugaresPaisSesion: "",
    lugaresDirSesion: "",
    torneoCiudadSesion: "",
    torneoPaisSesion: ""
  },
  reducers: {
    modificarCiudad: (state, action) => {
      state.lugaresCiudad = action.payload;
    },
    modificarPais: (state, action) => {
      state.lugaresPais =  action.payload;
    },
    modificarCiudadSesion: (state, action) => {
      state.lugaresCiudadSesion = action.payload;
    },
    modificarPaisSesion: (state, action) => {
      state.lugaresPaisSesion =  action.payload;
    },
    modificarDireccionSesion: (state, action) => {
      state.lugaresDirSesion = action.payload;
    },
    modificarTorneoCiudadSesion: (state, action) => {
      state.torneoCiudadSesion = action.payload;
    },
    modificarPaisTorneoSesion: (state, action) => {
      state.torneoPaisSesion = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { modificarCiudad, modificarPais, modificarCiudadSesion, modificarPaisSesion,
  modificarDireccionSesion, modificarTorneoCiudadSesion, modificarPaisTorneoSesion } = usuarioSlicePaginas.actions;

export default usuarioSlicePaginas.reducer;