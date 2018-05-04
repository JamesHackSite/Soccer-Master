import React, {Component} from 'react';
import './Home.css';
import Login from '../login/LoginDisplay.js';
import Img from '../../archivitos/logo de pestaña.png'

class Home extends Component{
  render() {
    return(
      <div className="slide">

        <Login/>

        </div>


  );
  }
}

export default Home;
