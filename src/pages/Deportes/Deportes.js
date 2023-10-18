import styles from './Deportes.module.css' 
import Menu from '../../components/Menu/menu';
import { Helmet } from 'react-helmet';

function Deportes(){
    return(
        <div className={styles.Deportes}>
            <Menu/>
            <Helmet>
                <title>DEPORTES</title>
            </Helmet>
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

export default Deportes;