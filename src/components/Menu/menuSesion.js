import React from 'react';
import styles from "./menuSesion.module.css"
import { Link } from 'react-router-dom';

function MenuSesion() {
    const imagenPerfil = () => {
        alert('Tienes que iniciar sesión para ver tu perfil');
      };

    return (
        <div className={styles.menuGeneral}>
            <nav className={styles.menu}>
                <ul>
                    <Link to='/InicioSesion'>
                        <img src= '/logo-futbol.jpg' width='30'></img>
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
                        <img className={styles.imagenperfil} src= '/logo-usuario.png' width='30'></img>   
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default MenuSesion;