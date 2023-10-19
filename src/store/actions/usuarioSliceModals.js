import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    email: "",
    contraSesion: "",
    nombreRegistro: "",
    apellidoRegistro: "",
    numDocRegistro: "",
    numTelRegistro: "",
    emailRegistro: "",
    contraRegistro: "",
    emailRecuContra: "",
    contraRecuContra: "",
    confirmContraRecuContra: ""
  },
  reducers: {
    modificarEmail: (state, action) => {
        state.email = action.payload;
    },
    modificarContraSesion: (state, action) => {
        state.contraSesion = action.payload;
    },
    modificarNombreRegistro: (state, action) => {
        state.nombreRegistro = action.payload;
    },
    modificarApellidoRegistro: (state, action) => {
        state.apellidoRegistro = action.payload;
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

export const { modificarEmail, modificarContraSesion, modificarNombreRegistro, modificarApellidoRegistro, 
    modificarNumDocRegistro, modificarNumTelRegistro, modificarEmailRegistro,modificarContraRegistro,
    modificarEmailRecuContra,modificarContraRecuContra,modificarConfirmContraRecuContra } = usuarioSlice.actions;

export default usuarioSlice.reducer;