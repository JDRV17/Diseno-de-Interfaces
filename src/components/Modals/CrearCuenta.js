import React, { useEffect } from 'react';
import styles from './CrearCuenta.module.css';
import { useDispatch, useSelector } from "react-redux";
import { desactivar } from "../../store/actions/botonSlice";
import { modificarNombreRegistro, modificarCiudadRegistro, modificarNumDocRegistro, 
    modificarNumTelRegistro, modificarEmailRegistro,modificarContraRegistro,
    modificarDeporRegistro, modificarEdadRegistro} from "../../store/actions/usuarioSliceModals";
import {mensajeExitoso, limpiarMensaje} from "../../store/actions/successSlice";

function CrearCuenta() {
    const { registro } = useSelector((state) => state.activador);
    const usuario =  useSelector((state) => state.usuario);
    const mensajeSuccess = useSelector((state) => state.success.mensaje);
    const dispatch = useDispatch();

    useEffect(() => {
        if (mensajeSuccess) {
            const timer = setTimeout(() => {
                dispatch(limpiarMensaje());
            }, 3000);
            return () => clearTimeout(timer);
        }
      }, [mensajeSuccess, dispatch]);
    
      const mostrarMensaje = () => {
        dispatch(mensajeExitoso('¡Creaste tu cuenta con éxito!'));
      };

    const modNombre = (evento) => {
        dispatch(modificarNombreRegistro(evento.target.value));
    }
    const modCiudad = (evento) => {
        dispatch(modificarCiudadRegistro(evento.target.value));
    }
    const modDeporte = (evento) => {
        dispatch(modificarDeporRegistro(evento.target.value));
    }
    const modEdad = (evento) => {
        dispatch(modificarEdadRegistro(evento.target.value));
    }
    const modNumDoc = (evento) => {
        dispatch(modificarNumDocRegistro(evento.target.value));
    }
    const modTel = (evento) => {
        dispatch(modificarNumTelRegistro(evento.target.value));
    }
    const modEmail = (evento) => {
        dispatch(modificarEmailRegistro(evento.target.value));
    }
    const modContra = (evento) => {
        dispatch(modificarContraRegistro(evento.target.value));
    }
    return(
        registro && (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <button className={styles.botonCerrar} onClick={() => dispatch(desactivar({name:'registro'}))}> X </button>
                    <h1 className={styles.titulo}>Crear Cuenta</h1>
                </div>
                <form action="#">
                    <input type="text" placeholder='Nombre Completo' onChange={modNombre}></input>
                    <input type="text" placeholder='Ciudad de residencia' onChange={modCiudad}></input>
                    <input type="text" placeholder='Deporte Favorito' onChange={modDeporte}></input>
                    <input type="number" placeholder='Edad' onChange={modEdad}></input>
                    <input type="number" placeholder='Número de documento' onChange={modNumDoc}></input>
                    <input type="number" placeholder='Número de telefono' onChange={modTel}></input>
                    <input type="email" placeholder='Correo Electrónico' onChange={modEmail}></input>
                    <input type="password" placeholder='Contraseña' onChange={modContra}></input>
                </form>
                <div className={styles.footer}>  
                <button onClick={mostrarMensaje} className={styles.botonCrear} >CREAR CUENTA</button>
                {mensajeSuccess && <p className={styles.mensajeExitoso}>{mensajeSuccess}</p>}
                </div>
            </div>
        </div>
        )
    )
}

export default CrearCuenta