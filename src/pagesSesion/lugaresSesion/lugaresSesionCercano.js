import styles from './lugaresSesionCercano.module.css';
import MenuSesion from '../../components/Menu/menuSesion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {modificarCiudadSesion, modificarPaisSesion,
    modificarDireccionSesion } from "../../store/actions/usuarioSlicePaginas"
import { useDispatch, useSelector } from "react-redux";

// SECCIÓN DE CERCANOS
function LugaresSesionCercanos(){
    const usuarioPaginas =  useSelector((state) => state.usuarioPaginas);
    const dispatch = useDispatch();

    const textoCiudadLug= (evento) => {
        dispatch(modificarCiudadSesion(evento.target.value));
    }
    const textoPaisLug= (evento) => {
        dispatch(modificarPaisSesion(evento.target.value));
    }
    const textoDirecciones= (evento) => {
        dispatch(modificarDireccionSesion(evento.target.value));
    }
    const botonBuscar = () => {
        alert('Realizar búsqueda');
      };

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
                        <button className={styles.botonBuscar} onClick={botonBuscar}>Buscar</button>
                    </div>

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

                    <div className={styles.cajasLugares}>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar Cercano 1 (DIRECCIÓN)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar Cercano 2 (DIRECCIÓN)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar Cercano 3 (DIRECCIÓN)</p>
                        </ul>
                        <ul>
                            <p className={styles.textoCajasLugares}>Lugar Cercano 4 (DIRECCIÓN)</p>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default LugaresSesionCercanos;