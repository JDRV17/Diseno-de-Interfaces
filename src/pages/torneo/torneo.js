import Menu from '../../components/Menu/menu';
import styles from './torneo.module.css';
import { Helmet } from 'react-helmet';



function Torneo(){
    return (
        <div>
            <Menu/>
            <Helmet>
                <title>TORNEOS</title>
            </Helmet>
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

export default Torneo;