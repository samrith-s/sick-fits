import styled from 'styled-components';

export const PageBlock = styled.div`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
`;

export const PageInner = styled.div`
  max-width: ${props => props.theme.variables.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
