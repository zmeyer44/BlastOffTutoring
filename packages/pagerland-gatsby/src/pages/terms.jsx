import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-sticky-el';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/Startup';
import { NavbarAlt, Copyright, Terms } from '@pagerland/themes/src/Startup/containers';

import preview from '@pagerland/themes/src/Startup/assets/preview.png';

import SEO from '../components/SEO';

const TermsAndConditions = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Terms" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <NavbarAlt />
    </Sticky>

    <Terms />

    <Copyright />
  </Theme>
);

TermsAndConditions.propTypes = {
  url: PropTypes.string,
};

TermsAndConditions.defaultProps = {
  url: 'https://pager.land/gatsby/',
};

export default TermsAndConditions;
