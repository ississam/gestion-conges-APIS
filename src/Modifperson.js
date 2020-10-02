import React, { Component } from 'react'
import axios from 'axios';
import Menu from './components/Menu';
import Footer from './components/Footer';
class Modifperson extends Component {
    constructor(props) {
        super(props);
        this.beforeChange = this.beforeChange.bind(this);
      }
      
      state={
        employes:[],
        service: [],
        pic:'',
        nom: '',
        prenom: '',
        phot: "",
        adresse: "",
        serv: "",
        tele: "",
        email: "",
        datenais: "",
        poste: "",
        daterec: "",
        idserv: "",
      }
      nomFile(fichier) {
        const fl=fichier.substring(12,fichier.lenght)
        return fl
          };
     
    
      beforeChange(e) {
              this.setState({
          [e.target.name]: e.target.value
        });
      }
   componentDidMount (){

   const id =this.props.match.params.id 
// alert(id)
axios.get(`http://127.0.0.1:8000/api/employes/${id}/modif`)
.then(res => {
  // const employes = res.data;
  this.setState({  
  employes: res.data,
    nom:res.data.nom,
    prenom:res.data.prenom,
    phot: res.data.photo,
    adresse: res.data.adresse,
    serv: res.data.service,
    telephone: res.data.tel,
    email: res.data.email,
    datenais: res.data.date_naissance,
    poste: res.data.poste,
    daterec: res.data.daterecrutement,
    idserv: res.data.service_id
  });
//  console.log("eeeeeeeee",this.state.employes)
// 

}).catch(err => {
  console.log("Axios error", err);
  })
  console.log('empp',this.state.phot)
  axios.get(`http://127.0.0.1:8000/api/services`)
      .then(item => {   
        const services = item.data;
        // console.log('test',item.data)
        this.setState({ service:services });
        console.log("servicees",this.state.service)
        // const tt = this.state.service;
        const idserselect = this.state.service.filter(item => item.service_id == 1)
        // console.log("ff cariable", idserselect[0].service)
      })
     
   }
    
    
    render() {
        return (
                  <div>
                     

  <section className="content-wrapper">
  <h1></h1>
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="card card-success card-outline"></div>

        <div>
          <div className="card-header">
            <h3>+Liste Des employés</h3>
          </div>
          <div className="card-body">


      {/* <div> */}
        <h2>Modif person</h2>

        <p>{this.state.id}</p>
        <div className="row">
        <div className="col-md-4">
        <img src="/photo_projet/h.jpg"  className="w-100"  height="630"  />
        </div>
        <div className="col-md-8">
                    <form /*onSubmit={this.handleSubmit} */ encType="multipart/form-data">
                   
                    
                      <div className="form-group row">
                        <label htmlFor="example-text-input" className="col-2 col-form-label" >Nom</label>
                        <div className="col-10">
                          <input className="form-control" onChange={this.beforeChange}   value={this.state.nom} type="text" name="nom" />  
                          </div>
                        </div>  
                      <div className="form-group row">
                        <label htmlFor="example-text-input" className="col-2 col-form-label" >Prénom</label>
                        <div className="col-10">
                          <input className="form-control" type="text" name="prenom" onChange={this.beforeChange}   value={this.state.prenom} />
                        </div>
                      </div>
            
                      <div className="form-group row">
                        {/* <label htmlFor="example-text-input" className="col-2 col-form-label">Prénom</label> */}
                        <label htmlFor="example-text-input" className="col-2 col-form-label">Photo</label>
                        <div className="col-10">
                          <input type="file" className="form-control"  name="phot" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="example-text-input" className="col-2 col-form-label" >Adresse</label>
                        <div className="col-10">
                          <textarea className="form-control"  name="adresse"onChange={this.beforeChange}  value={this.state.adresse} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleFormControlSelect1" className="col-2 col-form-label"  onChange={this.beforeChange} >Service</label>
                        <div className="col-10">
                          <select className="form-control" id="exampleFormControlSelect1"  name="serv" >
                          {this.state.service.map(item => <option key={item.id} >{item.service} </option>)}
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="example-tel-input" className="col-2 col-form-label"  >Telephone</label>
                        <div className="col-10">
                          <input className="form-control" type="tel"  name="telephone" onChange={this.beforeChange}  value={this.state.telephone} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="example-email-input" className="col-2 col-form-label">Email</label>
                        <div className="col-10">
                          <input className="form-control" type="email" name="email" onChange={this.beforeChange}  value={this.state.email} />
                          
                        </div>
                        {/* <div class="alert alert-danger" role="alert">
                            {this.state.emailError}
                          </div> */}
                      </div>
                      <div className="form-group row">
                        <label htmlFor="example-date-input" className="col-2 col-form-label" >Date de naissance</label>
                        <div className="col-10">
                          <input className="form-control" type="date" name="datenais" onChange={this.beforeChange}  value={this.state.datenais} />
                        </div>
                      </div>
            
                      <div className="form-group row">
                        <label htmlFor="example-text-input" className="col-2 col-form-label">Poste</label>
                        <div className="col-10">
                          <input className="form-control" type="text" onChange={this.beforeChange} value={this.state.poste}  name="poste"/>
                        </div>
                      </div>
            
            
                      <div className="form-group row">
                        <label htmlFor="example-date-input" className="col-2 col-form-label">Date de recrutement</label>
                        <div className="col-10">
                          <input className="form-control" type="date" onChange={this.beforeChange} value={this.state.daterec} name="daterec" />
                        </div>
                      </div>
            
                      <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                  </div>
                  </div>
                  </div>
</div>
</div>
</div>
</div>
</section>
<Menu />
<Footer />
                  </div>
                );
              }
            }
       

export default Modifperson;