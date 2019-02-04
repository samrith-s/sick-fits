import styled from 'styled-components';

export const ItemsBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
`;

export const ItemBlock = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto auto;
  border-radius: ${props => props.theme.variables.borderRadius};
  box-shadow: 0 0 5px 3px ${props => props.theme.colors.lightGray};
  overflow: hidden;

  > img {
    width: 100%;
    height: auto;
  }
`;
