import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import {getEmploye, login} from "./../UserFunctions"
import Login from "./../Login"
// import { Link, withRouter } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom'
// import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import axios from 'axios';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
         totCongAvalider: 0,
    }
  this.handleLogout= this.handleLogout.bind(this);
  }
  componentDidUpdate (){
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
// componentDidMount (){
//   const totConAvalider =0;
//   axios
//     .get(`http://127.0.0.1:8000/api/conge/listeconge`)
//     .then(res => {
//           // const data = res.data.conges;
//           // console.log("Adata:",res.data.conges)       
//           const totCongAvalider = res.data.conges.filter(p => p.val ==null ).length;
//           console.log("toal cong a valid",totCongAvalider);
//           this.setState({totCongAvalider})
//         });
 
//     // alert(totConAvalider)
// }

  
  handleLogout(e) {
    e.preventDefault()
    console.log('logout')
    localStorage.setItem('userToken',"")
    localStorage.setItem('avatar',"")
    this.props.data.history.push(`/login`)
  }
    render() {
      const header0=  <NavLink className="dropdown-item" onClick={this.handleLogout.bind(this)} >Logout</NavLink>
      const header1=  <NavLink className="dropdown-item" onClick={this.handleLogout.bind(this)} >login</NavLink>

      console.log("data issam",this.props.data)
        return (

<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
  </ul>
  {/* Right navbar links */}

 
  <ul className="navbar-nav ml-auto">
    {/* Messages Dropdown Menu */}
    {/* Notifications Dropdown Menu */}
   
 
    {/* <a href="#" class="nav-link">Logout</a> */}
    {localStorage.userToken?  header0 : header1}
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-bell" />
        <span className="badge badge-warning navbar-badge">{this.state.totCongAvalider}</span>
      </a>
      
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        
        {/* <span className="dropdown-item dropdown-header">{this.state.totCongAvalider} Notifications</span> */}
        {/* <div className="dropdown-divider" /> */}
        {/* <div className="dropdown-divider" /> */}
        <a href="#" className="dropdown-item">
          <i className="fas fa-users mr-2" /> {this.state.totCongAvalider} Congés à traiter
        </a>
        {/* <div className="dropdown-divider" /> */}
        
      </div>
    </li>
  </ul>
</nav>


        )
    }
}
