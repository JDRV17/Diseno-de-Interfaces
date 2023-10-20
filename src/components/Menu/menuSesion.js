import React, { useEffect } from 'react';
import styles from "./menuSesion.module.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { modificarPerfil, modificarLogoFutbol } from "../../store/actions/imageSlice"; 

function MenuSesion() {
    const dispatch = useDispatch();
    const imagenPerfil = useSelector((state) => state.imagenes.perfil);
    const logoFutbol = useSelector((state) => state.imagenes.logoFutbol);


    useEffect(() => {
        const imagenPerfil = '/logo-usuario.png';
        dispatch(modificarPerfil(imagenPerfil));
        const logoFutbol = '/logo-futbol.jpg';
        dispatch(modificarLogoFutbol(logoFutbol));
      }, [dispatch]);

    return (
        <div className={styles.menuGeneral}>
            <nav className={styles.menu}>
                <ul>
                    <Link to='/InicioSesion'>
                        {logoFutbol && <img
                            src={logoFutbol} 
                            width='30'
                        />}
                    </Link>
                    <li>
                        <Link className={styles.titulo}to='/InicioSesion'> GEOSPORTS</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/InicioSesion'> INICIO</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/DeportesSesion'> DEPORTES</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/LugaresSesion'> LUGARES</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/TorneoSesion'> TORNEOS</Link>
                    </li>
                    <li>
                        <Link className={styles.titulo}to='/noticiasSesion'> NOTICIAS</Link>
                    </li>
                    <Link to='/Perfil'>
                        {imagenPerfil && <img
                            src={imagenPerfil} 
                            className={styles.imagenperfil}
                            width='30'
                        />}
  
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default MenuSesion;