import React, { Component } from 'react';
// import {Formik,FormikProps, Form, Field, FieldProps} from 'formik';
import axios from 'axios';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import App from './App'
class Ajoutpersonne extends Component {
  constructor(props) {
    super(props);
    // this.Ajoutpersonne = React.createRef();
    this.beforeChange = this.beforeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    service: [],
    nom: '',
    prenom: '',
    phot: "",
    adresse: "",
    serv: "",
    telephone: "",
    email: "",
    datenais: "",
    poste: "",
    daterec: "",
    idserv: "",
    userid:13
    // localStorage.id_employe
  }
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/services`)
      .then(res => {
        const service = res.data;
        console.log('test', res.data)
        this.setState({ service });
      })
  }
  nomFile(fichier) {
    const fl = fichier.substring(12, fichier.lenght);
     return fl
  };
  beforeChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name === 'serv') {
      const idservi= parseInt(e.target.selectedIndex) +1;
      this.setState({
        idserv: (idservi)
      });
    }
    else if (e.target.name === 'phot') {
      // alert(this.nomFile(e.target.value))
      // const chem = 'd:\\data\\TRAINING\\fullstack\\react' + this.nomFile(e.target.value);
      this.setState({
        // phot: "d:\\data\\TRAINING\\fullstack\\react" + this.nomFile(e.target.value)
        phot: this.nomFile(e.target.value)
      });
      console.log('nam', e.target.name)
      console.log('value', this.state.phot)

    }
  }

  handleSubmit(event) {
    // handleSubmit = event => {
    // console.log('Le nom a été soumis : ' + this.state.phot );
    // console.log('date rec : ' + this.state.daterec );
    event.preventDefault();
    // const isValid = this.validate();
    // if (isValid) {
    //   console.log(this.state);
    // }
    // console.log{this.state.nom})

// alert('ok handel')
    console.log("phoyyyyyyyt:",this.state.phot)
    console.log("nom:",this.state.nom)
    console.log("prenom:",this.state.prenom)
    console.log("idser:",this.state.idserv)
    console.log("adre:",this.state.adresse)
    console.log("mail:",this.state.email)
    console.log("datenais:",this.state.datenais)
    console.log("daterec:",this.state.daterec)
    // console.log("phot:",this.state.daterec)
    console.log("poste:",this.state.poste)
    // console.log("phot:",this.state.poste)

    axios.post(`http://127.0.0.1:8000/api/employes/nouveau?
    nom=${this.state.nom}
    &prenom=${this.state.prenom}
    &service_id=${this.state.idserv}
    &adresse=${this.state.adresse}
    &tel=${this.state.telephone} 
    &email=${this.state.email}
    &date_naissance=${this.state.datenais}
    &daterecrutement=${this.state.daterec}
    &photo=${this.state.phot}
    &poste=${this.state.poste}
    &user_id=${this.state.userid} `
    // ${this.state.userid}
    )
      .then(res => {
        console.log('res:', res);
        console.log('resdata', res.data);
        
      })
      this.props.history.push('/')
  };

  render() {
    return (
<div>
      <Header data={this.props} />

      <section className="content-wrapper">
        <h1></h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-success card-outline"></div>

              <div>
                <div className="card-header">
                  <h3>+nouveau Employé</h3>
                </div>
                <div className="card-body">

      <div className="mt-3 mr-2 ml-2 mb-2">
        
        <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">Nom</label>
            <div className="col-10">
              <input className="form-control" type="text" onChange={this.beforeChange} name="nom" />
              {/* <div class="alert alert-danger" role="alert"> */}
              {this.state.nomError}
            </div>
          </div>
          {/* </div> */}
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">Prénom</label>
            <div className="col-10">
              <input className="form-control" type="text" onChange={this.beforeChange} name="prenom" />
            </div>
          </div>
          <div class="form-group row">
            {/* <label htmlFor="example-text-input" className="col-2 col-form-label">Prénom</label> */}
            <label htmlFor="example-text-input" className="col-2 col-form-label">Photo</label>
            <div className="col-10">
              <input type="file" className="form-control" onChange={this.beforeChange} name="phot" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">Adresse</label>
            <div className="col-10">
              <textarea className="form-control" onChange={this.beforeChange} name="adresse" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="exampleFormControlSelect1" className="col-2 col-form-label" >Service</label>
            <div className="col-10">
              <select className="form-control" id="exampleFormControlSelect1" onChange={this.beforeChange} name="serv" >
                {this.state.service.map(item => <option  data-id={item.id} key={item.id} >{item.service} </option>)}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-tel-input" className="col-2 col-form-label" >Telephone</label>
            <div className="col-10">
              <input className="form-control" type="tel" onChange={this.beforeChange} name="telephone" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-email-input" className="col-2 col-form-label">Email</label>
            <div className="col-10">
              <input className="form-control" type="email" onChange={this.beforeChange} name="email" />

            </div>
            {/* <div class="alert alert-danger" role="alert">
                {this.state.emailError}
              </div> */}
          </div>
          <div className="form-group row">
            <label htmlFor="example-date-input" className="col-2 col-form-label" >Date de naissance</label>
            <div className="col-10">
              <input className="form-control" type="date" onChange={this.beforeChange} name="datenais" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">Poste</label>
            <div className="col-10">
              <input className="form-control" type="text" onChange={this.beforeChange} name="poste" />
            </div>
          </div>


          <div className="form-group row">
            <label htmlFor="example-date-input" className="col-2 col-form-label">Date de recrutement</label>
            <div className="col-10">
              <input className="form-control" type="date" defaultValue="2011-08-19" onChange={this.beforeChange} name="daterec" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
        <Menu/>
        <Footer/> 
      </div>
      
</div>
</div>
</div>
</div>
</div>
</section>
</div>
      
    );
  }
}
export default Ajoutpersonne