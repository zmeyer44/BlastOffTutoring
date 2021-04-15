import styled from 'styled-components';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import circle from '../../assets/circle.png';

export const ContainerWithBackground = styled(Container)`
  position: relative;
  &::before {
    content: ' ';
    width: 100vw;
    height: 950px;
    position: absolute;
    top: -200px;
    z-index: -1;
    border-radius: 2rem;
    transform: none;
    background: radial-gradient(circle, rgb(254, 69, 117) 0%, rgb(254, 114, 69) 100%) 650px bottom /
      100%;
  }

  @media screen and (min-width: 1024px) {
    &::before {
      right: 40%;
      transform: skew(-23deg, 0deg) rotate(-10deg);
    }
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    z-index: -1;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 600px;
    background: url(${circle}) center center / contain no-repeat;
    opacity: 0.1;
  }
`;

export const RoundedImage = styled(Img)`
  border-radius: 128px 0;
`;
