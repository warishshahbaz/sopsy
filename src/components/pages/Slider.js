import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../image/img2.png'
import pic3 from '../../image/pic6.png'
import pic2 from '../../image/groc.png'


function Slider() {
  return (
    <>
     <Carousel>
  <Carousel.Item className="slider_item">
    <img
      className="d-block w-100"
      src={pic3}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider_item">
    <img
      className="d-block w-100"
      src={pic1}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider_item">
    <img
      className="d-block w-100"
      src={pic2}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
}

export default Slider;
