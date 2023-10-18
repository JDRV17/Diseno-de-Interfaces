//import React from "react";

import { useState } from "react"
import styles from'./container.module.css' 
import { styled } from "styled-components"
import { Link } from "react-router-dom"

// La funcion se esta haciendo como componente funcional
// props = {. . ., name: ""}
function Container({name,getData}){
    const [message] = useState('Bienvenido a React') //Esto es similar al this.state

    return (
        <div className={styles.Container}>
            <h1 className={styles.title}>
            </h1>
            {   showMessage ?
                <p>{message} {name} {/** Aqui se manda la clave name en App */}</p>
                :
                null
            }
             {/* <Button
                onClick={onButtonClick}>
                {/*Cambiar Mensaje}
                {/*Ocultar mensaje}
            </Button>  */}
            <Link to= "/about">
                About
            </Link>
            <Link to= "/affiliate">
                Affiliate
            </Link>
            <Link to= "/discord">
                Discord
            </Link>
            <Link to= "/fanpage">
                Fan Page
            </Link>
            <Link to= "/fbgroup">
                FB Group
            </Link>
            <Link to= "/news">
                News
            </Link>
        </div>
    )

}

// Componente estilizado




//Esta es la funcion usando clases
// class Container extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>
//                     Contenedor
//                 </h1>
//                 <p>
//                    {this.state.message} {this.props.name} {/** Aqui se manda la clave name en App */}
//                 </p>
//                 <button
//                     onClick={this.onButtonClick}>
//                     Cambiar Mensaje
//                 </button>
//             </div>
//         )
//     }

//     constructor(){
//         super();
//         this.state = {
//             message: 'Bienvenido a React',
//         }; //Esto permite mostrar los datos en la vista de la pagina
//         this.onButtonClick = this.onButtonClick.bind(this);
//     }//Esto sirve para cambiar el mensaje a la hora de oprimir el boton

//     onButtonClick(){
//         /*if (this.state.message){ //Manda la informacion desde el padre para imprimir mensaje
//             this.setState({message: "Bienvenido"});
//         }*/
//         //Este es el prop del hijo que se mandara al padre.
//         this.props.getData(10)
//     }
    
// }


export default Container