import { css } from 'styled-components';
import { variant } from '@pagerland/common/src/utils';

import { transparentize } from 'polished';
import { borderRadius, colors, transition } from '../../styles';
import Typography from '../Typography';

export default {
  main: css`
    ${Typography.main};
    ${Typography.variants.button2};

    padding: 11px 48px 12px;
    white-space: nowrap;
    border-radius: ${borderRadius.large}px;
    transition: ${transition.all};

    ${variant({
      prop: 'variant',
      scale: 'Button.variants',
    })}
    ${variant({
      prop: 'size',
      scale: 'Button.sizes',
    })}
    ${variant({
      prop: 'disabled',
      scale: 'Button.disabled',
    })}
  `,
  variants: {
    default: css`
      color: ${colors.primary};
      background: transparent;
      box-shadow: none;

      &:hover {
        color: ${colors.shades.primary[1]};
      }

      &:active,
      &:focus {
        color: ${colors.shades.primary[2]};
      }
    `,
    white: css`
      color: ${colors.accent};
      background: ${colors.white};
      box-shadow: none;
      z-index: 1;
      transform: scale(1.08) perspective(15px);

      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border-width: 3px;
        border-style: solid;
        -webkit-transition-duration: 0.35s;
        transition-duration: 0.35s;
        background-color: var(--theme-ui-colors-alphaLighter, #feedd9);
        border-color: transparent;
        -webkit-transform: scale(0.5) perspective(15px);
        -ms-transform: scale(0.5) perspective(15px);
        transform: scale(0.5) perspective(15px);
        opacity: 0;
      }

      &::after {
        content: ' ';
        position: absolute;
        z-index: -3;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border-width: 3px;
        border-style: solid;
        -webkit-transition-duration: 0.35s;
        transition-duration: 0.35s;
        background-color: ${colors.white};
      }

      &:hover {
        &::before {
          opacity: 1;
          -webkit-transform: scale(1.08) perspective(15px);
          -ms-transform: scale(1.08) perspective(15px);
          transform: scale(1.08) perspective(15px);
        }

        &::after {
          -webkit-transform: scale(1.08);
          -ms-transform: scale(1.08);
          transform: scale(1.08);
          -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, 0.1);
          transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, 0.1);
        }
      }

      &:active,
      &:focus {
        color: ${colors.shades.primary[2]};
      }
    `,
    ...['primary', 'secondary', 'accent'].reduce(
      (variants, color) => ({
        ...variants,
        [color]: css`
          color: ${colors.gray[7]};
          background: ${colors[color]};
          box-shadow: 0 24px 32px ${transparentize(0.86, colors[color])};

          &:hover {
            background: ${colors.shades[color][1]};
          }

          &:active,
          &:focus {
            background: ${colors.shades[color][2]};
            box-shadow: none;
          }
        `,
      }),
      {},
    ),
  },
  sizes: {
    small: css`
      padding: 6px 48px 7px;
      border-radius: ${borderRadius.normal}px;
      ${Typography.variants.button};
    `,
    large: css`
      padding: 15px 48px;
      ${Typography.variants.button1};
      border-radius: ${borderRadius.xLarge}px;
    `,
  },
  disabled: {
    true: css`
      color: ${props => (props.variant === 'default' ? colors.gray[4] : colors.gray[7])} !important;
      cursor: default;
      background-color: ${props =>
        props.variant === 'default' ? colors.gray[6] : colors.gray[5]} !important;
      box-shadow: none !important;
    `,
  },
};
