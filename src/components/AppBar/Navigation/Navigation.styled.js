import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.line};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  &.active {
    text-shadow: ${p => p.theme.shadows.text};
    color: ${p => p.theme.colors.white};
  }
`;
