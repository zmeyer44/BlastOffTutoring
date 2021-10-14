import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-sticky-el';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/Startup';
import {
  Navbar,
  Copyright,
  Welcome,
  Services,
  About,
  Team,
  Features,
  Pricing,
  Blog,
  Contact,
  ScrollUp,
  Schools,
} from '@pagerland/themes/src/Startup/containers';

import preview from '@pagerland/themes/src/Startup/assets/preview.png';

import SEO from '../components/SEO';

const Startup = props => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${props.url}${preview}`} />
    </Helmet>
    <SEO title="Home" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar />
    </Sticky>

    <Welcome name="" fluid={props.data.imageOne.childImageSharp.fluid}>
      {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}
    </Welcome>
    <Services name="services" />
    <Schools name="schools" />
    <Features name="features" />
    <Team name="team" />
    <About name="about" />
    {/* <Pricing name="pricing" /> */}
    {/* <Blog name="blog" /> */}
    <Contact name="contact" />

    <ScrollUp scrollStepInPx="100" delayInMs="10.50" />

    <Copyright />
  </Theme>
);

Startup.propTypes = {
  url: PropTypes.string,
};

Startup.defaultProps = {
  url: 'https://www.blastofftutoring.com/',
};

export default Startup;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "hero3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;
