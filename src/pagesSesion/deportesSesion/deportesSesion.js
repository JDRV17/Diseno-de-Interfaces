import MenuSesion from '../../components/Menu/menuSesion';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from './deportesSesion.module.css'

function DeportesSesion(){
    const [select,setSelect] = useState();

    return(
        <div className={styles.Deportes}>
            <MenuSesion/>
            <Helmet>
                <title>DEPORTES SESION</title>
            </Helmet>
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
            

            <nav className={styles.DeportesH1}>
                <ul>
                    <h1 className={styles.titulo}>DEPORTES DISPONIBLES</h1>
                    <h1 className={styles.titulo}>NÚMERO DE INTEGRANTES DISPONIBLES</h1>
                </ul>
            </nav>

            <nav className={styles.futbol11}>
                <ul>
                    <h1>FUTBOL 11</h1>
                    <h1>109</h1>
                </ul>
            </nav>

            <nav className={styles.tenis}>
                <ul>
                    <h1>TENIS</h1>
                    <h1>85</h1>
                </ul>
            </nav>

            <nav className={styles.basquet}>
                <ul>
                    <h1>BASQUETBOL</h1>
                    <h1>82</h1>
                </ul>
            </nav>

            <nav className={styles.basquet}>
                <ul>
                    <h1>FUTBOL SALA</h1>
                    <h1>67</h1>
                </ul>
            </nav>

            <nav className={styles.voleibol}>
                <ul>
                    <h1>VOLEIBOL</h1>
                    <h1>40</h1>
                </ul>
            </nav>
            
        </div>
    )
}

export default DeportesSesion;