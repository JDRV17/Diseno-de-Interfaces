import React from 'react'
import styles from './CrearCuenta.module.css';
import { useState } from "react";
import IniciarSesion from './IniciarSesion';
import { useDispatch, useSelector } from "react-redux";
import { activar, desactivar } from "../../store/actions/botonSlice";

function CrearCuenta() {
    const { registro } = useSelector((state) => state.activador);
    const dispatch = useDispatch();

    const alerta = () => {
        alert('Creaste la cuenta con éxito');
    };

    return(
        registro && (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <button className={styles.botonCerrar} onClick={() => dispatch(desactivar({name:'registro'}))}> X </button>
                    <h1 className={styles.titulo}>Crear Cuenta</h1>
                </div>
                <form action="#">
                    <input type="text" placeholder='Nombre'></input>
                    <input type="text" placeholder='Apellido'></input>
                    <input type="number" placeholder='Número de documento'></input>
                    <input type="number" placeholder='Número de telefono'></input>
                    <input type="email" placeholder='Correo Electrónico'></input>
                    <input type="password" placeholder='Contraseña'></input>
                </form>
                <div className={styles.footer}>  
                <button onClick={alerta} className={styles.botonCrear} >CREAR CUENTA</button>
                </div>
            </div>
        </div>
        )
    )
}

export default CrearCuenta