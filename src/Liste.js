import React, { Component } from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Header from "./components/Header";
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination'
import './pagination.css'
import { CubeGrid  } from 'styled-loaders-react';
class Liste extends Component {
  constructor(props) {
    super(props);
 
  this.state = {
    liste: [],
    offset: 0,
    data: [],
    perPage: 10,
    currentPage: 0,
    loading:true,
};
this.handlePageClick = this.handlePageClick.bind(this);
}
receivedData() {
  axios
      .get(`http://127.0.0.1:8000/api/conge/listeconge`)
      .then(res => {
            const data = res.data.conges;
            console.log("ress dat:",res.data.conges)     
    const etatv = (
      <Badge pill variant="success">
        {" "}
        Validé{" "}
      </Badge>
    );
    const etata = (
      <Badge pill variant="warning">
        {" "}
        Annulé{" "}
      </Badge>
    );
    const etatn = (
      <Badge pill variant="danger">
        {" "}
        A Validé{" "}
      </Badge>
    );
          const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
          const postData = slice.map(pd => <React.Fragment>
              {/* <h1>{pd.date_depart}</h1> */}
              <tr key={pd.id}>
                            <th scope="row">{pd.employe_id}</th>
                            <td>
                              {pd.employe.nom} {pd.employe.prenom}{" "}
                            </td>
                            <td>{pd.typeconge.typeconge}</td>
                            <td>{pd.date_demande}</td>
                            <td>{pd.date_depart}</td>
                            <td>{pd.date_retour}</td>
                            <td>
                              {" "}
                              {pd.val == "V"? etatv : pd.val == "A"? etata : etatn}{" "}
                            </td>
                          </tr>
       
          </React.Fragment>)

          this.setState({
              pageCount: Math.ceil(data.length / this.state.perPage),
              liste: (res.data.conges),
              postData
          })
          this.setState({ loading:false})
          // console.log("dddata:",postData)
      });
}
handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.receivedData()
  });

};

  componentDidMount() {
    this.receivedData()
    // axios
    //   .get(`http://127.0.0.1:8000/api/conge/listeconge`)
    //   .then((res) => {
    //     console.log(res.data.conges);
    //     this.setState({ liste: res.data.conges });
    //     //  this.setState({ loading: false });
    //     console.log("la liste conges est:", res.data);
    //     const data = res.data;
    //     const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage) 
    //     this.setState({pageCount:Math.ceil(data.length / this.state.perPage)})
    //   })
    //   .catch((err) => {
    //     console.log("Axios error", err);
    //   });
     
      
   
      // getPosts();
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};
  render() {

    
    return (
      <div>
        <Header data={this.props} />

        <section className="content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-success card-outline"></div>

                <div>
                  <div className="card-header">
                    <h3>+Liste des congés</h3>
                  </div>
                  <div className="card-body">
                  {
             this.state.loading? <CubeGrid color="#28A745" size="300px"  /> : ''
           }
   
                      <table id="example2" class="table table-bordered table-hover">
                 <thead> 
                        <tr>
                          <th scope="col">Matricule</th>
                            <th scope="col">Nom Prénom</th>
                          <th scope="col">Type de congé</th>
                          <th scope="col">Date de la Demande</th>
                          <th scope="col">Date de départ</th>
                          <th scope="col">Date de retour</th>
                          <th scope="col">Etat du congé</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.postData}
                        {/* {this.state.liste.map((item) => (
                          <tr key={item.id}>
                            <th scope="row">{item.employe_id}</th>
                            <td>
                              {item.employe.nom} {item.employe.prenom}{" "}
                            </td>
                            <td>{item.typeconge.typeconge}</td>
                            <td>{item.date_demande}</td>
                            <td>{item.date_depart}</td>
                            <td>{item.date_retour}</td>
                            <td>
                              {" "}
                              {item.val == "V"
                                ? etatv
                                : item.val == "A"
                                ? etata
                                : etatn}{" "}
                            </td>
                          </tr>
                        ))} */}
                      </tbody>
                      

                    </table> 
                      
                     
                    <div>
             
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

                    <div className="col-sm-6 col-sm-push-3"></div>
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

export default Liste;
