import React from 'react';
import styles from './inicioSesion.module.css' 
import { Helmet } from 'react-helmet';
import MenuSesion from "../../components/Menu/menuSesion";


function InicioSesion() {
  return (
    <div>
      <MenuSesion/>
      <Helmet>
        <title>GEOSPORTS</title>
      </Helmet>
      <div className={styles.posicionTextoLogo}>
        <div className={styles.divIzqu}>

          <div>
            <h1 className={styles.tituloAlcance}>A Tu Alcance</h1>
            <h1 className={styles.tituloGeo}>GEOSPORTS</h1>
          </div>

          <div>
            <p className={styles.textoPag}>Geosports es una plataforma en línea dedicada a brindar 
            a los entusiastas del deporte y a los atletas aficionados una experiencia completa y enriquecedora relacionada 
            con su pasión por el deporte. Nuestra plataforma ofrece una serie de ventajas y recursos que ayudan a los usuarios 
            a obtener el máximo provecho de su amor por el deporte y mantenerse informados sobre todo lo relacionado con él.</p>
            
            <p className={styles.textoPag2}>En Geosports, nuestro objetivo es ser la fuente definitiva de información 
            deportiva para los amantes del deporte. Queremos brindar a nuestros usuarios las herramientas y los recursos 
            que necesitan para disfrutar plenamente de su pasión por el deporte, ya sea como espectadores, atletas o simplemente 
            entusiastas. ¡Únete a nosotros y mantente conectado con el emocionante mundo del deporte!</p>
          </div>

        </div>

        <div className={styles.posicionLogo}>
            <img 
                className={styles.fotoLogo}
                src= '/logoGeosport.jpg'
                alt='Foto Logo'
                width={450}
                height={450}
            ></img>
        </div>
  

      </div>
    </div>
  );
}

export default InicioSesion;