import styled from 'styled-components';

export const HeaderBlock = styled.header`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-auto-flow: column;
`;

export const Logo = styled.a`
  position: relative;
  max-width: max-content;
  margin: 10px 20px;
  padding: 5px 10px;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transform: skew(-10deg);
  perspective: 200px;
  cursor: pointer;

  @media (max-width: ${props => props.theme.variables.maxWidth}) {
    margin: 10px auto;
  }
`;

export const NavBlock = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-flow: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 10px solid ${props => props.theme.colors.black};

  @media (max-width: ${props => props.theme.variables.maxWidth}) {
    grid-template-rows: auto auto;
    grid-template-columns: 100%;
    grid-auto-flow: column;
    grid-row-gap: 10px;
    justify-content: center;
    padding: 0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: center;
  justify-self: flex-start;
  width: 100%;

  @media (max-width: ${props => props.theme.variables.maxWidth}) {
    border-top: 1px solid ${props => props.theme.colors.lightGray};
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 10px 20px;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1px;
    bottom: 0;
    width: 1px;
    background: ${props => props.theme.colors.lightGray};
    transform: skew(-15deg);
  }

  > a {
    position: relative;
    color: ${props => props.theme.colors.black};
    text-decoration: none;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 2px;
      background: ${props => props.theme.colors.red};
      transform: translateX(50%);
      transition: all 0.25s cubic-bezier(1, -0.65, 0, 2.31);
    }
  }

  &:hover > a:after {
    width: 100%;
    transform: translateX(0);
  }
`;
