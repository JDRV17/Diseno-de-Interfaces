import React from 'react';
import styles from './menu.module.css' 
import { Link } from 'react-router-dom';
import { styled } from "styled-components"
import IniciarSesion from '../Modals/IniciarSesion';
import CrearCuenta from '../Modals/CrearCuenta';
import { useDispatch, useSelector } from "react-redux";
import { activar } from "../../store/actions/botonSlice";

function Menu() {
    const { activado } = useSelector((state) => state.activador);
    const { registro } = useSelector((state) => state.activador);
    const dispatch = useDispatch();


    return (
        <div className={styles.MenuGeneral}>
            <nav className={styles.menu}>
                <ul>
                    <Link to='/'>
                        <img src= '/logo-futbol.jpg' width='30'></img>
                    </Link>
                    <li>
                        <Link className={styles.titulo}to='/'> GEOSPORTS</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/'> INICIO</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/Deportes'> DEPORTES</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/Lugares'> LUGARES</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/torneo'> TORNEOS</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/Noticias'> NOTICIAS</Link>
                    </li>
                    <ButtonContainer>
                        <button className={styles.botonRegistro} onClick={() => dispatch(activar({name:'activado'}))} >INICIAR SESIÓN</button>
                        <button className={styles.botonRegistro} onClick={() => dispatch(activar({name:'registro'}))}>REGISTRO</button>
                    </ButtonContainer>              
                </ul>
            </nav>
            <div>
            {activado && <IniciarSesion/>}
            </div>

            <div>
            {registro && <CrearCuenta/>}
            </div>
        </div>
    );
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 30px;
`;
export default Menu;
