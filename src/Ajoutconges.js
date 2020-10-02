import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

// import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
// import FieldGroup from '../../common/fieldGroup';

class Ajoutconges extends Component {
  constructor(props) {
    super(props);
    this.beforeChange = this.beforeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    // liste: [],
    conges: [],
    typeconge_id: "",
    date_depart: "",
    date_retour: "",
    redirect: false,
    // nombredejours: '',
  };

  componentDidMount() {
    console.log("id_employe:", localStorage.id_employe);
    axios.get(`http://127.0.0.1:8000/api/typeconge/liste`).then((res) => {
      this.setState({ conges: res.data });
      // console.log('les conges:',res)
    });
  }

  // affectation() {
  //     const dt = new Date();
  //     const mt = dt.getMonth();
  //     const dtcomp = dt.getFullYear() + '-' + mt + '-' + dt.getDate()
  //     // if (this.state.employe_id==''){}
  //     this.setState({
  //         employe_id: 18
  //     });
  //     this.setState({
  //         prenom: 'isssss'
  //     });
  // }
  beforeChange(e) {
    if (e.target.name == "typeconge_id") {
      const id_cong = e.target.selectedIndex + 1;
      this.setState({
        typeconge_id: id_cong,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  handleSubmit(event) {
    // console.log('date retou',this.state.date_retour)
    event.preventDefault();
    const dt = new Date();
    const mt = dt.getMonth() + 1;
    const dtcomp = dt.getFullYear() + "-" + mt + "-" + dt.getDate();
    //    console.log('mois', mt);
    //    console.log('day', dt.getDate());
    //    console.log('date demande', dtcomp);
    const iid = localStorage.id_employe;
    console.log("iiiiid", localStorage.id_employe);

    axios.post(`http://127.0.0.1:8000/api/conge/nouveau?
 typeconge_id=${this.state.typeconge_id}
 &employe_id=${iid}
 &date_demande=${dtcomp}
 &date_depart=${this.state.date_depart}
 &date_retour=${this.state.date_retour} `);
 console.log("axioos")
 
 this.props.history.push('/'); 
//  return  <Redirect to="/Content" />
  }

  render() {
    return (
      // {(localStorage.employe)==='non'?(<Redirect to="/acceuil" />):(
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
                    <h3>+nouveau congé</h3>
                  </div>
                  <div className="card-body">
                    <form
                      onSubmit={this.handleSubmit}
                      encType="multipart/form-data"
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="example-date-input"
                          className="col-2 col-form-label"
                        >
                          Date de départ
                        </label>
                        <div className="col-10">
                          <input
                            className="form-control"
                            type="date"
                            defaultValue="2011-08-19"
                            onChange={this.beforeChange}
                            name="date_depart"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="example-date-input"
                          className="col-2 col-form-label"
                        >
                          Date de retour
                        </label>
                        <div className="col-10">
                          <input
                            className="form-control"
                            type="date"
                            defaultValue="2011-08-19"
                            onChange={this.beforeChange}
                            name="date_retour"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlfor="exampleFormControlSelect1"
                          className="col-2 col-form-label"
                        >
                          Congés
                        </label>
                        <div className="col-10">
                          <select
                            className="form-control"
                            onChange={this.beforeChange}
                            name="typeconge_id"
                          >
                            {this.state.conges.map((item) => (
                              <option key={item.id}>{item.typeconge}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mx-auto">
                        <button type="submit" className="btn btn-primary">
                          Valider
                        </button>
                      </div>
                    </form>
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

export default Ajoutconges;
