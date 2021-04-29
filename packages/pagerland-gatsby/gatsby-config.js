require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Blast Off Tutoring',
    description:
      'We offer free Peer-to-Peer tutoring for students of all ages. Tutors will receive community service credit which can be used for honors societies of college applications.',
    author: 'Blast Off Team',
  },
  pathPrefix: process.env.GATSBY_APP_DIR || '',
  plugins: [
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Blast Off Tutoring',
        short_name: 'Blast Off',
        start_url: '/',
        background_color: `#012466`,
        theme_color: `#012466`,
        display: 'minimal-ui',
        icon: 'src/images/android-chrome-192x192.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-P7JTH3BWWR",
        head: false,
      },
    },
    'gatsby-plugin-offline',
  ],
};
