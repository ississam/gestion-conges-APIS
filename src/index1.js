import React, { Component, Fragment } from 'react'
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Landing from './components/Landing'
import Login from './Login'
import Register from './components/Register'
import Profile from './Profile'
import Ajoutpersonne from './Ajoutpersonne'
import Ajoutconges from './Ajoutconges'
import Statistiques from './Statistiques'
import Validation from './validation'
import Employes from './Employes'
import Modifperson from './Modifperson'
// import Main from './Main'
import Liste from './Liste'
import Acceuil from './components/Acceuil.js'
import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'
import Footer from './components/Footer'
class index1 extends Component {
  render() {


    const sidebar0 = (

      <Router>
      {/* {localStorage.userToken?  sidebar0 : sidebar1} */}
  
       <Header data={this.props} />
       <Menu />
       {/* <Content /> */}
      <Switch>
        
      {/* <div className="App"> */}
      <section className="content-wrapper">
              <h1></h1>
   <div className="container-fluid"> 
    <div className="row">
      <div className="col-12">
        <div className="card card-success card-outline">
        
        <Route exact path="/" component={Content} />
        {/* <div className="content"> 
        </div> */}
        {/* <div className="content"> */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/acceuil" component={Acceuil} />
          <Route exact path="/employes" component={Employes}/>
           <Route exact path="/valider" component={Validation}/>
           <Route exact path="/statistiques" component={Statistiques}/>
           <Route exact path="/nouveauconges" component={Ajoutconges}/>
           <Route  exact path="/nouveauperso" component={Ajoutpersonne}/>
           {/* <Route path="/modifperson" component={Modifperson} /> */}
           <Route exact path="/modifperso/:id" component={Modifperson}/>
           {/* <Route exact path="/main" component={Main}/> */}
           <Route exact path="/login"  data={this.props}  component={Login}/>
           <Route exact path="/register" component={Register}/>
           <Route exact path="/listeconges" component={Liste}/>
        {/* </div> */}
      {/* </div> */}
      </div>
   {/* </div> */}
   </div>
   </div>
   </div>
   {/* </div> */}
   {/* </div> */}
   </section>
      </Switch>
      
      <Footer />
    </Router>

    )

    const sidebar1=(
      <Login data={this.props}/>
    )
  
    return (
    <>
      
      {localStorage.userToken ?  sidebar0 : sidebar1}
      
     </>
     
     
    )
  }
}

export default index1