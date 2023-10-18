import styles from './Lugares.module.css'; 
import Menu from '../../components/Menu/menu';
import { useState } from "react"
import { Helmet } from 'react-helmet';



function Lugares(){
    const [textoCiudad, setTextoCiudad] = useState('');
    const [textoPais, setTextoPais] = useState('');
    
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
            <Menu/>
            <Helmet>
                <title>LUGARES</title>
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
                    
                    <div>
                        <ul>
                            <input className={styles.cajasTexto}
                                type="text"
                                value={textoCiudad}
                                onChange={textoCiudadLug}
                                placeholder="Escribe la ciudad"
                                />
                            <input className={styles.cajasTexto}
                                type="text"
                                value={textoPais}
                                onChange={textoPaisLug}
                                placeholder="Escribe el país"
                                />
                            <button className={styles.botonBuscar} onClick={botonBuscar}>Buscar</button>
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