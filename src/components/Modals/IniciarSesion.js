import React, { useState } from 'react';
import styles from './IniciarSesion.module.css';
import RecuperarContrasena from './RecuperarContrasena'
import inicioSesion from '../../pagesSesion/inicioSesion/inicioSesion'
import { Link } from 'react-router-dom';
import CrearCuenta from './CrearCuenta';
import { useDispatch, useSelector } from "react-redux";
import { activar, desactivar } from "../../store/actions/botonSlice";
import { auth, provider } from "../../firebase/fireBaseConf";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { iniciarSesionModal } from '../../store/actions/usuarioSliceModals';


function IniciarSesion() {
    const [error, setError] = useState(false); 
    const { activado } = useSelector((state) => state.activador);
    const { mostrarRegistro } = useSelector((state) => state.activador);
    const { recuContraseña } = useSelector((state) => state.activador);
    const { email } =  useSelector((state) => state.usuario);
    const { informacion } =  useSelector((state) => state.usuario);
    const dispatch = useDispatch();

    const iniciarSesiones = () => {
        const correo = document.getElementById("CorreoElectronico").value;
        const contraseña = document.getElementById("Contraseña").value;
        console.log(correo, contraseña);
        signInWithEmailAndPassword(auth, correo, contraseña).then((usuario) => {
            dispatch(iniciarSesionModal(usuario));
        }).catch(() => {
            setError(true);
        })
    }

    
    return(
        activado && (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <button onClick={() => dispatch(desactivar({name:'activado'}))}> X </button>
                    <h1 className={styles.titulo}>Iniciar Sesión</h1>
                </div>
                {!email ?
                    <form action="#">
                        <input 
                            id="CorreoElectronico"
                            type="email" 
                            placeholder='Correo Electrónico'
                            required
                        />
                        <input 
                            id="Contraseña"
                            type="password" 
                            placeholder='Contraseña'
                            required
                        />
                        {error ? <p className={styles.mensajeError}>El correo o la contraseña son erroneas.</p> : null}
                        <span onClick={() => dispatch(activar({name:'recuContraseña'}))} className={styles.contra}> ¿Olvidaste tu contraseña?</span>
                        
                        <div className={styles.footer}>
                            <button className={styles.botonInicioSesion} onClick={iniciarSesiones}>Iniciar Sesión</button>
                        </div>
                        <div className={styles.member}>
                            No tienes cuenta? <span onClick={() => dispatch(activar({name:'registro'}))} className={styles.crear}> 
                            Create una!!</span>     
                        </div>
                    </form>
                :
                
                <Link className={styles.botonInicio} to='/InicioSesion'>
                    <button className={styles.botonInicio} onClick={iniciarSesiones}>Continuar</button>
                </Link>
                }

                </div>

            {recuContraseña && <RecuperarContrasena/>}
            {mostrarRegistro && <CrearCuenta/>}
        </div>
        )
    )
}

export default IniciarSesion