// import React from 'react';
// import PropTypes from 'prop-types';
// import Sticky from 'react-sticky-el';

// import { Helmet } from 'react-helmet';

// import Theme, { theme } from '@pagerland/themes/src/Startup';
// import { NavbarAlt, Copyright, Apply } from '@pagerland/themes/src/Startup/containers';

// import preview from '@pagerland/themes/src/Startup/assets/preview.png';

// import SEO from '../components/SEO';

// const Application = ({ url }) => (
//   <Theme>
//     <Helmet>
//       <link href={theme.typography.googleFont} rel="stylesheet" />
//       <meta name="theme-color" content={theme.colors.primary} />
//       <meta property="og:image" content={`${url}${preview}`} />
//     </Helmet>
//     <SEO title="Apply" />

//     <Sticky style={{ zIndex: 999, position: 'relative' }}>
//       <NavbarAlt />
//     </Sticky>

//     <Apply name="application" />

//     <Copyright />
//   </Theme>
// );

// Application.propTypes = {
//   url: PropTypes.string,
// };

// Application.defaultProps = {
//   url: 'https://pager.land/gatsby/',
// };

// export default Application;
