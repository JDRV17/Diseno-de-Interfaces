import React, { useEffect } from 'react';
import styles from './lugaresSesionDeportes.module.css'
import MenuSesion from '../../components/Menu/menuSesion';
import { useState } from "react"
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {modificarCiudadSesion, modificarPaisSesion,
    modificarDireccionSesion } from "../../store/actions/usuarioSlicePaginas"
import { useDispatch, useSelector } from "react-redux";
import {mensajeExitoso, limpiarMensaje} from "../../store/actions/successSlice";


// SECCIÓN DE DEPORTES
function LugaresSesionDeportes(){
    const [select,setSelect] = useState();
    const usuarioPaginas =  useSelector((state) => state.usuarioPaginas);
    const mensajeSuccess = useSelector((state) => state.success.mensaje);
    const dispatch = useDispatch();

    useEffect(() => {
        if (mensajeSuccess) {
            const timer = setTimeout(() => {
                dispatch(limpiarMensaje());
            }, 3000);
            return () => clearTimeout(timer);
        }
      }, [mensajeSuccess, dispatch]);
    
    const mostrarMensaje = () => {
    dispatch(mensajeExitoso('¡Realizaste la busqueda!'));
    };

    const textoCiudadLug= (evento) => {
        dispatch(modificarCiudadSesion(evento.target.value));
    }
    const textoPaisLug= (evento) => {
        dispatch(modificarPaisSesion(evento.target.value));
    }
    const textoDirecciones= (evento) => {
        dispatch(modificarDireccionSesion(evento.target.value));
    }
    return(
        <div>
            <MenuSesion/>
            <Helmet>
                <title>LUGARES SESION</title>
            </Helmet>
            <div className={styles.posicionFotoTexto}>
                <div className={styles.posicionFoto}>
                    <img 
                        className={styles.fotoLugares}
                        src= '/foto-lugares.jpg'
                        alt='Foto de lugares'
                    ></img>
                </div>
                
                <div className={styles.informacionLugares}>
                    
                    <div className={styles.posicionesCajasTexto}>
                        <div>
                            <input className={styles.cajasTexto}
                                type="text"
                                onChange={textoCiudadLug}
                                placeholder="Escribe la ciudad"
                                />
                        </div>
                        <div>
                            <input className={styles.cajasTexto}
                                type="text"
                                onChange={textoPaisLug}
                                placeholder="Escribe el país"
                                />
                        </div>
                        <div>
                        <input className={styles.cajasTexto}
                            type="text"
                            onChange={textoDirecciones}
                            placeholder="Escribe la dirección"
                            />
                        </div>
                        <button className={styles.botonBuscar} onClick={mostrarMensaje}>Buscar</button>
                    </div>
                    {mensajeSuccess && <p className={styles.mensajeExitoso}>{mensajeSuccess}</p>}

                    <div className={styles.posicionTitulo}>
                        <h1 className={styles.titulo}>Lugares Disponibles</h1>
                    </div>

                    <div className={styles.posicionesTextos}>
                        <div>
                            <Link className={styles.textoTodos} to='/LugaresSesion'>
                                <p>TODOS</p>
                            </Link>
                        </div>
                        <div className={styles.posicionCercanos}>
                            <Link className={styles.textoCercanos} to='/LugaresSesionCercano'>
                                <p>CERCANOS</p>
                            </Link>
                        </div>
                        <div>
                            <Link className={styles.textoDeportes} to='/LugaresSesionDeportes'>
                                <p>DEPORTES</p>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <select className={styles.selectDeporte} value={select} onChange={e=>setSelect(e.target.value)}>
                            <option>Selecciona el deporte</option>
                            <option> Futbol 11</option>
                            <option> Futbol Sala</option>
                            <option> Voleibol</option>
                            <option> Basquetbol</option>
                            <option> Tenis</option>
                        </select>
                    </div>

                    <div className={styles.cajasLugares}>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 1 (DIRECCIÓN)(DEPORTE ESPECÍFICO)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 2 (DIRECCIÓN)(DEPORTE ESPECÍFICO)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 3 (DIRECCIÓN)(DEPORTE ESPECÍFICO)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 4 (DIRECCIÓN)(DEPORTE ESPECÍFICO)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar 5 (DIRECCIÓN)(DEPORTE ESPECÍFICO)</p>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default LugaresSesionDeportes;