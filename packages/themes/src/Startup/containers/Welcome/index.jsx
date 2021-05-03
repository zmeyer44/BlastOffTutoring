import React from 'react';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';
import data from '../../data';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { ContainerWithBackground } from './styled.components';
import Squares from './Squares';
import './style.css';
import './modal.css';

const Welcome = ({
  name,
  title,
  text,
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
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box name={name} {...WrapperProps}>
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="FvWvZOf2alk"
        onClose={() => setIsOpen(!isOpen)}
      />
      <ContainerWithBackground {...ContainerProps}>
        {/* <Squares /> */}
        <Box {...ImageWrapperProps}>
          <Fade cascade duration={600}>
            <Img fluid={fluid} {...ImageProps} className="shadow" />
          </Fade>
        </Box>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <h4>Advanced Platform</h4>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...TextProps}>{text}</Typography>
            <Box {...ActionButtonsProps}>
              {actions.map(({ label, ...props }, key) => (
                <Button {...props} key={key}>
                  {label}
                </Button>
              ))}
              <Link
                to="#"
                onClick={e => {
                  e.preventDefault();
                  openModal();
                }}
                className="video-btn popup-youtube"
              >
                <svg
                  version="1.1"
                  id="play"
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  width="50px"
                  viewBox="0 0 100 100"
                >
                  <path
                    class="stroke-solid"
                    fill="none"
                    stroke="#ffffff"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
                  />
                  <path
                    class="icon"
                    fill="#ffffff"
                    d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                  />
                </svg>{' '}
                <span className="play-text">Watch Video</span>
              </Link>
            </Box>
          </Fade>
        </Box>
      </ContainerWithBackground>
    </Box>
  );
};

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
      ml: 160,
    },
    pt: '5rem',
    px: {
      _: 0,
      ml: '2rem',
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    flexDirection: {
      _: 'column-reverse',
      ml: 'row-reverse',
    },
    minWidth: {
      ml: 900,
    },
    maxWidth: '1240px',
    width: {
      _: '100vw !important',
    },
  },

  CaptionProps: {
    flexBasis: `40%`,
    textAlign: {
      _: 'center',
      ml: 'left',
    },
    mb: {
      _: 60,
      lg: 0,
    },
  },
  TitleProps: {
    as: 'h1',
    variant: 'title',
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
    flexBasis: {
      _: null,
      ml: '60%',
    },
    ml: {
      _: null,
      ml: '4rem',
    },
    textAlign: 'center',

    width: '100%',
    maxWidth: {
      _: 544,
      ml: 600,
    },
  },
  ImageProps: {
    width: '100%',
  },
  ...data.welcome,
};

export default Welcome;
