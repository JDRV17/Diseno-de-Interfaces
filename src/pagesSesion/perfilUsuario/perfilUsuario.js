import MenuSesion from '../../components/Menu/menuSesion';
import styles from './perfilUsuario.module.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


function PerfilUsuario(){
    
    return(
        <div>
            <MenuSesion/>
            <Helmet>
                <title>PERFIL USUARIO/title</title>
            </Helmet>
            <div className={styles.posicionesTextoFoto}>

                <div className={styles.posicionTitulo}>
                    <hi className={styles.tituloCuenta}>MI CUENTA</hi>
                    <img src= '/foto-lapiz.png' width='60'></img>
                </div>
                <div>
                    <img className={styles.imagenperfil} src= '/logo-usuario.png' width='97'></img>   
                </div>

            <div className={styles.divisionDeCajas}>
                <div className={styles.posicionCajasTexto}>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>NOMBRE COMPLETO</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>CORREO ELECTRÓNICO</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>DEPORTE FAVORITO</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>EDAD DEL USUARIO</h3>
                    </ul>
                </div>

                <div className={styles.posicionCajasTexto2}>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>CLUB AL QUE PERTENECE</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>NÚMERO DE TELÉFONO</h3>
                    </ul>
                    <ul>
                        <h3 className={styles.textoCajasLugares}>CIUDAD</h3>
                    </ul>
                    <ul>
                        <Link className={styles.textoCerrarSesion} to = "/">
                            <h3>CERRAR SESIÓN</h3>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    </div>



    )
}

export default PerfilUsuario;