import styled from 'styled-components';

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  padding: 5px;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  perspective: 200px;
  transform: skew(-10deg);
  text-transform: uppercase;
  font-weight: bold;
`;
