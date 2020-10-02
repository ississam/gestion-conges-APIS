import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './liste.css'
import Footer from './Footer'
import Menu from './Menu'
import Header from './Header'
export default class Content extends Component {
    
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
            <h3>+nouveau congé</h3>
          </div>
          <div className="card-body">
           <Carousel>
  <Carousel.Item > 
    <img
    width={10}
      className="d-block w-100"
      src="/dist/img/im1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/dist/img/im4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="/dist/img/im6.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

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
            
        
