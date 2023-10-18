import styles from './newsSesion.module.css'
import { Link } from "react-router-dom";
import MenuSesion from '../../components/Menu/menuSesion';
import { Helmet } from 'react-helmet';
import { useState } from 'react';


function NoticiasIISesion(){
    const [select,setSelect] = useState();

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
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 7
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 8
                    </h1>
                </div>
            </section>
            <section className = {styles.titulos} >
                <div className = {styles.noticiasI}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 9
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 10
                    </h1>
                </div>
            </section>
            <section className = {styles.titulos} >
                <div className = {styles.noticiasI}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 11
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 12
                    </h1>
                </div>
            </section>
            <footer className = {styles.secciones}>
                <Link to = "/noticiasSesion"  >
                    <img 
                        src={require("../../components/imagenes/imagen1.png")} 
                        alt="Logo pagina 1" height = "40"/>
                 </Link>
                 <Link to = "/noticias2Sesion">
                    <img 
                        src={require("../../components/imagenes/imagen2.png")} 
                        alt="Logo pagina 2" height = "37"/>
                 </Link>

                <Link to = "/noticias3Sesion">
                    <img 
                        src={require("../../components/imagenes/imagen3.png")} 
                        alt="Logo pagina 2" height = "40"/>
                 </Link>
            </footer>
        </div>
    );
}

export default NoticiasIISesion;