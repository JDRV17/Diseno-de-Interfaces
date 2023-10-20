import React, { useEffect } from 'react';
import styles from './Lugares.module.css'; 
import Menu from '../../components/Menu/menu';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import {modificarCiudad, modificarPais} from "../../store/actions/usuarioSlicePaginas"
import {mensajeExitoso, limpiarMensaje} from "../../store/actions/successSlice";
import { modificarLugares } from "../../store/actions/imageSlice"; 


function Lugares(){
    const usuarioPaginas =  useSelector((state) => state.usuarioPaginas);
    const mensajeSuccess = useSelector((state) => state.success.mensaje);
    const imagenGPS = useSelector((state) => state.imagenes.imagenGPS);
    const dispatch = useDispatch();

    useEffect(() => {
        if (mensajeSuccess) {
            const timer = setTimeout(() => {
                dispatch(limpiarMensaje());
            }, 3000);
            return () => clearTimeout(timer);
        }
      }, [mensajeSuccess, dispatch]);

    useEffect(() => {
    const imagenGPS = '/foto-lugares.jpg';
    dispatch(modificarLugares(imagenGPS));
    }, [dispatch]);
    
    const mostrarMensaje = () => {
    dispatch(mensajeExitoso('¡Realizaste la busqueda!'));
    };
    const textoCiudadLug= (evento) => {
        dispatch(modificarCiudad(evento.target.value));
    }
    const textoPaisLug= (evento) => {
        dispatch(modificarPais(evento.target.value));
    }

    return(
        <div>
            <Menu/>
            <Helmet>
                <title>LUGARES</title>
            </Helmet>
            <div className={styles.posicionFotoTexto}>
                <div className={styles.posicionFoto}>
                    {imagenGPS && <img 
                        className={styles.fotoLugares}
                        src= {imagenGPS}
                        alt='Foto de lugares'
                    ></img>}
                </div>
                
                <div className={styles.informacionLugares}>
                    
                    <div>
                        <ul>
                            <input className={styles.cajasTexto}
                                type="text"
                                onChange={textoCiudadLug}
                                placeholder="Escribe la ciudad"
                                />
                            <input className={styles.cajasTexto}
                                type="text"
                                onChange={textoPaisLug}
                                placeholder="Escribe el país"
                                />
                            <button className={styles.botonBuscar} onClick={mostrarMensaje}>Buscar</button>
                            {mensajeSuccess && <p className={styles.mensajeExitoso}>{mensajeSuccess}</p>}
                        </ul>
                    </div>

                    <div className={styles.posicionTitulo}>
                        <h1 className={styles.titulo}>Lugares Disponibles</h1>
                        <p className={styles.textoTodos}>TODOS</p>
                    </div>

                    <div className={styles.cajasLugares}>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 1 (Deporte)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 2 (Deporte)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 3 (Deporte)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 4 (Deporte)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 5 (Deporte)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 6 (Deporte)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 7 (Deporte)</p>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Lugares;