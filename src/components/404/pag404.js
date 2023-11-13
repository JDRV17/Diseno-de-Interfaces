import React from 'react';
import styles from './pag404.module.css';


const pag404 = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
}

export default pag404;
