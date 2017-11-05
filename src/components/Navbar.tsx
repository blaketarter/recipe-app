import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import COLOR from '../utils/colors';

const Wrapper = styled.ul`
  background: ${COLOR.WHITE};
  height: 60px;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  padding-right: 20%;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  flex: 0 0 auto;
`;

const NavItemWrapper = styled.li`
  display: block;
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
  color: ${COLOR.BLACK};
  font-size: 12px;
  width: 20%;
`;

const FloatingNavItemWrapper = styled.li`
  display: block;
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
  background: ${COLOR.PRIMARY};
  color: ${COLOR.BLACK};
  position: absolute;
  top: -32.5px;
  right: 5px;
  height: 65px;
  width: 65px;
  border-radius: 100%;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
  overflow: hidden;
`;

interface NavItemInterface {
  activeClassName: string;
}

const activeClassName = 'nav-item-active';

const NavItem = styled(NavLink).attrs<NavItemInterface>({ activeClassName })`
  height: 100%;
  width: 100%;
  text-align: center;
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: inherit;
  font-weight: bolder;

  &.${activeClassName} {
    background: ${COLOR.LIGHTGREY};
  }
`;

const FloatingNavItem = styled(NavLink).attrs<NavItemInterface>({ activeClassName })`
height: 100%;
width: 100%;
text-align: center;
color: inherit;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
font-size: inherit;

&.${activeClassName} {
  background: ${COLOR.PRIMARY};
}
`;

export interface Props {
}

function Navbar({}: Props) {
  return (
    <Wrapper>
      <NavItemWrapper>
        <NavItem to="/" exact={true} activeClassName={activeClassName}>Home</NavItem>
      </NavItemWrapper>

      <NavItemWrapper>
        <NavItem to="/search" activeClassName={activeClassName}>Search</NavItem>
      </NavItemWrapper>

      <NavItemWrapper>
        <NavItem to="/tags" activeClassName={activeClassName}>Tags</NavItem>
      </NavItemWrapper>

      <NavItemWrapper>
        <NavItem to="/profile" activeClassName={activeClassName}>Profile</NavItem>
      </NavItemWrapper>

      <FloatingNavItemWrapper>
        <FloatingNavItem to="/create" activeClassName={activeClassName}>+</FloatingNavItem>
      </FloatingNavItemWrapper>

      {/* <NavItemWrapper><NavItem to="recipe">Recipe</NavItem></NavItemWrapper> */}
    </Wrapper>
  );
}

export default Navbar;
