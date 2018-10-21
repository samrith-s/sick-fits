import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font-family: 'Niramit';
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2;
  }
`;
