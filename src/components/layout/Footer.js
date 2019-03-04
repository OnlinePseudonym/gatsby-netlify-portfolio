import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Outer = styled.footer`
  margin-top: 8rem;
  position: relative;
  font-size: 1.4rem;
  line-height: 22px;
  letter-spacing: 0;
  color: #ffffff;

  @media (min-width: 641px) {
    margin-top: 11.6rem;
  }

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20width%3D%221440%22%20height%3D%22267%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.338.842C167.455%2083.394%20647.342%2083.394%201440%20.842V267H.338C-166.78%207.01-166.78-81.71.338.842z%22%20fill%3D%22%23a113ec%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    background-size: 1440px 300px;
    background-repeat: no-repeat;
    @media (min-width: 641px) {
      height: 267px;
      background-size: 1440px 267px;
    }
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 641px) {
    justify-content: space-between;
  }
`;

const FooterBrand = styled.div`
  margin-bottom: 2.4rem;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  margin-bottom: 2.4rem;

  @media (min-width: 641px) {
    justify-content: flex-start;
    flex: 50%;
  }
`;

const FooterSocial = styled.ul`
  flex: none;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  margin-bottom: 2.4rem;
  margin-left: 0;
  list-style: none;

  & li {
    margin-bottom: 0;
  }

  & li + li {
    margin-left: 1.6rem;
  }

  @media (min-width: 641px) {
    justify-content: flex-end;
    flex: 50%;
  }
`;

const FooterLinks = styled(FooterSocial)`
  @media (min-width: 641px) {
    order: 1;
    margin-bottom: 0;
  }
`;
const FooterCopyright = styled(FooterSocial)`
  margin-bottom: 0;

  @media (min-width: 641px) {
    justify-content: flex-start;
  }
`;

const Footer = ({ siteTitle }) => (
  <Outer>
    <div className="container">
      <Content>
        <FooterBrand>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              fontSize: '3.6rem',
              fontWeight: '600',
              fontFamily: 'Frank Ruhl Libre,serif'
            }}
          >
            KTR
          </Link>
        </FooterBrand>
        <FooterLinks>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: 'none'
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: 'none'
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: 'none'
              }}
            >
              FAQ's
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: 'none'
              }}
            >
              Support
            </Link>
          </li>
        </FooterLinks>
        <FooterSocial>
          <li style={{ padding: '0.8rem' }}>
            <Link to="#">
              <span className="screen-reader-text">Facebook</span>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                  fill="#ffffff"
                />
              </svg>
            </Link>
          </li>
          <li style={{ padding: '0.8rem' }}>
            <Link to="#">
              <span className="screen-reader-text">Twitter</span>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                  fill="#ffffff"
                />
              </svg>
            </Link>
          </li>
          <li style={{ padding: '0.8rem' }}>
            <Link to="#">
              <span className="screen-reader-text">Google</span>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                  fill="#ffffff"
                />
              </svg>
            </Link>
          </li>
        </FooterSocial>
        <FooterCopyright as="div">&copy; 2018 Florencia, all rights reserved</FooterCopyright>
      </Content>
    </div>
  </Outer>
);

export default Footer;
