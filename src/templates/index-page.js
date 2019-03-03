import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import HomeHero from '../components/hero/homeHero';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';

export const IndexPageTemplate = () => (
  <Fragment>
    <HomeHero />
    <Skills />
    <Testimonials />
  </Fragment>
);

const IndexPage = () => (
  <Layout>
    <IndexPageTemplate />
  </Layout>
);

export default IndexPage;
