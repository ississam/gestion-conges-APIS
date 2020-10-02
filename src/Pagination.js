import React, { Component } from "react";
import axios from "axios";

 
class Pagination extends Component {
  constructor(props){
 super(props);
  } 
  state={
liste:[],
posts:[],
activePage:1
  }
  componentDidMount(){
    axios.get(`http://127.0.0.1:8000/api/conge/liste`)
    .then(res => {
       this.setState({liste:res.data.data});
       this.setState({posts:res.data});
       console.log("la liste conges est:",res.data.data)
       console.log("la liste poste:",res.data)
    })
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
  render (){
 return(

<div>
<table className="table table-striped table-secondary">
  <thead>
    <tr>
      <th scope="col">Matricule</th>
      <th scope="col">Nom Prénom</th>
      <th scope="col">Type de congé</th>
      <th scope="col">Date de la Demande</th>
      <th scope="col">Date de départ</th>
      <th scope="col">Date de retour</th>
    </tr>
  </thead>
  <tbody>
  
  {this.state.liste.map((item)=>
 
    <tr  key={item.index} > 
      <th scope="row">{item.employe_id}</th>
  <td >{item.name} {item.prenom}  </td>
      <td>{item.type_conges}</td>
      <td>2020-03-05</td>
      <td>2020-03-05</td>
      <td>2020-03-05</td>
    
      <td className="text-center"><a className='btn btn-warning btn-xs' href="#"><span className="glyphicon glyphicon-edit"></span> Valider</a> <a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Annuler</a></td>
    </tr>
  )}
  </tbody>
</table>
<h4>cur p{this.state.posts.current_page}</h4>
<h4>pur p{this.state.posts.per_page}</h4>
<h4>totc p{this.state.posts.total}</h4>
{/* <Pagination
      activePage={this.state.activePage}
      itemsCountPerPage={PER_PAGE}
      totalItemsCount={TOTAL_COUNT}
      onChange={this.handlePageChange}
    /> */}
</div>
 );

  }
}
export default Pagination;
