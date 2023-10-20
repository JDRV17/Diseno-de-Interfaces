import MenuSesion from '../../components/Menu/menuSesion';
import styles from './torneosSesion.module.css'
import { Helmet } from 'react-helmet';
import { useState } from "react"
import {modificarTorneoCiudadSesion, modificarPaisTorneoSesion } from "../../store/actions/usuarioSlicePaginas"
import { useDispatch, useSelector } from "react-redux";


function TorneoSesion(){
    const usuarioPaginas =  useSelector((state) => state.usuarioPaginas);
    const [select,setSelect] = useState();
    const dispatch = useDispatch();

    const textoCiudadTor = (evento) => {
        dispatch(modificarTorneoCiudadSesion(evento.target.value));
    }
    const textoPaisTor= (evento) => {
        dispatch(modificarPaisTorneoSesion(evento.target.value));
    }
    
    return (
        <div>
            <MenuSesion/>
            <Helmet>
                <title>TORNEOS</title>
            </Helmet>
            <div className = {styles.titulos}>
                <input className={styles.cajitaC} 
                    type="text"
                    onChange={textoCiudadTor}
                    placeholder="Escribe la ciudad"/>

                <input className={styles.cajitaP}
                    type="text"
                    onChange={textoPaisTor} 
                    name="Pais" 
                    placeholder="Escribe el pais"/>
                    
                <select className={styles.selectDeporte} value={select} onChange={e=>setSelect(e.target.value)}>
                    <option>Selecciona el deporte</option>
                    <option> Futbol 11</option>
                    <option> Futbol Sala</option>
                    <option> Voleibol</option>
                    <option> Basquetbol</option>
                    <option> Tenis</option>
                </select>
            </div>
        
            <div className = {styles.titulos}>
                <h3 className={styles.izquierda}> TORNEOS DISPONIBLES </h3>
                <h3 className={styles.centro}> DIRECCION</h3>
                <h3 className={styles.derecha}> FECHA/HORA</h3>
            </div>
            <div className = {styles.cajita}>
                <p className={styles.torneo} >  TORNEO 1 </p>
                <p className={styles.direccion} > DIRECCION 1 </p>
                <p className={styles.hora}> FECHA 1 / HORA 1 </p>
            </div>
            <div className = {styles.cajita}>
                <p className={styles.torneo} >  TORNEO 2 </p>
                <p className={styles.direccion} > DIRECCION 2 </p>
                <p className={styles.hora}> FECHA 2 / HORA 2 </p>
            </div>
            <div className = {styles.cajita}>
                <p className={styles.torneo} >  TORNEO 3 </p>
                <p className={styles.direccion} > DIRECCION 3 </p>
                <p className={styles.hora}> FECHA 3 / HORA 3 </p>
            </div>
            <div className = {styles.cajita}>
                <p className={styles.torneo} >  TORNEO 4 </p>
                <p className={styles.direccion} > DIRECCION 4 </p>
                <p className={styles.hora}> FECHA 4 / HORA 4 </p>
            </div>
            <div className = {styles.cajita}>
                <p className={styles.torneo} >  TORNEO 5 </p>
                <p className={styles.direccion} > DIRECCION 5 </p>
                <p className={styles.hora}> FECHA 5 / HORA 5 </p>
            </div>
        </div>
    );


}

export default TorneoSesion;