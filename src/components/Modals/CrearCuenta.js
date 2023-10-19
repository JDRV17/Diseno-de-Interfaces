import React from 'react'
import styles from './CrearCuenta.module.css';
import { useDispatch, useSelector } from "react-redux";
import { desactivar } from "../../store/actions/botonSlice";
import { modificarNombreRegistro, modificarApellidoRegistro, modificarNumDocRegistro, 
    modificarNumTelRegistro, modificarEmailRegistro,modificarContraRegistro} from "../../store/actions/usuarioSliceModals";

function CrearCuenta() {
    const { registro } = useSelector((state) => state.activador);
    const usuario =  useSelector((state) => state.usuario);
    const dispatch = useDispatch();
    
    const alerta = () => {
        alert('Creaste la cuenta con éxito');
    };
    const modNombre = (evento) => {
        dispatch(modificarNombreRegistro(evento.target.value));
    }
    const modApellido = (evento) => {
        dispatch(modificarApellidoRegistro(evento.target.value));
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
                    <input type="text" placeholder='Nombre' onChange={modNombre}></input>
                    <input type="text" placeholder='Apellido' onChange={modApellido}></input>
                    <input type="number" placeholder='Número de documento' onChange={modNumDoc}></input>
                    <input type="number" placeholder='Número de telefono' onChange={modTel}></input>
                    <input type="email" placeholder='Correo Electrónico' onChange={modEmail}></input>
                    <input type="password" placeholder='Contraseña' onChange={modContra}></input>
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