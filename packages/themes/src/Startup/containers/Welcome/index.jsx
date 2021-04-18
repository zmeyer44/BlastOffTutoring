import React from 'react';
import PropTypes from 'prop-types';
import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';
import data from '../../data';

import Img from 'gatsby-image';
import { ContainerWithBackground } from './styled.components';
import Squares from './Squares';

const Welcome = ({
  name,
  title,
  text,
  img,
  actions,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ActionButtonsProps,
  ImageWrapperProps,
  ImageProps,
  fluid,
}) => (
  <Box name={name} {...WrapperProps}>
    <ContainerWithBackground {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Box {...ActionButtonsProps}>
            {actions.map(({ label, ...props }, key) => (
              <Button {...props} key={key}>
                {label}
              </Button>
            ))}
          </Box>
        </Fade>
      </Box>
      <Box {...ImageWrapperProps}>
        <Squares />
        <Fade cascade duration={600}>
          <Img fluid={fluid} {...ImageProps} />
        </Fade>
      </Box>
    </ContainerWithBackground>
  </Box>
);

Welcome.propTypes = {
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
   * Wrapper with action buttons
   * @See @pagerland/common/src/components/Box
   */
  ActionButtonsProps: PropTypes.object,
  /**
   * Wrapper for image
   * @See @pagerland/common/src/components/Box
   */
  ImageWrapperProps: PropTypes.object,
  /**
   * Welcome image props
   * @See @pagerland/common/src/components/Img
   */
  ImageProps: PropTypes.object,

  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Img details
   */
  img: PropTypes.object,
  /**
   * Action buttons
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
};

Welcome.defaultProps = {
  WrapperProps: {
    py: 4,
    pb: {
      _: 0,
      lg: 60,
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: {
      _: 'column',
      ml: 'row',
    },
    minWidth: {
      ml: 900,
    },
  },

  CaptionProps: {
    my: {
      _: 30,
      lg: 135,
    },
    maxWidth: 448,
  },
  TitleProps: {
    as: 'h1',
    variant: 'h1',
    mb: 4,
    mx: 'auto',
    color: 'white',
  },
  TextProps: {
    variant: 'body1',
    color: 'white',
  },
  ActionButtonsProps: {
    mt: 4,
  },
  ImageWrapperProps: {
    zIndex: 4,
    position: 'relative',
    my: {
      _: 90,
      lg: 0,
    },
    overflow: {
      _: 'hidden',
      md: 'visible',
    },
    minWidth: {
      _: 544,
      ml: 400,
      lg: 544,
    },
  },
  ImageProps: {
    width: '100%',
    minWidth: {
      _: 544,
      ml: 400,
      lg: 544,
    },
  },
  ...data.welcome,
};

export default Welcome;
