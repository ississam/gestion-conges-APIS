import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineTeam,
} from "react-icons/ai";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Test from "./Test";
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
class Statistiques extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      chartData:{},
      liste: [],
      valide: 0,
      annule: 0,
      nouve: 0,
      totcong:0    
  }
}
static defaultProps = {
  displayTitle:true,
  displayLegend: true,
  legendPosition:'right',
  location:'City'
}

 
  

 

//   componentDidMount() {
//     let cancel = 0;
//         let validate = 0;
//         let newc =0;
//     axios
//       .get(`http://127.0.0.1:8000/api/conge/listeconge`)
//       .then((res) => {
       
//         const dtt = res.data.conges.filter((p) => p.val === "A");
//         dtt.forEach((element) => {
//           cancel += parseInt(element.val.length);
//         });
//         this.setState({ liste: res.data.conges });
//         this.setState({ annule: cancel });
//         // console.log("AAA", this.state.annule);
     


//         const data1=res.data.conges.filter(d => d.val==='V');
//         data1.forEach(el => {
//           validate += parseInt(el.val.length);
//         });
//         this.setState({valide:validate})
//         // console.log('BBB',this.state.valide)
      
//         const data2=res.data.conges.filter(t => !t.val);
//         console.log("resssdata",data2)
//         console.log("emty data",data2.length)
//         // data2.forEach(ne => {
//         //   newc += parseInt(ne.val.length);
//         // });
//         this.setState({nouve:newc})
//         // console.log('CCC',this.state.nouve)
           
    
        
//         }
// )}
//       // .catch((err) => {
//       //   this.getChartData();
//       // });
componentDidMount(){
  // this.getchartData(); // this should be this.getChartData();
  let cancel = 0;
  let accepted = 0;
      // let validate = 0;
      let newc =0;
  axios
    .get(`http://127.0.0.1:8000/api/conge/listeconge`)
    .then((res) => {
     
      const dtt = res.data.conges.filter((p) => p.val === "A");
      dtt.forEach((element) => {
        cancel += parseInt(element.val.length);
      });
      this.setState({ liste: res.data.conges });
      this.setState({ annule: cancel });
      console.log("con annulé", this.state.annule);
       const data1=res.data.conges.filter(d => d.val==='V');
      data1.forEach(el => {
        accepted += parseInt(el.val.length);
      });
      this.setState({valide:accepted})
      console.log('con validé',this.state.valide)
    
      const data2=res.data.conges.filter(t => !t.val);
      console.log("resssdata",data2)
      console.log("emty data",data2.length)
      // data2.forEach(ne => {
      //   newc += parseInt(ne.val.length);
      // });
      newc=data2.length;
      this.setState({nouve:newc})
      console.log('con a valid',this.state.nouve)
         this.setState ({totcong:this.state.valide  + this.state.annule + this.state.nouve})
  /////////////////


  this.setState({
      chartData:{
        labels: ['Congés acceptés',  'Congés annulés', 'Congés à valider'],
        datasets:[
          {
            label:'Population',
            data:[
              accepted,
              cancel,
              // cancel,
              newc ,
              
     
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              // 'rgba(75, 192, 192, 0.6)',
             
            ]
          }
        ]
      }
    });
      
      }
      
)
// this.getChartData();
}
 
  render() {

    return (
      <div>

        <Header data={this.props} />
        
        <section className="content-wrapper">
          <h1></h1>
 

        {/* </div> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-success card-outline"></div>

                <div>
                  <div className="card-header">
                    <h3>Tableau de bord</h3>
                  </div>
                     </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
          <div className="col-md-8">
          <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              // text:'Tableau de bord ' ,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        
   
        {/* <Test chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/> */}
      </div>
      <div className="col-md-4 mt-3">
        <div></div>
 
    <div className="info-box mb-3 bg-warning">
      <span className="info-box-icon"><i className="fas fa-list text-white" /></span>
      <div className="info-box-content">
        <span className="info-box-text text-white">Total des congés</span>
    <span className="info-box-number text-white">{this.state.totcong}</span>
      </div>
    </div>
    <div className="info-box mb-3 bg-success">
      <span className="info-box-icon"><i className="far fa-check-square" /></span>
      <div className="info-box-content">
        <span className="info-box-text">Congés Accéptés</span>
    <span className="info-box-number">{this.state.valide}</span>
      </div>
    </div>
    <div className="info-box mb-3 bg-danger">
      <span className="info-box-icon"><i className="far fa-window-close" /></span>
      <div className="info-box-content">
        <span className="info-box-text">Congés Annulés</span>
        <span className="info-box-number">{this.state.annule}</span>
      </div>
    </div>
    <div className="info-box mb-3 bg-info">
      <span className="info-box-icon"><i className="fas fa-pause-circle" /></span>
      <div className="info-box-content">
        <span className="info-box-text">Congés à Valider</span>
        <span className="info-box-number">{this.state.nouve}</span>
      </div>
    </div>
   </div>
   </div>
   </div>
        </section>

        <Menu />
        <Footer />
      </div>
    )
  }
}

export default Statistiques;
