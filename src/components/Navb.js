import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import Ajoutconges from '../Ajoutconges'
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {getEmploye} from "../UserFunctions"

class Navb extends Component {
  constructor(props) {
    super(props);

  }

render() {

  return (
      <h1>nav</h1>
  )
}
}


export default Navb;