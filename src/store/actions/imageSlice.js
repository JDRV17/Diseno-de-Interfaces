import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'imagenes',
  initialState: {
    imagenLogo: null,
    imagenGPS: null,
    noticias: null,
    imagen1: null,
    imagen2: null,
    imagen3: null,
    perfil: null, 
    fotoLapiz: null,
    logoFutbol: null
  },
  reducers: {
    modificarLogo: (state, action) => {
      state.imagenLogo = action.payload;
    },
    modificarLugares: (state, action) => {
      state.imagenGPS = action.payload;
    },
    modificarNoticias: (state, action) => {
      state.noticias = action.payload;
    },
    modificarImagen1: (state, action) => {
      state.imagen1 = action.payload;
    },
    modificarImagen2: (state, action) => {
      state.imagen2 = action.payload;
    },
    modificarImagen3: (state, action) => {
      state.imagen3 = action.payload;
    },
    modificarPerfil: (state, action) => {
      state.perfil = action.payload;
    },
    modificarFotoLapiz: (state, action) => {
      state.fotoLapiz = action.payload;
    },
    modificarLogoFutbol: (state, action) => {
      state.logoFutbol = action.payload;
    }
  },
});

export const { modificarLogo, modificarImagen1, modificarImagen2, modificarImagen3, 
  modificarNoticias, modificarLugares, modificarPerfil, modificarFotoLapiz, modificarLogoFutbol} = imageSlice.actions;
export default imageSlice.reducer;