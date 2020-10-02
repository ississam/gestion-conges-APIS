import React, { Component } from "react";
import axios from "axios";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CubeGrid  } from 'styled-loaders-react';

class Validation extends Component {
  constructor(props) {
    super(props);

    this.validCong = this.validCong.bind(this);
    this.annulCong = this.annulCong.bind(this);
    // this.receivedData = this.receivedData.bind(this);
  }
  state = {
    /*/ //offset: 0 */
    posts: [],
    // conglist,
    activePage: 1,
    perPage: 5,
    currentPage: 0,
    loading:true,
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/conge/liste`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
 
    })
    
      .then(res => {
        this.setState({ posts: res.data.conges });
        //  this.setState({ loading: false });
        console.log("la liste conges est:", res.data)
        this.setState({loading:false})
        
      }).catch(err => {
        console.log("Axios error", err);
      }
      )
     
    // getPosts();
    // this.receivedData ()
  }
 
  // receivedData() {
  
  //   this.setState({loading:false});
  // }
  validCong(id) {
    const congdeleted = this.state.posts.filter(post => {
      return post.id !==id    
    });
    this.setState({
      posts: congdeleted
     
    })
    // console.log('id est:',id)
    axios.put(`http://127.0.0.1:8000/api/conge/modif/${id}?val=V`)
    .then(res => {
      console.log("la liste conges est:", res.data)
    }).catch(err => {
      console.log("Axios error", err);
    })
  }
  annulCong (id) {
    const congannuled = this.state.posts.filter(post => {
      return post.id !==id
    });
this.setState({
  posts: congannuled

}) 

    axios.put(`http://127.0.0.1:8000/api/conge/modif/${id}?val=A`)
    .then(res => {
      console.log("la liste conges est:", res.data)
    }).catch(err => {
      console.log("Axios error", err);
    })

  }
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
            <h3>Demandes A valider</h3>
          </div>
          <div className="card-body">
        {
          this.state.loading? <CubeGrid color="#28A745" size="300px"  /> : ''
           }
        <table class="table table-striped table-secondary">
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

            {this.state.posts.map((item) =>

              <tr key={item.id} >
                <th scope="row">{item.employe_id}</th>
                <td >{item.employe.nom} {item.employe.prenom}  </td>
                <td>{item.typeconge.typeconge}</td>
                <td>{item.date_demande}</td>
                <td>{item.date_depart}</td>
                <td>{item.date_retour}</td>

                <td class="text-center"><a class='btn btn-warning btn-xs' onClick={() => this.validCong(item.id)}> Valider</a> <a class="btn btn-danger btn-xs" onClick={() => this.annulCong(item.id)}>Annuler</a></td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="col-sm-6 col-sm-push-3">
          {/* <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} /> */}
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

export default Validation;