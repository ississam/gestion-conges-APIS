import React, {Component} from 'react';
import { CubeGrid  } from 'styled-loaders-react';
import {Pie} from 'react-chartjs-2';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'  
// import { BounceLoader, BarLoader, BeatLoader} from 'react-spinners'
// import {CubeGrid} from 'styled-loaders-react';

import axios from 'axios';
// import './index.css'
// import { css } from '@emotion/core' 

class Test extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{},
      liste: [],
      valide: 0,
      annule: 0,
      nouve: 0,
      loading:true
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }
 

//   componentDidMount(){
//     this.getChartData();  
//  }
componentDidMount(){
 
    // this.getchartData(); // this should be this.getChartData();
    let cancel = 0;
        let validate = 0;
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
        console.log("AAA", this.state.annule);
         const data1=res.data.conges.filter(d => d.val==='V');
        data1.forEach(el => {
          validate += parseInt(el.val.length);
        });
        this.setState({valide:validate})
        console.log('BBB',this.state.valide)
      
        const data2=res.data.conges.filter(t => !t.val);
        console.log("resssdata",data2)
        console.log("emty data",data2.length)
        // data2.forEach(ne => {
        //   newc += parseInt(ne.val.length);
        // });
        newc=data2.length;
        this.setState({nouve:newc})
        console.log('CCC',this.state.nouve)
           
    /////////////////


    this.setState({
        chartData:{
          labels: ['Congés validé', 'en cours ', 'Annulé', 'A valide'],
          datasets:[
            {
              label:'Population',
              data:[
                validate,
                cancel,
                validate ,
                
       
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              //   'rgba(153, 102, 255, 0.6)',
              //   'rgba(255, 159, 64, 0.6)',
              //   'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      });
    this.setState({ loading:false})
        }
        
)
this.getChartData();

}
    //  this.getChartData();
//    }

  getChartData(){
    //   const nouvl =this.state.nouve;
    //   console.log('thhhis',this.state.nouve)
    //   console.log('nnn',nouvl)
    //   const anul = this.state.annule;
    //   const validation = this.state.valide;
    //   console.log('nou',nouvl)
    //   console.log('annule',anul)
    //   console.log('valide',validation)
    // Ajax calls here
    // var vt =  this.state.valide;
  
  }

  render(){
    return (
     
      <div className="chart">
        
           {
             this.state.loading? '<h1>ss</h1>' :<CubeGrid color="#28A745" size="300px"  /> 
           }
   
     
      <Pie
             data={this.state.chartData}
             options={{
               title:{
                 display:this.props.displayTitle,
                 text:'Largest Cities In '+this.props.location,
                 fontSize:25
               },
               legend:{
                 display:this.props.displayLegend,
                 position:this.props.legendPosition
               }
             }}
           />
      </div>
    )
  }
}

export default Test;