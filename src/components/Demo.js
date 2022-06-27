import React from "react";
import {Container,Row,Col} from "react-bootstrap";
// import Row from 'react-bootstrap'
import { Grid, Box, Hidden } from "@mui/material";

function Demo() {
  return (
    <>
     <Container>
      <Row className="mt-2 gy-2 gx-sm-2 ">
        <Col md={3} sm={6} xs={12} className='bg-danger  px-2  text-center text-capitalize' >box1</Col>
        <Col md={3} sm={6} xs={12} className='bg-info mb-1 text-center text-capitalize'>box2</Col>
        <Col md={3} sm={6} xs={12} className='bg-success ml-1 text-white p-2 text-center text-capitalize'>box3</Col>
        <Col md={3} sm={6} xs={12} className='bg-dark ml-1 text-center p-2 text-white text-capitalize'>box4</Col>
      </Row>
      <Row className="mt-2 gy-4  gx-4">
        <Col md={3} sm={6} xs={12} className='bg-danger p-2 text-center text-capitalize' >box1</Col>
        <Col md={3} sm={6} xs={12} className='bg-info text-center text-capitalize'>box2</Col>
        <Col md={3} sm={6} xs={12} className='bg-success text-white p-2 text-center text-capitalize'>box3</Col>
        <Col md={3} sm={6} xs={12} className='bg-dark text-center p-2 text-white text-capitalize'>box4</Col>
      </Row>
     </Container>
    </>
  );
}

export default Demo;
