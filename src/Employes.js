import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
// import {Route, NavLink,HashRouter} from 'react-router-dom';
import { withRouter } from 'react-router';
import Modifperson from './Modifperson';
import axios from 'axios';
 import './components/Employes.css'
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination'
// import Spinner from 'react-bootstrap/Spinner'
import { CubeGrid  } from 'styled-loaders-react';
// import {Pie} from 'react-chartjs-2';
// import './pagination.css'
class Employes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: [],
      offset: 0,
      loading:true,
      data: [],
      perPage: 10,
      currentPage: 0,
    employes:[]
  
  };
  this.handlePageClick = this.handlePageClick.bind(this);
  this.deleteEmploye = this.deleteEmploye.bind(this);
  
}
////old compenent didmount without pagination
  // componentDidMount() {
  //   axios.get(`http://127.0.0.1:8000/api/employes`)
  //     .then(res => {
  //        this.setState({employes:res.data});
  //        console.log("eee",res)
  //     }).catch(err => {
  //       console.log("Axios error", err);
  //       })
  //       console.log("eee",this.state.employes)
  // }

  receivedData() {
    axios
        .get(`http://127.0.0.1:8000/api/employes`)
        .then(res => {
              const data = res.data;
              console.log("raaaaaaaaaaess dattttttt:",res.data)     
              // this.setState({employes:res.data});
                    //  console.log("eee",res)
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => <React.Fragment>
             <tbody>
     
             <tr key={pd.id}>
            <td  scope="row">{pd.id}  </td>       
<td> <img src={'photo_projet' + '/'+pd.photo}  className="im" alt="img" width="54" height="54" /> </td> 
            <td>{pd.nom}</td>
            <td>{pd.prenom}</td>
            <td>{pd.service}</td>
            <td class="project-actions text-right">
            
            <NavLink to={"/modifperso/" + pd.id} class="btn btn-primary btn-sm" href="#">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </NavLink>
                          <a type="button" onClick={()=>this.deleteEmploye(pd.id)} class="btn btn-danger btn-sm" href="#">
                              <i class="fas fa-trash">
                              </i>
                              Delete
                          </a>
                    
            </td>

            {/* <td> <NavLink to={"/modifperso/" + pd.id} > 
            <button type="button" className="btn btn-warning">Modifier
            </button></NavLink> <a type="button" onClick={()=>this.deleteEmploye(pd.id)} className="btn btn-danger"  >Supprimer</a> </td> */}
          </tr>

        </tbody>
         
            </React.Fragment>)
  
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                liste: (res.data.conges),
                postData
            })
            // console.log("dddata:",postData)
            this.setState({ loading:false})
        }
        );
      
       

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
  deleteEmploye(id) {
     
    const employesUpdated = this.state.employes.filter(employe => {  
      console.log('iid',employe.id)
      console.log('iid',id)
    return employe.id !== id      
    }) ;

  this.setState({
    employes:employesUpdated
   
  })
  console.log("employesUpdated",employesUpdated)
  axios.delete(`http://127.0.0.1:8000/api/employes/${id}/delete`)
  .then(console.log('delete succes')); 
    } 
  render() {
    // const chem='/photo_projet/h.jpg'
    return (
//  <BrowserRouter> 
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
            <h3>+Liste Des employés</h3>
          </div>
          <div className=" p-0">


      {/* <div> */}
        <h2>Employe</h2>
   <div className="card-body p-0">
   <div className="testspin">
           {
             this.state.loading? <CubeGrid color="#28A745" size="300px"  /> : ''
           }
   
      </div>
  <table className="table table-striped projects">
    <thead>
      <tr>
        <th style={{width: '1%'}}>
         Matricule
        </th>
        <th style={{width: '20%'}}>
         Photo
        </th>
        <th style={{width: '30%'}}>
         Nom
        </th>
        <th>
          Prénom
        </th>
        <th style={{width: '8%'}} className="text-center">
          Service
        </th>
        <th style={{width: '20%'}}>
          Action
        </th>
      </tr>
    </thead>
    <tbody >
   
    </tbody>
    {this.state.postData}
  </table>
</div>

        
        {/* <table id="example2" class="table table-bordered table-hover">
        <thead>
     
          <tr>
            <th scope="col">Matricule</th>
            <th scope="col">photo</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Service</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {this.state.postData}
      </table> */}
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
      </div>  
      
</div>
</div>
</div>
</div>
{/* </div> */}
</section>
<Menu />
        <Footer />
</div>

    );
  }
}
 
export default withRouter(Employes);