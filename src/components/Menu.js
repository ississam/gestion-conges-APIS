import React, { Component, } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import Ajoutconges from '../Ajoutconges'
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {getEmploye} from "./../UserFunctions"

export default class Menu extends Component {
  constructor(props) {
    super(props);
  this.handleLogout= this.handleLogout.bind(this);
  }
  state={
    liste:[],
    users:[],
    pho:'',
    totCongAvalider:0,
    updated:true
  }
  componentDidUpdate (prevProps, prevState){
    if (prevState.pokemons !== this.state.pokemons) {
    const totConAvalider =0;
    axios
      .get(`http://127.0.0.1:8000/api/conge/listeconge`)
      .then(res => {
            // const data = res.data.conges;
            // console.log("Adata:",res.data.conges)       
            const totCongAvalider = res.data.conges.filter(p => p.val ==null ).length;
            console.log("toal cong a valid",totCongAvalider);
            this.setState({totCongAvalider})
          });
        }
}
  componentDidMount() {

    getEmploye().then((res)=>{
     
      console.log("reees",res)
  
    })
    

  }
    handleLogout(e) {
      e.preventDefault()
      console.log('logout')
      localStorage.setItem('userToken',"")
      localStorage.setItem('avatar',"")
      
      this.props.history.push(`/login`)
    }
  

    render() {
      const sidebar0= <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="#" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light"><h4>EASY LEAVE <h6> V1.1</h6> </h4></span>
    </a>
    
    <div className="sidebar">
     
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
       <div className="image">
         <img src={'/'+'photo_projet'+ '/'+localStorage.avatar} className="img-circle elevation-2" alt="User Image" />
       </div>
       <div className="info">
         <a href="#" className="d-block">{localStorage.nomprenom}</a>
       </div>
     </div>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
  
          <li className="nav-item has-treeview menu-open">
             <Nav className="nav-link">
             <i className="nav-icon fas fa-users" />
             <p>
            Employés
              <i className="right fas fa-angle-left" />    </p>   
  </Nav>    
            <ul className="nav nav-treeview">
            {/* <li className="nav-item">
                <Link to="/accueil" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>home</p>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/employes" className="nav-link">
                  <i className="fas fa-list" />
                  <p>Liste</p>
                </Link>
              </li>
  
              <li className="nav-item">
              <Link to="/nouveauperso" className="nav-link "> 
                  <i class="fas fa-user-plus" />
                  <p>Nouveau</p>
               </Link>
              </li>
            </ul>
          </li>
             <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                Congés
                <i className="fas fa-angle-left right" />
                {/* <span className="badge badge-info right">6</span> */}
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/valider" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>A valider</p>
                  <span class="badge badge-success right">{this.state.totCongAvalider}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/listeconges" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Liste des congés</p>
                </Link>
              </li>
            </ul>
          <li className="nav-item">
            <Link to="/statistiques" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Statistiques
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nouveauconges" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Ajout congé
              </p>
            </Link>
          </li>
          </li>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Level 2</p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>
                  Level 2
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Level 2</p>
              </a>
            </li>
          </ul>
        </ul>
      </nav>
  
    </div>
   
  </aside>
   const  sidebar1 = <aside className="main-sidebar sidebar-dark-primary elevation-4">
   <a href="index3.html" className="brand-link">
     <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
     <span className="brand-text font-weight-light"><h4>EASY LEAVE <h6> V1.1</h6> </h4></span>
   </a>
   
   <div className="sidebar">
    
     <div className="user-panel mt-3 pb-3 mb-3 d-flex">
       <div className="image">
         <img src={'/'+'photo_projet'+ '/'+localStorage.avatar} className="img-circle elevation-2" alt="User Image" />
       </div>
       <div className="info">
         <a href="#" className="d-block">{localStorage.nomprenom}</a>
       </div>
     </div>
 
     <nav className="mt-2">
       <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
 
         <li className="nav-item has-treeview menu-open">
           
           <ul className="nav nav-treeview">
           <li className="nav-item">
               <Link to="/accueil" className="nav-link">
                 <i className="far fa-circle nav-icon" />
                 <p>home</p>
               </Link>
             </li>
      
 
           </ul>
         </li>
           
           
         <li className="nav-item">
           <Link to="/nouveauconges" className="nav-link">
             <i className="nav-icon far fa-image" />
             <p>
               Ajout congé
             </p>
           </Link>
         </li>
       
         <ul className="nav nav-treeview">
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon" />
               <p>Level 2</p>
             </a>
           </li>
           <li className="nav-item has-treeview">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon" />
               <p>
                 Level 2
                 <i className="right fas fa-angle-left" />
               </p>
             </a>
             <ul className="nav nav-treeview">
               <li className="nav-item">
                 <a href="#" className="nav-link">
                   <i className="far fa-dot-circle nav-icon" />
                   <p>Level 3</p>
                 </a>
               </li>
               <li className="nav-item">
                 <a href="#" className="nav-link">
                   <i className="far fa-dot-circle nav-icon" />
                   <p>Level 3</p>
                 </a>
               </li>
               <li className="nav-item">
                 <a href="#" className="nav-link">
                   <i className="far fa-dot-circle nav-icon" />
                   <p>Level 3</p>
                 </a>
               </li>
             </ul>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon" />
               <p>Level 2</p>
             </a>
           </li>
         </ul>
       </ul>
     </nav>
 
   </div>
  
 </aside>

        return (
         <>
          {localStorage.etat==1?  sidebar0 : sidebar1}
         </>
        )
    }
}
