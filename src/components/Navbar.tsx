import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLOR from '../utils/colors';

const Wrapper = styled.ul`
  background: ${COLOR.BLACK};
  height: 60px;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  padding-right: 65px;
`;

const NavItemWrapper = styled.li`
  display: block;
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
  color: ${COLOR.WHITE};
`;

const FloatingNavItemWrapper = styled.li`
  display: block;
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
  background: ${COLOR.BROWN};
  color: ${COLOR.BLACK};
  position: absolute;
  top: -32.5px;
  right: 5px;
  height: 65px;
  width: 65px;
  border-radius: 100%;
`;

const NavItem = styled(Link) `
  height: 100%;
  width: 100%;
  text-align: center;
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface Props {
}

function Navbar({}: Props) {
  return (
    <Wrapper>
      <NavItemWrapper><NavItem to="/">Home</NavItem></NavItemWrapper>
      <NavItemWrapper><NavItem to="search">Search</NavItem></NavItemWrapper>
      <NavItemWrapper><NavItem to="tags">Tags</NavItem></NavItemWrapper>
      <NavItemWrapper><NavItem to="profile">Profile</NavItem></NavItemWrapper>
      <FloatingNavItemWrapper><NavItem to="create">Create</NavItem></FloatingNavItemWrapper>
      {/* <NavItemWrapper><NavItem to="recipe">Recipe</NavItem></NavItemWrapper> */}
    </Wrapper>
  );
}

export default Navbar;
