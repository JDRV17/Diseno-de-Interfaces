import React from 'react'
import styles from './IniciarSesion.module.css';
import RecuperarContrasena from './RecuperarContrasena'
import { Link } from 'react-router-dom';
import CrearCuenta from './CrearCuenta';
import { useDispatch, useSelector } from "react-redux";
import { activar, desactivar } from "../../store/actions/botonSlice";
import { modificarEmail, modificarContraSesion } from "../../store/actions/usuarioSliceModals";


function IniciarSesion() {
    const { activado } = useSelector((state) => state.activador);
    const { mostrarRegistro } = useSelector((state) => state.activador);
    const { recuContraseña } = useSelector((state) => state.activador);
    const usuario =  useSelector((state) => state.usuario);
    const dispatch = useDispatch();

    const botonInicio = () => {
        alert('¡Iniciaste sesión!');
      };
    
    const modEmail = (evento) => {
    dispatch(modificarEmail(evento.target.value));
    }
    const modContraseña = (evento) => {
        dispatch(modificarContraSesion(evento.target.value));
    }

    return(
        activado && (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <button onClick={() => dispatch(desactivar({name:'activado'}))}> X </button>
                    <h1 className={styles.titulo}>Iniciar Sesión</h1>
                </div>
                <form action="#">
                    <input 
                        type="email" 
                        placeholder='Correo Electrónico'
                        onChange={modEmail}
                        
                    />
                    <input 
                        type="password" 
                        placeholder='Contraseña'
                        onChange={modContraseña}
                    />
                </form>
                <span onClick={() => dispatch(activar({name:'recuContraseña'}))} className={styles.contra}> ¿Olvidaste tu contraseña?</span>

                <div className={styles.footer}>
                    <Link className={styles.botonInicioSesion} to='/InicioSesion'>
                        <button onClick={botonInicio} className={styles.botonInicioSesion} >INICIAR SESIÓN</button>
                    </Link>
                </div>
                <div className={styles.member}>
                    No tienes cuenta? <span onClick={() => dispatch(activar({name:'registro'}))} className={styles.crear}> 
                    Create una!!</span>
                    
                </div>
            </div>
            {recuContraseña && <RecuperarContrasena/>}
            {mostrarRegistro && <CrearCuenta/>}
        </div>
        )
    )
}



export default IniciarSesion