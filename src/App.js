import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom'; //Se importan dos modulos de la libreria.
import Inicio from './pages/Inicio/Inicio';
import Deportes from './pages/Deportes/Deportes';
import Lugares from './pages/Lugares/Lugares';
import { connect } from 'react-redux';
import Noticias from './pages/news/news'
import NoticiasII from './pages/news/news2'
import NoticiasIII from './pages/news/news3'
import Torneos from './pages/torneo/torneo'
// import Modal from './components/Modal/Modal'
// import { setModal } from './store/actions/ui';
import InicioSesion from './pagesSesion/inicioSesion/inicioSesion';
import DeportesSesion from './pagesSesion/deportesSesion/deportesSesion';
import LugaresSesionTodos from './pagesSesion/lugaresSesion/lugaresSesion';
import LugaresSesionCercanos from './pagesSesion/lugaresSesion/lugaresSesionCercano';
import LugaresSesionDeportes from './pagesSesion/lugaresSesion/lugaresSesionDeportes'
import TorneoSesion from './pagesSesion/torneosSesion/torneosSesion';
import NoticiasSesion from './pagesSesion/newsSesion/newsSesion';
import NoticiasIISesion from './pagesSesion/newsSesion/newsSesion2';
import NoticiasIIISesion from './pagesSesion/newsSesion/newsSesion3';
import PerfilUsuario from './pagesSesion/perfilUsuario/perfilUsuario';


//Esto es para mandar un mensaje de hijo a padre convirtiendo la function a class
function App({setModal}){  //Se pone los props del componente(Se saca datos del Json)
  return (
    <div className='App'>
      <Routes>
        <Route exact path= "/" element={<Inicio/>}/>
        <Route exact path= "/Deportes" element={<Deportes/>}/>
        <Route exact path= "/Lugares" element={<Lugares/>}/>
        <Route exact path= "/noticias" element={<Noticias/>}/>
        <Route exact path= "/noticias2" element={<NoticiasII/>}/>
        <Route exact path= "/noticias3" element={<NoticiasIII/>}/>
        <Route exact path= "/torneo" element={<Torneos/>}/>
        <Route exact path= "/InicioSesion" element={<InicioSesion/>}/>
        <Route exact path= "/LugaresSesion" element={<LugaresSesionTodos/>}/>
        <Route exact path= "/LugaresSesionCercano" element={<LugaresSesionCercanos/>}/>
        <Route exact path= "/LugaresSesionDeportes" element={<LugaresSesionDeportes/>}/>
        <Route exact path= "/DeportesSesion" element={<DeportesSesion/>}/>
        <Route exact path= "/noticiasSesion" element={<NoticiasSesion/>}/>
        <Route exact path= "/noticias2Sesion" element={<NoticiasIISesion/>}/>
        <Route exact path= "/noticias3Sesion" element={<NoticiasIIISesion/>}/>
        <Route exact path= "/TorneoSesion" element={<TorneoSesion/>}/>
        <Route exact path= "/Perfil" element={<PerfilUsuario/>}/>
      </Routes>
      

    </div>
  );
}

// const mapStateToProps = (state) => {
//   return{
//     showModal: state.ui.showModal
//   }
// }
// export default connect(mapStateToProps)(App);

export default App;
