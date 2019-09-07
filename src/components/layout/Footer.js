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
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20width%3D%221440%22%20height%3D%22267%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.338.842C167.455%2083.394%20647.342%2083.394%201440%20.842V267H.338C-166.78%207.01-166.78-81.71.338.842z%22%20fill%3D%22%2314788a%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
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

  $ a, a:visited, a:active {
    color: inherit;
  }
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
              fontFamily: 'Frank Ruhl Libre,serif',
              color: '#ffffff'
            }}
          >
            KTR
          </Link>
        </FooterBrand>
        <FooterLinks>
          <li>
            <Link
              to="/contact"
              style={{
                textDecoration: 'none',
                color: '#ffffff'
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <a href="mailto:admin@kevintreynolds.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ffffff' }}>Support</a>
          </li>
        </FooterLinks>
        <FooterSocial>
          <li style={{ padding: '0.8rem', color: '#ffffff' }}>
            <Link to="#">
              <span className="screen-reader-text">Github</span>
              <svg height="32px" width="32px" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
              </svg>
            </Link>
          </li>
          <li style={{ padding: '0.8rem', color: '#ffffff' }}>
            <Link to="#">
              <span className="screen-reader-text">LinkedIn</span>
              <svg height="32px" width="32px" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </Link>
          </li>
        </FooterSocial>
        <FooterCopyright as="div">&copy; { new Date().getFullYear() }, all rights reserved</FooterCopyright>
      </Content>
    </div>
  </Outer>
);

export default Footer;
