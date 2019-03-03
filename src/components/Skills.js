import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

import cSharp from '../../static/img/C-Sharp-01.svg';
import js from '../../static/img/javascript-js-seeklogo.com.svg';
import html from '../../static/img/HTML5 Logo Badge.svg';
import css from '../../static/img/CSS3_logo_and_wordmark.svg';
import react from '../../static/img/React-icon.svg';
import vue from '../../static/img/Vue.js_Logo.svg';

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

  @media (min-width: 641px) {
    justify-content: space-around;
  }

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;

    @media (min-width: 641px) {
      width: auto;
    }
  }
`;

const Skills = () => (
  <section className="container">
    <Wrapper>
      <div className="container-sm">
        <SkillList>
          <li />
        </SkillList>
      </div>
    </Wrapper>
  </section>
);

export default Skills;
