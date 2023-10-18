import React from 'react'
import styles from './RecuperarContrasena.module.css';
import { useDispatch, useSelector } from "react-redux";
import { desactivar } from "../../store/actions/botonSlice";

function Modal() {
    const { recuContraseña } = useSelector((state) => state.activador);
    const dispatch = useDispatch();


    const botonInicio = () => {
        alert('¡Se envió un correo, verificalo!');
      };
    return(
        recuContraseña && (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <button onClick={() => dispatch(desactivar({name:'recuContraseña'}))}> X </button>
                    <h1 className={styles.contra}>Recuperar Contraseña</h1>
                </div>
                <form action="#">
                    <input type="email" placeholder='Correo Electrónico'></input>
                    <input type="password" placeholder='Contraseña'></input>
                    <input type="password" placeholder='Confirmar contraseña'></input>
                </form>
                <div className={styles.footer}>
                    <button onClick={botonInicio} className={styles.botonEnviar}>ENVIAR</button>
                </div>
            </div>
        </div>
        )
    )
}

export default Modal