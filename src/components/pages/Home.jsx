/** @format */
import React from "react";
import "../../App.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../App.scss";
import ScrollToTop from "./Scrollbtn";
import ImageSlider from "../Slider";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <div className='container' id='jumbotron'>
        <div className='row p-5 m-5'>
          <div className='col-md-6'>
            <h4 className='text-danger display-5'>Our Vision</h4>
            <p>
              To be the leading supplier of Power solutions and Machinery in
              Uganda and world over
            </p>
            <h4 className='text-danger display-5'>Our Mission</h4>
            <p>
              To provide the best quality products on the market that can serve
              and satisfy our customers' intended purpose
            </p>
            <h4 className='text-danger display-5'>Our Motto</h4>
            <p>Instant and constant power at Budget price</p>
          </div>
          <div className='col-md-6 p-4'>
            <h4 className='text-danger display-5'>Values</h4>
            <ul>
              <li>Quality</li>
              <li>Integrity</li>
              <li>Trust</li>
              <li>Affordability</li>
              <li>Customer Commitment</li>
              <li>Constant Improvement</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </div>
      <Container id='about'>
        <Row id='about-row'>
          <Col className='p-4'>
            <h1 className='slider_title'>About Us</h1>
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
          <Col>
            <img src='../../images/bombo.jpg' className='img-fluid abt-img' />
          </Col>
        </Row>
      </Container>
      <div className='container padding p-5'>
        <div className='row padding'>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Grass Cutter</h4>
            </div>
            <div>
              <img
                className='card-img-top img-fluid'
                src='../../images/grass.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Water Pump</h4>
            </div>
            <div>
              <img
                className='card-img-top img-fluid'
                src='../../images/irr.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Solar System</h4>
            </div>
            <div>
              <img
                className='card-img-top img-fluid'
                src='../../images/images.jpeg'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='row padding'>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Honda Generator</h4>
            </div>
            <div>
              <img
                className='card-img-top img-fluid'
                src='../../images/Honda Log.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Nivigator Generators</h4>
            </div>
            <div>
              <img
                className='card-img-top img-fluid'
                src='../../images/nivigatorlog.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Home Generator</h4>
            </div>
            <div className='cont'>
              <img
                className='card-img-top img-fluid'
                src='../../images/gen2.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='row padding'>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Driller</h4>
            </div>
            <div>
              <img
                className='card-img-top img-fluid'
                src='../../images/driller2.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Sprinkler</h4>
            </div>
            <div>
              <img
                className='card-img-top img-fluid'
                src='../../images/sprink.jpeg'
                alt=''
                roundedCircle
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='txt'>
              <h4 className='card-title text-dark'>Standby Generator</h4>
            </div>
            <div>
              <img
                className='card-img-top img-fluid'
                src='../../images/power2.jpeg'
                alt=''
                roundedCircle
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
