import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Icon from '@pagerland/common/src/components/Icon';
import Grid from '@pagerland/common/src/components/Grid';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';

import data from '../../data';
import LanderPagerLogo from '../../components/Logo';

const Footer = ({
  name,
  Logo,
  WrapperProps,
  GridProps,
  HeadingsProps,
  TypographyProps,
  LogoProps,
  SocialLinkProps,
  IconProps,
  CtaProps,
  section1,
  contact,
  section3,
  socialLinks,
}) => (
  <Box {...WrapperProps} name={name}>
    <Container>
      <Grid {...GridProps}>
        <Box>
          <Fade bottom cascade duration={600}>
            <div>
              <Logo {...LogoProps} />
              <Typography {...TypographyProps}>{section1.text}</Typography>
            </div>
          </Fade>
          <Box flexBox mt={4}>
            {socialLinks?.map((socialLink, key) => (
              <Fade left duration={600} key={socialLink.title} distance="10px" delay={100 * key}>
                <Button as="a" href={socialLink.href} title={socialLink.title} {...SocialLinkProps}>
                  <Icon icon={socialLink.icon} />
                </Button>
              </Fade>
            ))}
          </Box>
        </Box>
        <Box>
          <Fade bottom cascade duration={600}>
            <div>
              <Typography {...HeadingsProps}>{contact.title}</Typography>
              {contact.sections?.map((section, key) => (
                <Box flexBox mb={3} key={key}>
                  <Icon icon={section.icon} {...IconProps} />
                  <Typography {...TypographyProps}>{section.text}</Typography>
                </Box>
              ))}
            </div>
          </Fade>
        </Box>
        <Box>
          <Fade bottom cascade duration={600}>
            <div>
              <Typography {...HeadingsProps}>{section3.title}</Typography>
              <Typography {...TypographyProps} width={270}>
                {section3.text}
              </Typography>
            </div>
            <Button as="a" href={section3.cta.href} title={section3.cta.text} {...CtaProps}>
              {section3.cta.text}
            </Button>
          </Fade>
        </Box>
      </Grid>
    </Container>
  </Box>
);

Footer.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Footer grid props
   * @See @pagerland/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Heading text props
   * @See @pagerland/common/src/components/Typography
   */
  HeadingsProps: PropTypes.object,
  /**
   * Props of typography used for texts in whole footer
   * @See @pagerland/common/src/components/Typography
   */
  TypographyProps: PropTypes.object,
  /**
   * Logo element additional props
   */
  LogoProps: PropTypes.object,
  /**
   * Social link element props
   */
  SocialLinkProps: PropTypes.object,
  /**
   * Footer icons props
   */
  IconProps: PropTypes.object,
  /**
   * Props of CTA Button
   */
  CtaProps: PropTypes.object,
  /**
   * Logo element
   */
  Logo: PropTypes.elementType,
  /**
   * First section of the footer details
   */
  section1: PropTypes.shape({
    text: PropTypes.string,
  }),
  /**
   * Contact sections details
   */
  contact: PropTypes.shape({
    title: PropTypes.node,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType,
        text: PropTypes.node,
      }),
    ),
  }),
  /**
   * Last section of the footer details
   */
  section3: PropTypes.shape({
    title: PropTypes.node,
    text: PropTypes.string,
    cta: PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
    }),
  }),
  /**
   * Social links showed in first section
   */
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      href: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

Footer.defaultProps = {
  WrapperProps: {
    mt: {
      _: 30,
      lg: 60,
    },
    py: {
      _: 4,
      sm: 5,
    },
    backgroundColor: 'gray.6',
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: 32,
  },
  HeadingsProps: {
    variant: 'h4',
    as: 'h4',
    color: 'black',
    mb: {
      _: 3,
      md: 42,
    },
  },
  TypographyProps: {
    color: 'gray.1',
  },
  LogoProps: {
    mb: 30,
  },
  SocialLinkProps: {
    color: 'primary',
    borderWidth: 1,
    borderColor: 'primary',
    borderStyle: 'solid',
    borderRadius: '50%',
    p: 0,
    mr: 2,
    width: 50,
    height: 50,
    lineHeight: '50px',
    textAlign: 'center',
    fontSize: 24,
  },
  IconProps: {
    color: 'primary',
    fontSize: 24,
    mr: 3,
  },
  CtaProps: {
    variant: 'primary',
    mt: 4,
  },
  Logo: LanderPagerLogo,
  ...data.footer,
  socialLinks: data.socialLinks,
};

export default Footer;
