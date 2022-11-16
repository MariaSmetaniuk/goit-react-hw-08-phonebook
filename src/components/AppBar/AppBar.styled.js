import styled from 'styled-components';

export const Header = styled.header`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.accent};
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.line};
  box-shadow: ${p => p.theme.shadows.header};
`;
