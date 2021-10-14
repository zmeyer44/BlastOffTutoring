import React from 'react';
import { SchoolsWrapper } from './styled.components';
import Img from '@pagerland/common/src/components/Img';
import Link from '@pagerland/common/src/components/Link';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import data from '../../data';

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1100 },
    items: 6,
  },
  smallDesktop: {
    breakpoint: { max: 1100, min: 750 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 750, min: 550 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 2,
  },
};

const Schools = ({ SchoolIconProps, supporters }) => {
  return (
    <SchoolsWrapper>
      <Carousel
        ifEmpty={<h1>Loading</h1>}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={false}
        responsive={responsive}
        partialVisbile
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['largeDesktop', 'smallDesktop', 'desktop', 'tablet', 'mobile']}
        autoPlay
      >
        {supporters.map((school, key) => (
          <div className="school" key={key}>
            <Link href={school.link}>
              <Img src={school.image} {...SchoolIconProps} />
            </Link>
          </div>
        ))}
      </Carousel>
    </SchoolsWrapper>
  );
};

Schools.defaultProps = {
  SchoolIconProps: {
    display: 'block',
    mx: 'auto',
    mb: 3,
    height: 70,
  },

  ...data.supporters,
};

export default Schools;
