import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-scroll';
import { smoothLinkProps } from '@pagerland/common/src/utils';

import Container from '@pagerland/common/src/components/Container';
import Box from '@pagerland/common/src/components/Box';
import List from '@pagerland/common/src/components/List';
import Button from '@pagerland/common/src/components/Button';
import NavbarWrapper from '@pagerland/common/src/components/Navbar';
import useIsWindowScrollMoreThan from '@pagerland/common/src/hooks/useIsWindowScrollMoreThan';

import LanderPagerLogo from '../../components/Logo';

import data from '../../data';
import { LogoWrapper, MobileWrapper, NavbarLink, ToggleButton, Wrapper } from './styled.components';
import { zIndex } from '../../styles';

const Navbar = ({
  WrapperProps,
  ContainerProps,
  MenuItemsListProps,
  LogoProps,
  LinksWrapperProps,
  LinkProps,
  ActionsWrapperProps,
  ActionProps,
  ToggleButtonProps,
  MobileMenuProps,
  MobileMenuToggleProps,
  Logo,
  links,
  actions,
}) => {
  const isNavbarSticky = useIsWindowScrollMoreThan(0);

  const menu = onClick => (
    <>
      {links && (
        <List {...LinksWrapperProps}>
          {links.map(({ label, ...link }, i) => (
            <List.Item key={i}>
              <NavbarLink {...LinkProps} onClick={onClick} {...link}>
                {label}
              </NavbarLink>
            </List.Item>
          ))}
        </List>
      )}
      {actions && (
        <Box {...ActionsWrapperProps}>
          {actions.map(({ label, ...link }, i) => (
            <Button {...ActionProps} onClick={onClick} {...link} key={i}>
              {label}
            </Button>
          ))}
        </Box>
      )}
    </>
  );

  return (
    <NavbarWrapper
      rwdMenu={({ onToggle, isOpen, onClose }) => (
        <MobileWrapper isActive={isOpen} {...MobileMenuProps}>
          <ToggleButton isActive={isOpen} toggleButton={onToggle} {...MobileMenuToggleProps} />
          {menu(onClose)}
        </MobileWrapper>
      )}
    >
      {({ onToggle, isOpen, onClose }) => (
        <Wrapper
          className={classNames({
            sticky: isNavbarSticky,
          })}
          {...WrapperProps}
        >
          <Container {...ContainerProps}>
            <Box flexBox alignItems="center">
              {Logo && (
                <LogoWrapper {...LogoProps}>
                  <Logo />
                </LogoWrapper>
              )}
              <Box {...MenuItemsListProps}>{menu(onClose)}</Box>
              <ToggleButton isActive={isOpen} toggleButton={onToggle} {...ToggleButtonProps} />
            </Box>
          </Container>
        </Wrapper>
      )}
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Navbar container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Props of menu container
   * @See @pagerland/common/src/components/Box
   */
  MenuItemsListProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  LinksWrapperProps: PropTypes.object,
  /**
   * Single link props
   */
  LinkProps: PropTypes.object,
  /**
   * Logo element props
   */
  LogoProps: PropTypes.object,
  /**
   * Additional buttons wrapper props
   */
  ActionsWrapperProps: PropTypes.object,
  /**
   * Additional button props
   */
  ActionProps: PropTypes.object,
  /**
   * Toggle RWD menu props
   */
  ToggleButtonProps: PropTypes.object,
  /**
   * Props of mobile menu wrapper
   */
  MobileMenuProps: PropTypes.object,
  /**
   * Props of mobile menu toggle
   */
  MobileMenuToggleProps: PropTypes.object,
  /**
   * Logo element
   */
  Logo: PropTypes.elementType,
  /**
   * List of links
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      as: PropTypes.elementType,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.node.isRequired,
    }),
  ),
  /**
   * List of action buttons
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      as: PropTypes.elementType,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.node.isRequired,
    }),
  ),
};

Navbar.defaultProps = {
  WrapperProps: {
    stickyBgColor: 'background',
  },
  ContainerProps: {
    py: 4,
  },
  MenuItemsListProps: {
    display: {
      _: 'none',
      lg: 'flex',
    },
    alignItems: 'center',
    width: '100%',
  },
  LogoProps: {
    as: Link,
    to: '',
    ...smoothLinkProps,
    mx: {
      _: 'auto',
      md: '0',
    },
  },
  LinksWrapperProps: {
    display: 'flex',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    alignItems: 'center',
    ml: 'auto',
    mr: {
      _: 'auto',
      lg: 0,
    },
  },
  LinkProps: {
    mx: {
      _: 0,
      lg: 3,
    },
    my: {
      _: 3,
      lg: 0,
    },
    as: Link,
    activeColor: 'brand',
    ...smoothLinkProps,
  },
  ActionsWrapperProps: {
    mt: {
      _: 2,
      lg: 0,
    },
    ml: {
      _: 0,
      lg: 3,
    },
  },
  ActionProps: {
    variant: 'brand',
    size: 'small',
    as: 'a',
  },
  ToggleButtonProps: {
    buttonWidth: 24,
    position: 'absolute',
    right: 3,
    color: 'invert',
    display: {
      lg: 'none',
    },
  },
  MobileMenuProps: {
    display: {
      _: 'flex',
      lg: 'none',
    },
    position: 'fixed',
    backgroundColor: 'background',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: zIndex.menuNav,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  MobileMenuToggleProps: {
    buttonWidth: 24,
    color: 'brand',
    position: 'absolute',
    right: 3,
    top: 3,
  },
  Logo: LanderPagerLogo,
  links: data.navbar.links,
  actions: data.navbar.actions,
};

export default Navbar;
