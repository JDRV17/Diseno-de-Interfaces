import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    email: false,
    informacion: null,
    contraSesion: "",
    nombreRegistro: "",
    edadRegistro: "",
    ciudadRegistro: "",
    deporFavRegistro: "",
    numDocRegistro: "",
    numTelRegistro: "",
    emailRegistro: "",
    contraRegistro: "",
    emailRecuContra: "",
    contraRecuContra: "",
    confirmContraRecuContra: ""
  },
  reducers: {
    // modificarEmail: (state, action) => {
    //     state.email = action.payload;
    // },
    // modificarContraSesion: (state, action) => {
    //     state.contraSesion = action.payload;
    // },
    iniciarSesionModal: (state, action) => {
        state.email = true;
        state.informacion = action.payload.user ;
        console.log(state.informacion)
    },
    // registroModal: (state, action) => {
    //     state.emailRegistro = true;
    //     state.informacion = action.payload.user ;
    //     console.log(state.informacion)
    // },
    modificarNombreRegistro: (state, action) => {
        state.nombreRegistro = action.payload;
    },
    modificarCiudadRegistro: (state, action) => {
        state.ciudadRegistro = action.payload;
    },
    modificarEdadRegistro: (state, action) => {
        state.edadRegistro = action.payload;
    },
    modificarDeporRegistro: (state, action) => {
        state.deporFavRegistro = action.payload;
    },
    modificarNumDocRegistro: (state, action) => {
        state.numDocRegistro = action.payload;
    },
    modificarNumTelRegistro: (state, action) => {
        state.numTelRegistro = action.payload;
    },
    modificarEmailRegistro: (state, action) => {
        state.emailRegistro = action.payload;
    },
    modificarContraRegistro: (state, action) => {
        state.contraRegistro = action.payload;
    },
    modificarEmailRecuContra: (state, action) => {
        state.emailRecuContra = action.payload;
    },
    modificarContraRecuContra: (state, action) => {
        state.contraRecuContra = action.payload;
    },
    modificarConfirmContraRecuContra: (state, action) => {
        state.confirmContraRecuContra = action.payload;
    },
  }
});

export const { modificarEmail, modificarContraSesion, modificarNombreRegistro, modificarCiudadRegistro, 
    modificarNumDocRegistro, modificarNumTelRegistro, modificarEmailRegistro,modificarContraRegistro,
    modificarEmailRecuContra,modificarContraRecuContra,modificarConfirmContraRecuContra,
    modificarEdadRegistro, modificarDeporRegistro, iniciarSesionModal } = usuarioSlice.actions;

export default usuarioSlice.reducer;