import React, { useEffect, useState } from 'react';
import styles from './CrearCuenta.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { desactivar } from "../../store/actions/botonSlice";
import { modificarNombreRegistro, modificarCiudadRegistro, modificarNumDocRegistro, 
    modificarNumTelRegistro, modificarEmailRegistro,modificarContraRegistro,
    modificarDeporRegistro, modificarEdadRegistro} from "../../store/actions/usuarioSliceModals";
import {mensajeExitoso, limpiarMensaje} from "../../store/actions/successSlice";
import { auth, provider } from "../../firebase/fireBaseConf";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { iniciarSesionModal } from '../../store/actions/usuarioSliceModals';
import { getDatabase, ref, get } from "firebase/database";

function CrearCuenta() {
    const { registro } = useSelector((state) => state.activador);
    const usuario =  useSelector((state) => state.usuario);
    const mensajeSuccess = useSelector((state) => state.success.mensaje);
    const dispatch = useDispatch();
    const [error, setError] = useState(false)
    const { email } = useSelector((estado) => estado.usuario);
    const { informacion } = useSelector((estado) => estado.usuario);
    const { ciudadRegistro } = useSelector((estado) => estado.usuario);


    useEffect(() => {
        if (mensajeSuccess) {
            const timer = setTimeout(() => {
                dispatch(limpiarMensaje());
            }, 3000);
            return () => clearTimeout(timer);
        }
      }, [mensajeSuccess, dispatch]);

    const registrarseS = () => {
        const correo = document.getElementById("CorreoElectronico").value;
        const contraseña = document.getElementById("Contraseña").value;
        console.log(correo, contraseña);
        createUserWithEmailAndPassword(auth, correo, contraseña).then((usuario) => {
            dispatch(iniciarSesionModal(usuario));
        }).catch(() => {
            setError(true);
        })
    }
    const onClickBot = () => {
        registrarseS()
    }
    const onClickBot2 = () =>{
        dispatch(mensajeExitoso('¡Creaste tu cuenta con éxito!'))
    }
    const manejarClick = () => {
        onClickBot();
        onClickBot2();
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

    return(
        registro && (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <button className={styles.botonCerrar} onClick={() => dispatch(desactivar({name:'registro'}))}> X </button>
                    <h1 className={styles.titulo}>Crear Cuenta</h1>
                </div>

                <form action="#" id="MainForm">
                    <input id="NombreUsuario" type="text" placeholder='Nombre Completo' onChange={modNombre} required></input>
                    <input id="ciudad" type="text" placeholder='Ciudad de residencia' onChange={modCiudad} required></input>
                    <input id="deporte" type="text" placeholder='Deporte Favorito' onChange={modDeporte} required></input>
                    <input id="edad" type="number" placeholder='Edad' onChange={modEdad} required></input>
                    <input id="documento" type="number" placeholder='Número de documento' onChange={modNumDoc} required></input>
                    <input id="telefono" type="number" placeholder='Número de telefono' onChange={modTel} required></input>
                    <input id="CorreoElectronico" type="email" placeholder='Correo Electrónico' required></input>
                    <input id="Contraseña" type="password" placeholder='Contraseña' required></input>
                
                <div className={styles.footer}>  
                    <button onClick={manejarClick} className={styles.botonCrear} >CREAR CUENTA</button>
                    {mensajeSuccess && <p className={styles.mensajeExitoso}>{mensajeSuccess}</p>}
                </div>
                </form>
                
            </div>
               
        </div>
                
        )
    )
    
}

export default CrearCuenta