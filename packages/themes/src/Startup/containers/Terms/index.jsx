import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';
import Button from '@pagerland/common/src/components/Button';
import Icon from '@pagerland/common/src/components/Icon';

import Link from '@pagerland/common/src/components/Link';
import data from '../../data';

const Terms = ({
  name,
  title,
  text,
  content,
  cta,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ContentProps,
  CtaProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
      <Container {...ContentProps}>
        {content.map((section, key) => (
          <Fade bottom cascade duration={600} delay={key * 100}>
            <h3>{section.heading}</h3>
            <>
              {section.list ? (
                <ul>
                  {section.text.map(element => (
                    <li>{element}</li>
                  ))}
                </ul>
              ) : (
                <p>
                  {section.text.map(element => (
                    <>
                      {element} <br />
                    </>
                  ))}
                </p>
              )}
            </>
          </Fade>
        ))}
      </Container>
      <Fade top cascade duration={600}>
        <Button {...CtaProps} {...cta}>
          {cta.label}
        </Button>
      </Fade>
    </Container>
  </Box>
);

Terms.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Props of services grid wrapper
   * @See @pagerland/common/src/components/Grid
   */
  ContentProps: PropTypes.object,

  CtaProps: PropTypes.object,

  /**
   * Props of person position
   */
  PositionProps: PropTypes.object,
  /**
   * Props of linkedin link icon
   */

  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Cta button details
   */
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
};

Terms.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  CaptionProps: {
    mb: {
      _: 4,
      md: 5,
    },
    mx: 'auto',
    maxWidth: 736,
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 3,
    textAlign: 'center',
  },
  TextProps: {
    color: 'gray.1',
    mb: 4,
  },
  ContentProps: {
    textAlign: 'left',
  },
  NameProps: {
    variant: 'h5',
    color: 'black',
  },
  PositionProps: {
    color: 'gray.1',
    mb: 2,
  },
  CtaProps: {
    textAlign: 'center',
    mx: 'auto',
    variant: 'secondary',
  },

  ...data.terms,
};

export default Terms;
