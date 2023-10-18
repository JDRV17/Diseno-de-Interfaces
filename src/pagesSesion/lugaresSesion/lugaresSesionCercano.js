import styles from './lugaresSesionCercano.module.css';
import MenuSesion from '../../components/Menu/menuSesion';
import { useState } from "react"
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// SECCIÓN DE MÁS CERCANOS
function LugaresSesionCercanos(){
    const [textoCiudad, setTextoCiudad] = useState('');
    const [textoPais, setTextoPais] = useState('');
    const [textoDireccion, setTextoDireccion] = useState('');

    const textoDirecciones = (event) => {
        setTextoDireccion(event.target.value); 
    };
    const textoCiudadLug = (event) => {
        setTextoCiudad(event.target.value); 
    };
    
    const textoPaisLug = (event) => {
        setTextoPais(event.target.value)
    };
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
                                value={textoCiudad}
                                onChange={textoCiudadLug}
                                placeholder="Escribe la ciudad"
                                />
                        </div>
                        <div>
                            <input className={styles.cajasTexto}
                                type="text"
                                value={textoPais}
                                onChange={textoPaisLug}
                                placeholder="Escribe el país"
                                />
                        </div>
                        <div>
                        <input className={styles.cajasTexto}
                            type="text"
                            value={textoDireccion}
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