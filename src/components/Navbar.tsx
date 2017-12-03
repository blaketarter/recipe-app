import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MdHome from 'react-icons/lib/md/home';
import MdSearch from 'react-icons/lib/md/search';
import MdList from 'react-icons/lib/md/list';
import MdAdd from 'react-icons/lib/md/add';
import COLOR from '../utils/colors';
import { boxShadowSmall } from '../utils/metrics';

const IconSize = 24;

const Wrapper = styled.ul`
  background: ${COLOR.WHITE};
  height: 50px;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  box-shadow: ${boxShadowSmall};
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

const NavItemText = styled.span`
  /* margin-top: 3px; */
`;

// const FloatingNavItemWrapper = styled.li`
//   display: block;
//   margin: 0;
//   padding: 0;
//   flex: 1 1 auto;
//   background: ${COLOR.PRIMARY};
//   color: ${COLOR.BLACK};
//   position: absolute;
//   top: -32.5px;
//   right: 5px;
//   height: 65px;
//   width: 65px;
//   border-radius: 100%;
//   box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
//   font-size: 20px;
//   overflow: hidden;
// `;

interface NavItemInterface {
  activeClassName: string;
}

const activeClassName = 'nav-item-active';

const NavItem = styled(NavLink).attrs<NavItemInterface>({ activeClassName })`
  height: 100%;
  width: 100%;
  text-align: center;
  color: ${COLOR.GREY};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: inherit;
  font-weight: bolder;

  &.${activeClassName} {
    color: ${COLOR.BLACK};
  }
`;

export interface Props {}

function Navbar({}: Props) {
  return (
    <Wrapper>
      <NavItemWrapper>
        <NavItem to="/" exact={true} activeClassName={activeClassName}>
          <MdHome size={IconSize} />
          <NavItemText>Home</NavItemText>
        </NavItem>
      </NavItemWrapper>

      <NavItemWrapper>
        <NavItem to="/search" activeClassName={activeClassName}>
          <MdSearch size={IconSize} />  
          <NavItemText>Search</NavItemText>
        </NavItem>
      </NavItemWrapper>

      <NavItemWrapper>
        <NavItem to="/tags" activeClassName={activeClassName}>
          <MdList size={IconSize} />  
          <NavItemText>Tags</NavItemText>
        </NavItem>
      </NavItemWrapper>

      <NavItemWrapper>
        <NavItem to="/create" activeClassName={activeClassName}>
          <MdAdd size={IconSize} />
          <NavItemText>Add</NavItemText>
        </NavItem>
      </NavItemWrapper>
      
      {/* <NavItemWrapper>
        <NavItem to="/profile" activeClassName={activeClassName}>
          <MdPerson size={IconSize} />  
          <NavItemText>Profile</NavItemText>
        </NavItem>
      </NavItemWrapper> */}

      {/* <FloatingNavItemWrapper>
        <FloatingNavItem to="/create" activeClassName={activeClassName}>+</FloatingNavItem>
      </FloatingNavItemWrapper> */}

      {/* <NavItemWrapper><NavItem to="recipe">Recipe</NavItem></NavItemWrapper> */}
    </Wrapper>
  );
}

export default Navbar;
