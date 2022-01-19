import React from 'react';
import { smoothLinkProps } from '@pagerland/common/src/utils';
import { Link } from 'gatsby';

import NHS from './assets/supporters/nhs.png';
import CBS from './assets/supporters/cbs.png';
import ABC from './assets/supporters/abc7.png';
import Newsday from './assets/supporters/newsday.png';
import NYSED from './assets/supporters/nysed.png';
import NASSP from './assets/supporters/nassp.svg';
import JA from './assets/supporters/JA-01.png';
import BOCES from './assets/supporters/BOCES.png';
import NATSTUCO from './assets/supporters/natstuco.svg';

export default {
  supporters: {
    title: 'Our supporters',
    supporters: [
      {
        image: NHS,
        link: 'https://www.nhs.us/2021/05/26/morning-announcements-summer-2021/',
      },
      {
        image: ABC,
        link: 'https://abc7ny.com/covid-pandemic-online-tutoring-blastoff-blast-off/11375990/',
      },
      {
        image: CBS,
        link:
          'https://newyork.cbslocal.com/2021/01/08/long-island-teen-builds-peer-tutoring-website-to-streamline-learning-during-pandemic/',
      },
      {
        image: Newsday,
        link:
          'https://www.newsday.com/long-island/education/way-to-go-student-launches-tutoring-website-1.50156880',
      },
      {
        image: NYSED,
        link:
          'http://www.nysed.gov/curriculum-instruction/staying-connected-your-stories-april-30-2021',
      },
      {
        image: NASSP,
        link:
          'https://www.nassp.org/2021/10/12/virtual-tutoring-program-fills-a-need-for-many-students/',
      },
      {
        image: NATSTUCO,
        link: 'https://www.natstuco.org/',
      },
      {
        image: JA,
        link: 'https://jausa.ja.org/',
      },
      {
        image: BOCES,
        link: 'https://www.boces.org/',
      },
    ],
    cta: {
      label: 'Learn More',
      to: 'features',
    },
  },
};
