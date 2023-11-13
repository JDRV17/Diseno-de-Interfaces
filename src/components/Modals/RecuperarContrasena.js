import React, { useEffect } from 'react'
import styles from './RecuperarContrasena.module.css';
import { useDispatch, useSelector } from "react-redux";
import { desactivar } from "../../store/actions/botonSlice";
import {modificarEmailRecuContra, modificarContraRecuContra, 
    modificarConfirmContraRecuContra } from "../../store/actions/usuarioSliceModals";
import {mensajeExitoso, limpiarMensaje} from "../../store/actions/successSlice";

function Modal() {
    const { recuContraseña } = useSelector((state) => state.activador);
    const usuario =  useSelector((state) => state.usuario);
    const mensajeSuccess = useSelector((state) => state.success.mensaje);
    const dispatch = useDispatch();

    useEffect(() => {
        if (mensajeSuccess) {
            const timer = setTimeout(() => {
                dispatch(limpiarMensaje());
            }, 3500);
            return () => clearTimeout(timer);
        }
      }, [mensajeSuccess, dispatch]);
    
    const mostrarMensaje = () => {
    dispatch(mensajeExitoso('¡Actualizaste la contraseña con éxito!'));
    };
    const modEmail= (evento) => {
        dispatch(modificarEmailRecuContra(evento.target.value));
    }
    const modContra = (evento) => {
        dispatch(modificarContraRecuContra(evento.target.value));
    }
    const modConfirmContra = (evento) => {
        dispatch(modificarConfirmContraRecuContra(evento.target.value));
    }
    return(
        recuContraseña && (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <button onClick={() => dispatch(desactivar({name:'recuContraseña'}))}> X </button>
                    <h1 className={styles.contra}>Recuperar Contraseña</h1>
                </div>
                <form action="#">
                    <input type="email" placeholder='Correo Electrónico' onChange={modEmail}></input>
                    <input type="password" placeholder='Contraseña' onChange={modContra}></input>
                    <input type="password" placeholder='Confirmar contraseña' onChange={modConfirmContra}></input>
                </form>
                <div className={styles.footer}>
                    <button onClick={mostrarMensaje} className={styles.botonEnviar}>ENVIAR</button>
                    {mensajeSuccess && <p className={styles.mensajeExitoso}>{mensajeSuccess}</p>}
                </div>
            </div>
        </div>
        )
    )
}

export default Modal