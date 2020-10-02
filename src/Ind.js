import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,withRouter } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Landing from './components/Landing'
import Login from './Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Ajoutpersonne from './Ajoutpersonne'
import Ajoutconges from './Ajoutconges'
import Statistiques from './Statistiques'
import Validation from './validation'
import Employes from './Employes'
import Modifperson from './Modifperson'
import Main from './Main'
// import App from 

class Ind extends Component {
  render() {
    return (
      
      <Router>
        <Switch>
        <div className="App">
          
          <Navbar />
          {/* <Route exact path="/" component={App} /> */}
          {/* <div className="content"> 
          </div> */}
          <div className="content">
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/employes" component={Employes}/>
             <Route exact path="/valider" component={Validation}/>
             <Route exact path="/statistiques" component={Statistiques}/>
             <Route exact path="/nouveauconges" component={Ajoutconges}/>
             <Route  exact path="/nouveauperso" component={Ajoutpersonne}/>
             {/* <Route path="/modifperson" component={Modifperson} /> */}
             <Route exact path="/modifperso/:id" component={Modifperson}/>
             <Route exact path="/main" component={Main}/>
             <Route exact path="/login" component={Login}/>
             <Route exact path="/register" component={Register}/>
             {/* <Route exact path="/app" component={App}/> */}
             <Login />
          </div>
        
        </div>
        </Switch>
      </Router>
      
    )
  }
 
}

export default Ind