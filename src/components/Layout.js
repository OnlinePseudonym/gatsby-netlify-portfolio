import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import './css/normalize.css';
import './css/base.css';

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  box-shadow: 0 16px 48px #e7ebf6;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        {/* <Navbar /> */}
        <Header />
        <div>{children}</div>
        <Footer />
      </Wrapper>
    )}
  />
);

export default TemplateWrapper;
