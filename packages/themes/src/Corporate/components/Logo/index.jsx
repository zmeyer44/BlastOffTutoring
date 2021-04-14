import React from 'react';
import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

const Svg = styled.svg`
  display: block;
  ${base};
`;

const Logo = props => (
  <Svg
    viewBox="0 0 148 40"
    width="148"
    height="40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M49.224 14.4H53.418C54.906 14.4 56.034 14.742 56.802 15.426C57.57 16.098 57.954 17.094 57.954 18.414C57.954 19.806 57.558 20.868 56.766 21.6C55.986 22.32 54.84 22.68 53.328 22.68H51.816V27H49.224V14.4ZM53.544 20.628C54.168 20.628 54.636 20.448 54.948 20.088C55.272 19.716 55.434 19.182 55.434 18.486C55.434 17.826 55.26 17.328 54.912 16.992C54.576 16.644 54.072 16.47 53.4 16.47H51.816V20.628H53.544ZM65.1138 24.912H60.7758L60.1458 27H57.4458L61.8018 14.4H64.0878L68.4438 27H65.7438L65.1138 24.912ZM64.4838 22.842L62.9538 17.802L61.4058 22.842H64.4838ZM79.579 20.16V27H77.617L77.383 26.298C76.567 26.886 75.619 27.18 74.539 27.18C72.871 27.18 71.575 26.61 70.651 25.47C69.727 24.33 69.265 22.74 69.265 20.7C69.265 19.392 69.505 18.252 69.985 17.28C70.465 16.296 71.143 15.54 72.019 15.012C72.895 14.484 73.921 14.22 75.097 14.22C76.117 14.22 77.005 14.418 77.761 14.814C78.529 15.198 79.087 15.738 79.435 16.434L77.959 17.73C77.659 17.262 77.263 16.908 76.771 16.668C76.291 16.416 75.739 16.29 75.115 16.29C74.059 16.29 73.249 16.668 72.685 17.424C72.133 18.18 71.857 19.272 71.857 20.7C71.857 22.2 72.115 23.34 72.631 24.12C73.147 24.888 73.897 25.272 74.881 25.272C75.673 25.272 76.387 25.08 77.023 24.696V21.996H74.287V20.16H79.579ZM81.6908 14.4H90.0608V16.47H84.2828V19.35H89.4308V21.42H84.2828V24.93H90.0608V27H81.6908V14.4ZM91.974 14.4H96.42C97.848 14.4 98.916 14.694 99.624 15.282C100.332 15.858 100.686 16.734 100.686 17.91C100.686 18.738 100.512 19.446 100.164 20.034C99.816 20.622 99.312 21.048 98.652 21.312V21.348C98.88 21.516 99.054 21.678 99.174 21.834C99.306 21.978 99.414 22.146 99.498 22.338L101.352 27H98.598L97.158 23.166C97.014 22.782 96.828 22.53 96.6 22.41C96.372 22.278 95.976 22.212 95.412 22.212H94.566V27H91.974V14.4ZM96.15 20.16C96.81 20.16 97.308 19.998 97.644 19.674C97.992 19.338 98.166 18.852 98.166 18.216C98.166 17.052 97.482 16.47 96.114 16.47H94.566V20.16H96.15ZM102.697 14.4H105.289V24.93H111.229V27H102.697V14.4ZM119.588 24.912H115.25L114.62 27H111.92L116.276 14.4H118.562L122.918 27H120.218L119.588 24.912ZM118.958 22.842L117.428 17.802L115.88 22.842H118.958ZM134.54 14.4V27H132.146L126.98 18.72V27H124.406V14.4H126.908L131.966 22.554V14.4H134.54ZM136.992 14.4H141.492C144.936 14.4 146.658 16.422 146.658 20.466C146.658 22.026 146.466 23.286 146.082 24.246C145.698 25.194 145.092 25.89 144.264 26.334C143.448 26.778 142.362 27 141.006 27H136.992V14.4ZM141.276 24.93C141.96 24.93 142.506 24.78 142.914 24.48C143.322 24.18 143.616 23.706 143.796 23.058C143.988 22.41 144.084 21.546 144.084 20.466C144.084 19.038 143.88 18.018 143.472 17.406C143.064 16.782 142.386 16.47 141.438 16.47H139.584V24.93H141.276Z"
      fill="currentColor"
    />
    <path
      d="M25.61 7.62337C25.61 11.8336 19.4636 20.4878 19.4636 20.4878C19.4636 20.4878 13.3172 11.8336 13.3172 7.62337C13.3172 3.4131 16.0691 0 19.4636 0C22.8582 0 25.61 3.4131 25.61 7.62337Z"
      fill="#23C577"
    />
    <path
      d="M14.3416 34.1917C14.3416 30.9839 18.9514 24.3902 18.9514 24.3902C18.9514 24.3902 23.5612 30.9839 23.5612 34.1917C23.5612 37.3995 21.4974 40 18.9514 40C16.4055 40 14.3416 37.3995 14.3416 34.1917Z"
      fill="#23C577"
    />
    <path
      d="M31.8688 21.2307C28.9875 22.815 20.7521 22.2564 20.7521 22.2564C20.7521 22.2564 24.3618 15.1847 27.2431 13.6004C30.1244 12.0161 33.4957 12.4398 34.7731 14.5469C36.0504 16.654 34.7502 19.6464 31.8688 21.2307Z"
      fill="#2EFF9B"
    />
    <path
      d="M5.38792 25.4871C8.36358 23.851 16.8686 24.4279 16.8686 24.4279C16.8686 24.4279 13.1407 31.7311 10.1651 33.3673C7.18942 35.0035 3.70777 34.5658 2.3886 32.3898C1.06942 30.2137 2.41226 27.1233 5.38792 25.4871Z"
      fill="#2EFF9B"
    />
    <path
      d="M28.4598 34.134C25.0816 32.2765 20.8495 23.9853 20.8495 23.9853C20.8495 23.9853 30.505 23.3303 33.8832 25.1878C37.2614 27.0453 38.7859 30.5538 37.2883 33.0242C35.7907 35.4947 31.838 35.9915 28.4598 34.134Z"
      fill="#157547"
    />
    <path
      d="M11.7312 14.2306C14.2657 15.6242 17.4408 21.8447 17.4408 21.8447C17.4408 21.8447 10.1968 22.3361 7.66228 20.9425C5.12779 19.5489 3.98404 16.9167 5.10763 15.0633C6.23123 13.2098 9.19669 12.837 11.7312 14.2306Z"
      fill="#157547"
    />
  </Svg>
);

export default Logo;