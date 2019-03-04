import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (min-width: 641px) {
    padding-top: 2rem;
  }

  @media (min-width: 768px) {
    padding-top: 4rem;
  }

  @media (min-width: 992px) {
    padding-top: 8rem;
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 12rem;

    @media (min-width: 641px) {
      max-width: 18rem;
      padding: 1rem 5rem;
    }
  }
`;

const Skills = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            skills {
              altText
              image
            }
          }
        }
      }
    `}
    render={data => (
      <section className="container">
        {console.log(data)}
        <Wrapper>
          <div className="container-sm">
            <SkillList>
              {data.markdownRemark.frontmatter.skills.map((skill, i) => (
                <li key={i}>
                  <img src={skill.image} alt={skill.altText} />
                </li>
              ))}
            </SkillList>
          </div>
        </Wrapper>
      </section>
    )}
  />
);

export default Skills;
