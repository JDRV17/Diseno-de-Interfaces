import React from 'react'
import { styled } from "styled-components"
import styles from './Clubes.module.css';
import { useState } from "react";


function Clubes() {
    const [botonX, setBotonX] = useState(true);

    const cerrarX = () => {
        setBotonX(false);
      };

    const botonInicio = () => {
        alert('¡Bienvenido al club!');
      };
    return (
    botonX && (
        <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
            <div className={styles.title}>
            <button onClick={cerrarX}>X</button>
            <h1>¡Únete a nuestro club!</h1>
            </div>
            <div className={styles.body}>
            <p>Responde estas preguntas para saber un poco más sobre ti y así darte un perfil</p>
            <label htmlFor="deporte">Deporte Favorito</label>
            <input></input>
            <label htmlFor="direccion">Dirección</label>
            <input></input>
            <label htmlFor="ciudad">Ciudad</label>
            <input></input>
            <label htmlFor="pais">País</label>
            <input></input>
            <label htmlFor="edad">Edad</label>
            <input></input>
            </div>
            <div className={styles.footer}>
            <ButtonContainer>
                <Button onClick={botonInicio}>UNIRSE</Button>
            </ButtonContainer>
            </div>
        </div>
        </div>
    )
    );
}

const Button = styled.button `
    color: black;
    background-color: #29BD3C; 
    border-radius: 10%;
    cursor: pointer;
    font-weight: bold;

`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 30px;
`;

export default Clubes