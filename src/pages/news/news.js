import styles from './news.module.css';
import { Link } from "react-router-dom";
import Menu from '../../components/Menu/menu';
import { Helmet } from 'react-helmet';


function Noticias(){
    return (
        <div>
            <Menu/>
            <Helmet>
                <title>NOTICIAS</title>
            </Helmet>
            <div className = {styles.titulos}>
                <h6 className={styles.cajitaC}> MOSTRAR TODO </h6>

            </div>
            <section className = {styles.titulos} >
                <div className = {styles.noticiasI}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 1
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 2
                    </h1>
                </div>
            </section>
            <section className = {styles.titulos} >
                <div className = {styles.noticiasI}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 3
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 4
                    </h1>
                </div>
            </section>
            <section className = {styles.titulos} >
                <div className = {styles.noticiasI}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 5
                    </h1>
                </div>
                <div className = {styles.noticiasD}>
                    <img src={require("../../components/imagenes/logo noticias.png")} alt="Logo noticias" className={styles.imagen}/>
                    <h1>
                        NOTICIA 6
                    </h1>
                </div>
            </section>
            <footer className = {styles.secciones}>
                <Link to = "/noticias"  >
                    <img 
                        src={require("../../components/imagenes/imagen1.png")} 
                        alt="Logo pagina 1" height = "40"/>
                 </Link>
                 <Link to = "/noticias2">
                    <img 
                        src={require("../../components/imagenes/imagen2.png")} 
                        alt="Logo pagina 2" height = "37"/>
                 </Link>

                <Link to = "/noticias3">
                    <img 
                        src={require("../../components/imagenes/imagen3.png")} 
                        alt="Logo pagina 2" height = "40"/>
                 </Link>
            </footer>
        </div>
    );
}

export default Noticias;