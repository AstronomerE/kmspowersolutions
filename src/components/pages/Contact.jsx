/** @format */

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Contact.css";

export default function Contact() {
  return (
    <Container id='contact'>
      <Row id="contact-row">
        <Col>
          <Card id='Card'>
            <Card.Img
              src='../../images/gen2.jpg'
              className='img-fluid'
            />
          </Card>
        </Col>
        <Col>
          <h1>Contact Us Today</h1>
          <p>
            <i>
              Send us your questions or concerns and we will give you the help
              you need.
            </i>
          </p>
          <Row>
            <Col>
              <Card className='bg-danger text-light text-center'>
                <Card.Body>
                  <Card.Title className='text-dark'>
                    Call Us By Cell-Phone Number
                  </Card.Title>
                  <hr className='style-double text-light outline-dark' />
                  <Card.Text>+256-777153675</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='bg-danger text-light text-justify'>
                <Card.Body>
                  <Card.Title className='text-dark'>
                    Reach out to Us via e-mail
                  </Card.Title>
                  <hr className='style-double text-light outline-dark' />
                  <Card.Text>kmspowersolutions@hotmail.com</Card.Text>
                  <Card.Text>kmspowersolutions50@gmail.com</Card.Text>
                  <Card.Text>sales@kmspowersolutions.com</Card.Text>
                  <Card.Text>info@kmspowersolutions.com</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
