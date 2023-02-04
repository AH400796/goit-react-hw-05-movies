import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  font-size: 20px;
  color: #000000;

  background-color: #ffffff;
`;

export const Header = styled.header`
  padding: 10px 0;
  margin-bottom: 16px;
  box-shadow: 2px 3px 4px #cecccc;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #e45580;
  }
`;
