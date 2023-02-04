import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 8px;
  font-size: 16px;
  color: black;
  background-color: #ffffff;
  text-decoration: none;
  border: 1px solid #e45580;
  border-radius: 10px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;

  :hover {
    color: #ffffff;
    background-color: #e45580;
  }
`;
