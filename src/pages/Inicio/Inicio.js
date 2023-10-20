import React, { useEffect } from 'react';
import styles from './Inicio.module.css' 
import { Helmet } from 'react-helmet';
import Menu from '../../components/Menu/menu';
import { styled } from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { activar, desactivar } from "../../store/actions/botonSlice";
import { modificarLogo } from "../../store/actions/imageSlice"; 

function Inicio() {
  const { mostrarTutorial } = useSelector((state) => state.activador);
  const dispatch = useDispatch();
  const imagenLogo = useSelector((state) => state.imagenes.imagenLogo);

  useEffect(() => {
    const imagenLogo = '/logoGeosport.jpg';
    dispatch(modificarLogo(imagenLogo));
  }, [dispatch]);

  return (
    <div>
      <Menu/>
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

          <ButtonContainer>
            <button className={styles.botonTutorial} onClick={() => dispatch(activar({name:'mostrarTutorial'}))}>TUTORIAL</button>
          </ButtonContainer>

        </div>

        <div className={styles.posicionLogo}>
          {imagenLogo && <img
            src={imagenLogo} 
            alt="Foto Logo"
            className={styles.fotoLogo}
            width={450}
            height={450}
          />}
        </div>

        {mostrarTutorial && 
          <div className={styles.video}>
      
            <div>
              <video controls width="850" height="450">
                <source src="Video-Pagina-Web.mp4" type="video/mp4" />
              </video>
            
            <div className={styles.posicionBoton}>
              <button className={styles.botonCierre} onClick={() => dispatch(desactivar({name:'mostrarTutorial'}))}>Cerrar</button>
            </div>
            
          </div>
        </div>}

      </div>
    </div>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  margin-right: 30px;
  margin-top: 20px
`;

export default Inicio;
