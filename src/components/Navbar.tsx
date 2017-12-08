import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MdHome from 'react-icons/lib/md/home';
import MdSearch from 'react-icons/lib/md/search';
import MdList from 'react-icons/lib/md/list';
import MdAdd from 'react-icons/lib/md/add';
import COLOR from '../utils/colors';
import { boxShadowSmall } from '../utils/metrics';

const activeClassName = 'nav-item-active';
const IconSize = 24;

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
    </Wrapper>
  );
}

export interface Props { }

interface NavItemInterface {
  activeClassName: string,
}

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

const NavItemText = styled.span``;

export default Navbar;
