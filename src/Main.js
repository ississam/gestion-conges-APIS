import React, { Component } from 'react';
import Employes from './Employes';
import Statistiques from './Statistiques';
import Validation from './validation';
import Modifperson from './Modifperson'
import Liste from './Liste';
import Ajoutconges from './Ajoutconges';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import Ajoutpersonne from './Ajoutpersonne';
 import Home from './Home';
 import Stuff from './Stuff';
 import Contact from './Contact';

class Main extends Component {
  render() {
    return (
<BrowserRouter>
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light header" >
        <div className="navbar-brand" >Gestion de congés ssssssssssssssssss</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Employés
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/nouveauperso" className="dropdown-item">Ajouter</NavLink>
                <NavLink to="/employes"className="dropdown-item" >Liste</NavLink>
                  </div>
                  
            </li>
                       <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Demandes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/valider" className="dropdown-item"> A valider</NavLink>
                <NavLink to="/liste"className="dropdown-item" >Liste</NavLink>
                  </div>
                  
            </li>
            <li className="nav-item">
              <NavLink to="/statistiques" className="nav-link" >Statistiques</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nouveauconges" className="nav-link" >Demande de congés</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/modifperson" className="nav-link" >modifper</NavLink>
            </li> */}
          
            
          </ul>
        
        </div>
        
      </nav>
      <div className="content">           
          </div>
          </div>
      </BrowserRouter>
        // <BrowserRouter>
        // <div>
               
        //   <h1>Simple SPA</h1>
        //   <ul className="header">
        //     <li><NavLink exact to="/"> Home</NavLink></li>
        //     <li><NavLink to="/stuff">Stuff</NavLink></li>
        //     <li><NavLink to="/contact">Contact</NavLink></li>
        //   </ul>
        //   <div className="content">
        //     <Route exact path="/" component={Home}/>
        //     <Route path="/stuff" component={Stuff}/>
        //     <Route path="/contact" component={Contact}/>
        //   </div>
        // </div>
        // </HashRouter>
    );
  }
}
 
export default Main;