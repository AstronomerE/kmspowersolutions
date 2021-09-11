/** @format */

import React from "react";
import Footer from "../components/footer/";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href='#'>
              KMS Power Solutions provides the best to her customers in a timely
              manner at the best budget price with her qualified and very
              experienced staff.
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href='#'>Selling</Footer.Link>
            <Footer.Link href='#'>Delivery</Footer.Link>
            <Footer.Link href='#'>Delivery</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href='#'>+256-777153675</Footer.Link>
            <Footer.Link href='#'>kmspowersolutions@hotmail.com</Footer.Link>
            <Footer.Link href='#'>kmspowersolutions50@gmail.com</Footer.Link>
            <Footer.Link href='#'>sales@kmspowersolutions.com</Footer.Link>
            <Footer.Link href='#'>info@kmspowersolutions.com</Footer.Link>
            <Footer.Link href='#'>Kampala City</Footer.Link>
            <Footer.Link href='#'>Bombo Rd</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href='#'>
              <Icon className='fab fa-facebook-f' />
              facebook
            </Footer.Link>
            <Footer.Link href='#'>
              <Icon className='fab fa-instagram' />
              instagram
            </Footer.Link>
            <Footer.Link href='#'>
              <Icon className='fab fa-twitter' />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
      <p className='text-light text-center'>
        <span className='display-6 text-danger'>KMS </span>
        <span className='text-danger'>Power Solutions.</span>
        <sup>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        </sup>
        All Rights Reserved.
        <i>Designed by:</i>Bahindi Emmanuel[+256-773165989]
      </p>
    </Footer>
  );
}
