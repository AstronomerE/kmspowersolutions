/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

export default function About() {
  return (
    <>
      <Container id='about'>
        <Row className='p-3 about-row'>
          <Col id='side-bar'>
            <p className='about'>
              KMS POWER SOLUTIONS UGANDA LIMITED is a private limited company
              that started its operations in 2003 under the business name KMS
              INSIDE SANDON AGENCIES CHANGED and later was incorporated and
              registered to the current name in 2007.
            </p>
            <p className='about'>
              Our main product line from the start has been providing the most
              trusted generators from the world over but due to consumer demand,
              changing business trend and technologies we have widened our
              products scope to water pumps, agro machinery, Irrigation systems,
              construction and garage equipment, cleaning equipment, forestry
              machinery, etc from the best brands like SDMO, elemax, Honda,
              Loncin, Pedrollo, Koshin, Covax, Jiang Dong etc.
            </p>
            <p className='about'>
              KMS Power Solutions has all the committed to providing the best to
              her customers in a timely manner at the best budget price with her
              qualified and very experienced staff.
            </p>
          </Col>
          <Col className='p-4'>
            <img src='../../images/bombo.jpg' className='img-fluid about-img' />
          </Col>
        </Row>
      </Container>
    </>
  );
}
