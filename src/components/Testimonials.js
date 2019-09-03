import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

// #region STYLED COMPONENTS
const TESTIMONIAL_QUERY = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        sectionHeading
        testimonials {
          headline
          content
          image {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

const TestimonialSection = styled.section`
  @media (min-width: 1024px) {
    position: relative;

    ::before {
      content: '';
      position: absolute;
      top: 12.7rem;
      left: calc(50% - 53rem);
      width: 107.1rem;
      height: 59.8rem;
      background-image: url("data:image/svg+xml,%3Csvg width='1071' height='598' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M1050.31 592.195c67.01-52.73-56.52-80.78-56.52-217.51 0-136.728 56.52-333-81.69-370.27-138.207-37.27-542.72 172.283-860.347 220.672-317.629 48.388 931.547 419.839 998.557 367.108z' id='a'/%3E%3C/defs%3E%3Cuse fill='%23ff9a29' transform='matrix(-1 0 0 1 1070.358 0)' xlink:href='%23a' fill-rule='evenodd'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-right: -1.2rem;
  margin-left: -1.2rem;
`;
const TestimonialHeader = styled.h2`
  font-size: 4rem;
  margin-bottom: 4.8rem;
  text-align: center;

  @media (min-width: 641px) {
    margin-bottom: 6.4rem;
  }
  @media (min-width: 1024px) {
    margin-bottom: 8rem;
  }
`;
const Testimonial = styled.div`
  padding: 1.2rem;
  width: 34.4rem;
  max-width: 34.4rem;
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;

  :last-child {
    margin-bottom: -1.2rem;
  }

  @media (min-width: 1024px) {
    :first-child {
      margin-top: 13.6rem;
      position: relative;
    }
    :first-child::before {
      content: '';
      display: block;
      position: absolute;
      top: -13.6rem;
      left: calc(50% - 4.4rem);
      width: 8.9rem;
      height: 8.2rem;
      background-image: url(data:image/svg+xml;utf8,%3Csvg%20width%3D%2289%22%20height%3D%2282%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%3Cpath%20fill%3D%22%23830bc3%22%20d%3D%22M84.253%200L60.429%2021.971%2048.362%2051.337%2064.066%2081.16l19.433-19.358-18.414-25.956L88.424%203.729z%22%2F%3E%20%20%20%20%3Cpath%20fill%3D%22%23b935ff%22%20d%3D%22M12.116%2021.959L0%2051.337l15.758%2029.829%2019.374-19.363-18.439-25.957L40.196%203.741%2036.006.01z%22%2F%3E%20%20%3C%2Fg%3E%3C%2Fsvg%3E);
    }

    :last-child {
      margin-top: 4.8rem;
    }
  }
`;
const TestimonialInner = styled.div`
  position: relative;
  dipslay: flex;
  flex-wrap: wrap;
  background: #fff;
  padding: 3.2rem 2.4rem;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 0.8rem 2.4rem rgba(83, 18, 165, 0.11);
    mix-blend-mode: multiply;
  }
`;
const TestimonialImg = styled(Img)`
  width: 56px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.6rem;
  border-radius: 50%;
  box-shadow: 0 1.6rem 2.4rem #ece7e3;
`;
const TestimonialAttribution = styled.div`
  font-weight: 600;
  color: #1d2b4c;
  margin-bottom: 4rem;
`;
// #endregion

const Testimonials = () => (
  <StaticQuery
    query={TESTIMONIAL_QUERY}
    render={data => (
      <TestimonialSection className="container">
        {console.log(data)}
        <div style={{ position: 'relative', paddingBottom: '4.8rem' }}>
          <TestimonialHeader>Testimonials</TestimonialHeader>
          <Wrapper>
            {data.markdownRemark.frontmatter.testimonials.map((testimonial, i) => {
              return (
                <Testimonial key={i}>
                  <TestimonialInner>
                    <div>
                      <TestimonialAttribution>{testimonial.headline}</TestimonialAttribution>
                      <TestimonialImg fluid={testimonial.image.childImageSharp.fluid} />
                      <p style={{ marginBottom: '1.2rem' }}>{testimonial.content}</p>
                    </div>
                  </TestimonialInner>
                </Testimonial>
              );
            })}
          </Wrapper>
        </div>
      </TestimonialSection>
    )}
  />
);

export default Testimonials;
