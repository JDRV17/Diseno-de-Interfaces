import React, { useEffect } from 'react';
import styles from './newsSesion.module.css'
import { Link } from "react-router-dom";
import MenuSesion from '../../components/Menu/menuSesion';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { modificarImagen1, modificarImagen2, 
    modificarImagen3, modificarNoticias} from "../../store/actions/imageSlice"; 
import { useDispatch, useSelector } from "react-redux";

function NoticiasSesionII(){
    const [select,setSelect] = useState();
    const noticias = useSelector((state) => state.imagenes.noticias);
    const imagen1 = useSelector((state) => state.imagenes.imagen1);
    const imagen2 = useSelector((state) => state.imagenes.imagen2);
    const imagen3 = useSelector((state) => state.imagenes.imagen3);
    const dispatch = useDispatch();

    useEffect(() => {
        const noticias = "/logo noticias.png";
        dispatch(modificarNoticias(noticias));
        const imagen1 = "/imagen1.png";
        dispatch(modificarImagen1(imagen1));
        const imagen2 = "/imagen2.png";
        dispatch(modificarImagen2(imagen2));
        const imagen3 = "/imagen3.png";
        dispatch(modificarImagen3(imagen3));
    }, [dispatch]);

    return (
        <div>
            <MenuSesion/>
            <Helmet>
                <title>NOTICIAS SESION</title>
            </Helmet>
            <div className = {styles.titulos}>
                <select className={styles.selectNoticia} value={select} onChange={e=>setSelect(e.target.value)}>
                    <option>MOSTRAR TODO</option>
                    <option> Lo mejor de la semana</option>
                    <option> Lo mejor del mes</option>
                    <option> Eventos de la semana</option>
                    <option> Anuncios</option>
                </select>
            </div>
            <section className = {styles.titulos} >
                <div className = {styles.noticiasI}>
                    {noticias && <img 
                        src={noticias} 
                        alt="Logo noticias" 
                        className={styles.imagen}/>}
                    <h1>
                        NOTICIA 7
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    {noticias && <img 
                        src={noticias} 
                        alt="Logo noticias" 
                        className={styles.imagen}/>}
                    <h1>
                        NOTICIA 8
                    </h1>
                </div>
            </section>
            <section className = {styles.titulos} >
                <div className = {styles.noticiasI}>
                    {noticias && <img 
                        src={noticias} 
                        alt="Logo noticias" 
                        className={styles.imagen}/>}
                    <h1>
                        NOTICIA 9
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    {noticias && <img 
                        src={noticias} 
                        alt="Logo noticias" 
                        className={styles.imagen}/>}
                    <h1>
                        NOTICIA 10
                    </h1>
                </div>
            </section>
            <section className = {styles.titulos} >
                <div className = {styles.noticiasI}>
                    {noticias && <img 
                        src={noticias} 
                        alt="Logo noticias" 
                        className={styles.imagen}/>}
                    <h1>
                        NOTICIA 11
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    {noticias && <img 
                        src={noticias} 
                        alt="Logo noticias" 
                        className={styles.imagen}/>}
                    <h1>
                        NOTICIA 12
                    </h1>
                </div>
            </section>
            <footer className = {styles.secciones}>
                <Link to = "/noticiasSesion">
                    {imagen1 && <img 
                        src={imagen1} 
                        alt="Logo seccion1"
                        height = "40"/>}
                 </Link>
                 <Link to = "/noticias2Sesion">
                    {imagen2 && <img 
                        src={imagen2} 
                        alt="Logo seccion2"
                        height = "37"/>}
                 </Link>

                <Link to = "/noticias3Sesion">
                    {imagen3 && <img 
                        src={imagen3} 
                        alt="Logo seccion3"
                        height = "40"/>}
                 </Link>
            </footer>
        </div>
    );
}

export default NoticiasSesionII;