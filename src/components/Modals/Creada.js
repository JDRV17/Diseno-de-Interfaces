import React from 'react'
import { styled } from "styled-components"
import styles from './Creada.module.css';
import checkMark from './Check.png';

function Modal() {
    const botonInicio = () => {
        alert('¡Bienvenido al club!');
      };
    return(
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <button> X </button>
                    <h1>¡Cuenta creada exitosamente!</h1>
                </div>
                <div className={styles.body}>
                    <p>Tu cuenta fue creada exitosamente, ya puedes disfrutar de la página y volver a la página principal</p>
                    <img src= {checkMark}></img>
                </div>
                <div className={styles.footer}>
                    <ButtonContainer>
                        <Button onClick={botonInicio}>REGRESAR</Button>
                    </ButtonContainer>
                </div>
            </div>
        </div>
    )
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

export default Modal