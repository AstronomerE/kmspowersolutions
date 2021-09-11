/** @format */

import React from "react";
import Icon from "../components/icons";
import Footer from "../components/footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href='#'>Story</Footer.Link>
            <Footer.Link href='#'>Clients</Footer.Link>
            <Footer.Link href='#'>Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href='#'>Marketing</Footer.Link>
            <Footer.Link href='#'>Consulting</Footer.Link>
            <Footer.Link href='#'>Development</Footer.Link>
            <Footer.Link href='#'>Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href='#'>Uganda</Footer.Link>
            <Footer.Link href='#'>Kenya</Footer.Link>
            <Footer.Link href='#'>Rwanda</Footer.Link>
            <Footer.Link href='#'>Support</Footer.Link>
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
              <Icon className='fab fa-youtube' />
              Youtube
            </Footer.Link>
            <Footer.Link href='#'>
              <Icon className='fab fa-twitter' />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
