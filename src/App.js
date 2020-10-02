import React, { Component, Fragment } from 'react'
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Test1 from './Test.js'
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
import Test from './Test'
import Content from './components/Content'
import Footer from './components/Footer'
import Index1 from './index1.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }
  render() {


    const sidebar0 = (

      <Router>
      {/* {localStorage.userToken?  sidebar0 : sidebar1} */}
      {/* <Menu /> */}
   
       
       {/* <Content /> */}
      <Switch>
        
 
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
           <Route exact path="/login" render={(props)=> <Login {...props} /> }  />
           <Route exact path="/register" component={Register}/>
           <Route exact path="/listeconges" component={Liste}/>
           <Route exact path="/test" component={Test}/>
        {/* </div> */}
      {/* </div> */}
   
   {/* </div> */}

   {/* </div> */}
   {/* </div> */}

   </Switch>
      
      {/* <Footer /> */}
    </Router>

    )

    // const sidebar1=(
    //   <Route exact path="/login"  data={this.props}  component={Login}/>
    // )
  
    return (
    <>


    {/* <Router> */}
    {/* <Test /> */}
{sidebar0} 
       
       {/* <Content /> */}
      {/* <Switch> */}
        
      {/* {localStorage.userToken ?  sidebar0 : sidebar1} */}
      {/* </Switch> */}
      
      {/* <Footer /> */}
    {/* </Router> */}
      
     </>
     
     
    )
  }
}

export default App