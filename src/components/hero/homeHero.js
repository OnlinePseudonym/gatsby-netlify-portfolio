import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import HeroShapes from './heroShapes';

const Wrapper = styled.section`
  position: relative;
  text-align: center;
  padding-top: 4rem;

  @media (min-width: 641px) {
    text-align: left;
    padding-top: 9.2rem;
    padding-bottom: 9.2rem;
  }
`;

const Content = styled.div`
  @media (min-width: 641px) {
    display: flex;
  }
`;

const Images = styled.div`
  position: relative;
  margin-top: 124px;
  padding-bottom: 124px;

  @media (min-width: 641px) {
    margin-top: -80px;
    padding-bottom: 0;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  max-width: 36rem;
  height: auto;
  margin: 0 auto;
  overflow: visible;
  transform: rotateY(-15deg);
  border: 2rem solid white;
  box-shadow: 0 0.8rem 2.4rem rgba(120, 13, 254, 0.12);
  right: 2.4rem;
  top: 3rem;

  @media (min-width: 641px) {
    max-width: none;
    width: 46rem;
    right: 3.2rem;
  }
  @media (min-width: 768px) {
    width: 56rem;
    right: 4.8rem;
  }
  @media (min-width: 881px) {
    width: 60rem;
  }
`;

const HeroCopy = styled.p`
  margin-bottom: 3.2rem;
  font-size: 2rem;
`;

const HomeHero = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            subheading
          }
        }
      }
    `}
    render={data => {
      const frontmatter = data.markdownRemark.frontmatter;
      console.log(frontmatter);
      
      return (
        <Wrapper>
          <div className="container">
            <Content>
              <div style={{ paddingRight: '2rem' }}>
                <h1>{frontmatter.heading}</h1>
                <HeroCopy>{frontmatter.subheading}</HeroCopy>
                <p>
                  <Link className="button button-primary button-shadow" to="/">
                    Some CTA text
                  </Link>
                </p>
              </div>
              <Images>
                <HeroShapes />
                <div style={{ perspective: '1000px' }}>
                  <StyledImg fluid={frontmatter.image.childImageSharp.fluid} />
                </div>
              </Images>
            </Content>
          </div>
        </Wrapper>
      )
    }}
  />
);

export default HomeHero;
