import React, {Component} from 'react';
import './Home.css';
import Img from '../../archivitos/logo de pestaña.png'

class Home extends Component{
  render() {
    return(
      <div className="slide flex">
        <div className= "espaciochiquito">
          <h1>Bienvenido a la mejor app de ligas locales </h1>
            <p> Consulta los partidos y el estado de tus equipos y jugadores favoritos</p>
              <div className= "imagencentral">
              <img className="pre" src={Img}/>
              </div>
          </div>
        </div>


  );
  }
}

export default Home;
