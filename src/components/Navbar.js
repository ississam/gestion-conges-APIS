import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import Ajoutconges from '../Ajoutconges'
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {getEmploye} from "./../UserFunctions"

class Navb extends Component {
  constructor(props) {
    super(props);
  this.handleLogout= this.handleLogout.bind(this);

  }

// useEffect(() => {
// hdgdfgdfg
//   }
// }, [])
state={
  liste:[],
  users:[],
  pho:'',
}
componentDidMount() {
  // const tk=localStorage.userToken
  // console.log(localStorage)
  getEmploye().then((res)=>{
    // this.setState({
    //   users:res.data
    // })
    console.log("reees",res)
    // this.setState ({
        
    //     alert(res.photo);
    //   })
      // alert(this.pho)
  })
  //

  // axios.get(`http://127.0.0.1:8000/api/employes/phot/`, {
  //   headers: {
  //   // "Content-Type": "application/json",
  //   // "Accept": "application/json",
  //   // headers: {Authorization : `Bearer ${tk}`}
  //   headers: {Authorization : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2RkOTM1NjY5OWFlNTYxNWJjMmEzZjg4NWQ4NDMwMDk0ZjU4NmE1YjA2NzM0Mzc4ZWMxOGMzOTEwZjZiMTk0MjU1MGQwNmVjYjcyZjA3MTgiLCJpYXQiOjE1OTY3MjMzMzcsIm5iZiI6MTU5NjcyMzMzNywiZXhwIjoxNjI4MjU5MzM2LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.TLBK2_IwMnTQEW7tQtzX55N6XeB_GNabCkmvtbbge9R1DfCdK2mD5TwqsyQw44skVEIS-sUDYoB1rvJuNw7DFrVS7-rLGrSQ_ik0ntd9baT_3xngAy1vNLaly2uxv9R-FSC2VgqGnxoFdU2C8zhv60tj6VGOAzuYq-6DD88qSENzfIB-RH230J5ixk5e6ZlwbWalvvcRAlFyghOUGaZflTgEjxYdffAGxMLAlUuZ5u_kYq7NPc0dU4wb_J1hSGAc8BqHlBQL8GeesHBS2Yz3PSj7KwHT_qIdJY4LW-pOi9LhkhZgk-fPruJEuclxg-OdvZhGVtdOcjm-e3WOGOJ1UPOBYFOUY7-QGOUlRbzFvHnq0NPGQmpyMaMhNEmiaRmM0nAVlR0N-i1fGjXDnSIYDCzHg9elM3jleqUKSy3w8tVkqkOiUl6dsD-lye1_sFG7w4oCf2P0L9liKvlr52VdNKC4s-pVut4aVYC8CaTM6XlrdWyUCjqY3juBjnk1rgf9QBrwjIcTg2gA87ZKCFUU_pjClpw5l9cTPPhR4ln8pUTqH1G7rSG6kfiBSWVCVXNZAXr1YXsr6tMomzHPWFVlbZh9lGoXBoRAbObCv54JCkTqs8ssyfdH-bWw0skYFNje5N42JYU-clJ-8IRiWhJByoYuNUgaU6JrV_-jconAB_Q"}
  //   },
  // })
  
  //   .then(res => {
  //     //  this.setState({liste:res});
  //     //  console.log("liste est:",res)
  //   }).catch(err => {
  //     console.log("Axios error", err.response);
  //     })
  //     // console.log("eee",this.state.employes)
}
  handleLogout(e) {
    e.preventDefault()
    console.log('logout')
    localStorage.setItem('userToken',"")
    localStorage.setItem('avatar',"")
    
    this.props.history.push(`/login`)
  }

  render() { 
    const navbresp = <Nav className="mr-auto">
    <NavDropdown title="Employés" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/nouveauperso">Ajouter</NavDropdown.Item>
        <NavDropdown.Item href="/employes">Liste</NavDropdown.Item>
      </NavDropdown>
     < NavDropdown title="Demandes" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/valider">A valider</NavDropdown.Item>
        <NavDropdown.Item href="/listeconges">Liste</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/statistiques">Statistiques</Nav.Link>
    </Nav>

const navbremp= <Nav className="mr-auto">
  <Nav.Link href="/nouveauconges">Demande de congé</Nav.Link>
  
</Nav>


console.log("local storage:",localStorage)
// console.log("token:",localStorage.userToken)
return(
<Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Navbar.Brand href="/">Easy Leave</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    {localStorage.userToken && localStorage.etat==0?  navbresp : navbremp}
    
    </Nav>
    <Nav>
    <div className="collapse navbar-collapse justify-content-md-center"  id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
              {localStorage.userToken? (
                <>
                {/* <Nav.Link href="/logout" onClick={this.handleLogout.bind(this)}>Logout</Nav.Link> */}
                <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item">
        <NavLink className="nav-link waves-effect waves-light">1
          <i className="fas fa-envelope"></i>
        </NavLink>
      </li>
      <li className="nav-item avatar dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={'/'+'photo_projet'+ '/'+localStorage.avatar}  className="rounded-circle z-depth-0" alt="avatar image"width="30" height="30"/>
        </a>
        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-55">
          <NavLink className="dropdown-item" onClick={this.handleLogout.bind(this)}  href="#">Logout</NavLink>
        </div>
      </li>
      </ul>
                </>
              ) : <Nav.Link href="/login">Login</Nav.Link>}
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
            </li>
          </ul>
          {/* {localStorage.usertoken ? userLink : loginRegLink} */}
        </div>
      {/* <Nav.Link eventKey={2} href="/Register">
        Register */}
      {/* </Nav.Link> */}
      {/* <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item">
        <NavLink class="nav-link waves-effect waves-light">1
          <i class="fas fa-envelope"></i>
        </NavLink>
      </li>
      <li className="nav-item avatar dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={'/'+'photo_projet'+ '/'+localStorage.avatar}  className="rounded-circle z-depth-0" alt="avatar image"width="30" height="30"/>
        </a>
        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-55">
          <NavLink className="dropdown-item" onClick={this.handleLogout.bind(this)}  href="#">Logout</NavLink>
        </div>
      </li>
      </ul> */}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)
  }
}

export default withRouter(Navb)