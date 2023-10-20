import React, { useEffect } from 'react';
import MenuSesion from '../../components/Menu/menuSesion';
import styles from './perfilUsuario.module.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { modificarPerfil, modificarFotoLapiz } from "../../store/actions/imageSlice"; 

function PerfilUsuario(){
    const dispatch = useDispatch();
    const imagenPerfil = useSelector((state) => state.imagenes.perfil);
    const fotoLapiz = useSelector((state) => state.imagenes.fotoLapiz);


    useEffect(() => {
        const imagenPerfil = '/logo-usuario.png';
        dispatch(modificarPerfil(imagenPerfil));
        const fotoLapiz = '/foto-lapiz.png';
        dispatch(modificarFotoLapiz(fotoLapiz));
      }, [dispatch]);

    return(
        <div>
            <MenuSesion/>
            <Helmet>
                <title>PERFIL USUARIO</title>
            </Helmet>
            <div className={styles.posicionesTextoFoto}>

                <div className={styles.posicionTitulo}>
                    <hi className={styles.tituloCuenta}>MI CUENTA</hi>
                    {fotoLapiz && <img
                        src={fotoLapiz} 
                        width='60'
                    />}
                </div>
                <div>
                {imagenPerfil && <img
                    src={imagenPerfil} 
                    className={styles.imagenperfil}
                    width='97'
                    />}
                </div>

            <div className={styles.divisionDeCajas}>
                <div className={styles.posicionCajasTexto}>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>NOMBRE COMPLETO</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>CORREO ELECTRÓNICO</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>DEPORTE FAVORITO</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>EDAD DEL USUARIO</h3>
                    </ul>
                </div>
                <div className={styles.posicionCajasTexto2}>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>CLUB AL QUE PERTENECE</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>NÚMERO DE TELÉFONO</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>CIUDAD</h3>
                    </ul>
                    <ul>
                        <Link className={styles.textoCerrarSesion} to = "/">
                            <h3>CERRAR SESIÓN</h3>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    </div>



    )
}

export default PerfilUsuario;